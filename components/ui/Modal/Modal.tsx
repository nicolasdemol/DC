import { FC, useRef, useEffect, useCallback } from 'react'
import s from './Modal.module.css'
import { IoClose as Close } from 'react-icons/io5'
import {
  disableBodyScroll,
  clearAllBodyScrollLocks,
  enableBodyScroll,
} from 'body-scroll-lock'
interface ModalProps {
  className?: string
  children?: any
  onClose: () => void
  onEnter?: () => void | null
}

const Modal: FC<ModalProps> = ({ children, onClose }) => {
  const ref = useRef() as React.MutableRefObject<HTMLDivElement>

  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        return onClose()
      }
    },
    [onClose]
  )

  useEffect(() => {
    const modal = ref.current

    if (modal) {
      disableBodyScroll(modal, { reserveScrollBarGap: true })
      window.addEventListener('keydown', handleKey)
    }
    return () => {
      if (modal) {
        enableBodyScroll(modal)
      }
      clearAllBodyScrollLocks()
      window.removeEventListener('keydown', handleKey)
    }
  }, [handleKey])

  return (
    <div className={s.root}>
      <div className={s.modal} role="dialog" ref={ref}>
        <button
          onClick={() => onClose()}
          aria-label="Close panel"
          className={s.close}
        >
          <Close className="h-8 w-8" />
        </button>
        {children}
      </div>
    </div>
  )
}

export default Modal
