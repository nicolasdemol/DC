import cn from 'clsx'
import React from 'react'
import Link from 'next/link'
import s from './UserNav.module.css'
import { VscMenu as Menu } from 'react-icons/vsc'
import { Avatar } from '@components/common'
import { useUI } from '@components/ui/context'
import { useAuth } from '@lib/hooks/useAuth'
import { Dropdown, Button } from '@components/ui'

const UserNav: React.FC<{
  className?: string
}> = ({ className }) => {
  const { user } = useAuth()
  const { openModal, setSidebarView, openSidebar } = useUI()

  return (
    <nav className={cn(s.root, className)}>
      <ul className={s.list}>
        <li className={s.menu}>
          {user ? (
            <div aria-label="Menu" className={s.avatarButton}>
              <Avatar className="h-12 w-12" />
            </div>
          ) : (
            <Button variant="medium" onClick={openModal}>
              Connexion
            </Button>
          )}
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
            <Menu size={32} />
          </Button>
        </li>
      </ul>
    </nav>
  )
}

export default UserNav
