import React, { FC, ReactNode } from 'react'
import { useTheme } from 'next-themes'
import {
  IoCloseSharp,
  IoChevronBack,
  IoLogOutSharp,
  IoLogOut,
} from 'react-icons/io5'
import { UserNav } from '@components/common'
import cn from 'clsx'
import s from './SidebarLayout.module.css'
import { Button } from '@components/ui'
import { useAuth } from '@lib/hooks/useAuth'
import { IoMoon, IoSunny } from 'react-icons/io5'

type ComponentProps = { className?: string; children?: ReactNode } & (
  | { handleClose: () => any; handleBack?: never }
  | { handleBack: () => any; handleClose?: never }
)

const SidebarLayout: FC<ComponentProps> = ({
  children,
  className,
  handleBack,
  handleClose,
}) => {
  const { signout } = useAuth()
  const { theme, setTheme } = useTheme()

  return (
    <div className={cn(s.root, className)}>
      <header className={s.header}>
        {handleClose && (
          <button
            onClick={handleClose}
            aria-label="Close"
            className="hover:text-accent-5 transition ease-in-out duration-150 flex items-center focus:outline-none mr-6"
          >
            <IoCloseSharp className="h-12 w-12 hover:text-accent-3" />
          </button>
        )}
        {handleBack && (
          <button
            onClick={handleBack}
            aria-label="Go back"
            className="hover:text-accent-5 transition ease-in-out duration-150 flex items-center focus:outline-none"
          >
            <IoChevronBack className="h-6 w-6 hover:text-accent-3" />
          </button>
        )}
        <a onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
          <div className="ml-3">
            {theme == 'dark' ? (
              <IoMoon className="h-8 w-8" />
            ) : (
              <IoSunny className="h-8 w-8" />
            )}
          </div>
        </a>
        <UserNav />
      </header>
      <div className={s.container}>{children}</div>
      <Button
        onClick={() => {
          handleClose()
          signout()
        }}
        className="!rounded-none inline-flex"
      >
        Déconnexion
        <IoLogOut className="ml-3 h-8 w-8" />
      </Button>
    </div>
  )
}

export default SidebarLayout
