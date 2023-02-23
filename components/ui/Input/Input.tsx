import cn from 'clsx'
import s from './Input.module.css'
import React, {
    useRef,
    forwardRef,
    InputHTMLAttributes,
    JSXElementConstructor,
    Component,
    TextareaHTMLAttributes,
} from 'react'
import { mergeRefs } from 'react-merge-refs'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string
    onChange?: (...args: any[]) => any
    Component?: string | JSXElementConstructor<any>
    label?: string
    labelVisible?: boolean
    variant?: string
}

export interface TextAreaProps
    extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    className?: string
    onChange?: (...args: any[]) => any
    Component?: string | JSXElementConstructor<any>
    label?: string
    labelVisible?: boolean
    variant?: string
}

const Input: React.FC<InputProps> = forwardRef((props, inputRef) => {
    Input.displayName = 'Input'

    const {
        className,
        Component = 'input',
        onChange,
        onBlur,
        label,
        labelVisible,
        name,
        variant,
        value,
        ...rest
    } = props
    const rootClassName = cn(
        s.root,
        {
            [s.slim]: variant === 'slim',
        },
        className
    )
    const ref = useRef<typeof Component>(null)

    return (
        <div>
            <label
                className={cn(s.label, { hidden: !labelVisible }, 'leading-7')}
                htmlFor={name}
            >
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
        </div>
    )
})

export default Input
