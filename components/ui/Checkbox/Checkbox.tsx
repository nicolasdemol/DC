import cn from 'clsx'
import {
  useState,
  InputHTMLAttributes,
  JSXElementConstructor,
  forwardRef,
  useRef,
} from 'react'
import { IoCheckmark } from 'react-icons/io5'
import s from './Checkbox.module.css'
import { mergeRefs } from 'react-merge-refs'

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string
  Component?: string | JSXElementConstructor<any>
  label?: string
  name?: string
  value?: string
}

const Checkbox: React.FC<CheckboxProps> = forwardRef((props, checkboxRef) => {
  Checkbox.displayName = 'Checkbox'
  const {
    className,
    Component = 'input',
    onChange,
    defaultChecked,
    label,
    name,
    checked,
    value,
    ...rest
  } = props

  const [check, setCheck] = useState(defaultChecked || false)

  const ref = useRef<typeof Component>(null)

  return (
    <label className={cn(s.root, { [s.check]: check })}>
      <Component
        className={className}
        ref={mergeRefs([ref, checkboxRef])}
        name={name}
        value={value}
        onChange={() => setCheck(!check)}
        defaultChecked={check}
        type="checkbox"
        {...rest}
      />
      {check ? <IoCheckmark size={36} className="mr-1" /> : ''}
      {label}
    </label>
  )
})

export default Checkbox
