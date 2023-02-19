import cn from 'clsx'
import React from 'react'
import s from './UserNav.module.css'
import { VscMenu } from 'react-icons/vsc'
import { Avatar } from '@components/common'
import { useUI } from '@components/ui/context'
import { useAuth } from '@lib/hooks/useAuth'
import { Button } from '@components/ui'

const UserNav: React.FC<{
  className?: string
}> = ({ className }) => {
  const { user } = useAuth()
  const { openModal, setModalView, setSidebarView, openSidebar } = useUI()

  return (
    <nav className={cn(s.root, className)}>
      <ul className={s.list}>
        <li className={s.item}>
          {user ? (
            <div
              onClick={() => {
                setSidebarView('MOBILE_MENU_VIEW')
                openSidebar()
              }}
              aria-label="Menu"
              className={s.avatarButton}
            >
              <Avatar className="h-10 w-10 cursor-pointer" />
            </div>
          ) : (
            <Button
              variant="slim"
              onClick={() => {
                setModalView('LOGIN_VIEW')
                openModal()
              }}
            >
              Connexion
            </Button>
          )}
        </li>
      </ul>
    </nav>
  )
}

export default UserNav
