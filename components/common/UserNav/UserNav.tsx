import cn from 'clsx'
import Link from 'next/link'
import s from './UserNav.module.css'
import { Avatar } from '@components/common'
import { useUI } from '@components/ui/context'
import { useAuth } from '@lib/hooks/useAuth'
import CustomerMenuContent from './CustomerMenuContent'
import React from 'react'
import {
  Dropdown,
  DropdownTrigger as DropdownTriggerInst,
  Button,
} from '@components/ui'

const UserNav: React.FC<{
  className?: string
}> = ({ className }) => {
  const { user } = useAuth()
  const { openModal } = useUI()

  const DropdownTrigger = user ? DropdownTriggerInst : React.Fragment

  return (
    <nav className={cn(s.root, className)}>
      <Dropdown>
        <DropdownTrigger>
          <button
            aria-label="Menu"
            className={s.avatarButton}
            onClick={() => (user ? null : openModal())}
          >
            <Avatar />
          </button>
        </DropdownTrigger>
        <CustomerMenuContent />
      </Dropdown>
    </nav>
  )
}

export default UserNav