import cn from 'clsx'
import React from 'react'
import s from './Dropdown.module.css'

export const Dropdown = ({ children, className, ...props }) => {
  return <div className={cn(s.root, className)}>{children}</div>
}
