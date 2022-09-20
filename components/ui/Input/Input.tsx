import cn from 'clsx'
import s from './Input.module.css'
import React, {
  useRef,
  forwardRef,
  InputHTMLAttributes,
  JSXElementConstructor,
} from 'react'
import { mergeRefs } from 'react-merge-refs'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string
  onChange?: (...args: any[]) => any
  Component?: string | JSXElementConstructor<any>
  label?: string
}

const Input: React.FC<InputProps> = forwardRef((props, inputRef) => {
  Input.displayName = 'Input'

  const {
    className,
    Component = 'input',
    onChange,
    onBlur,
    label,
    name,
    value,
    ...rest
  } = props
  const rootClassName = cn(s.root, {}, className)
  const ref = useRef<typeof Component>(null)

  return (
    <>
      <label hidden htmlFor={name}>
        {label}
      </label>
      <Component
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={rootClassName}
        ref={mergeRefs([ref, inputRef])}
        {...rest}
      />
    </>
  )
})

export default Input
