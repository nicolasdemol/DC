import React, { FC, ReactNode } from 'react'
import { useTheme } from 'next-themes'
import { IoClose, IoChevronBack, IoLogOut, IoSettings } from 'react-icons/io5'
import { UserNav } from '@components/common'
import cn from 'clsx'
import s from './SidebarLayout.module.css'
import { Button, Logo } from '@components/ui'
import { useAuth } from '@lib/hooks/useAuth'
import { IoMoon, IoSunny } from 'react-icons/io5'
import Link from 'next/link'

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
        <Logo />
        {handleBack && (
          <button
            onClick={handleBack}
            aria-label="Go back"
            className="hover:text-accent-5 transition ease-in-out duration-150 flex items-center focus:outline-none"
          >
            <IoChevronBack className="h-6 w-6 hover:text-accent-3" />
          </button>
        )}
        {handleClose && (
          <button
            onClick={handleClose}
            aria-label="Close"
            className="hover:text-accent-5 transition ease-in-out duration-150 flex items-center focus:outline-none mx-2"
          >
            <IoClose className="h-10 w-10 bg-accent-1 p-1 rounded-full hover:text-accent-3" />
          </button>
        )}
      </header>
      <div className={s.container}>{children}</div>
      <Link href="/config">
        <Button
          onClick={handleClose}
          className="!rounded-none !outline-none inline-flex"
        >
          Paramètres
          <IoSettings className="ml-3 h-6 w-6" />
        </Button>
      </Link>
    </div>
  )
}

export default SidebarLayout
