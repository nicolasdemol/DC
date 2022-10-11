import cn from 'clsx'
import Link from 'next/link'
import s from './UserNav.module.css'
import { IoMenu as Menu } from 'react-icons/io5'
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
  const { openModal, setSidebarView, openSidebar } = useUI()

  const DropdownTrigger = user ? DropdownTriggerInst : React.Fragment

  return (
    <nav className={cn(s.root, className)}>
      <ul className={s.list}>
        <li className={s.item}>
          <Dropdown>
            <DropdownTrigger>
              {user ? (
                <div aria-label="Menu" className={s.avatarButton}>
                  <Avatar className="h-12 w-12" />
                </div>
              ) : (
                <Button variant="medium" onClick={openModal}>
                  Connexion
                </Button>
              )}
            </DropdownTrigger>
            <CustomerMenuContent />
          </Dropdown>
        </li>
        <li className={s.mobileMenu}>
          <Button
            className={s.item}
            aria-label="Menu"
            variant="naked"
            onClick={() => {
              setSidebarView('MOBILE_MENU_VIEW')
              openSidebar()
            }}
          >
            <Menu width={32} height={32} />
          </Button>
        </li>
      </ul>
    </nav>
  )
}

export default UserNav
