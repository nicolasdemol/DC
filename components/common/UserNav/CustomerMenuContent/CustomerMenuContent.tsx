import cn from 'clsx'
import { useTheme } from 'next-themes'
import { useRouter } from 'next/router'
import { IoMoon as Moon, IoSunny as Sun } from 'react-icons/io5'
import s from './CustomerMenuContent.module.css'
import { useAuth } from '@lib/hooks/useAuth'
import {
  DropdownContent,
  DropdownMenuItem,
} from '@components/ui/Dropdown/Dropdown'

const LINKS = [
  {
    name: 'Mes Commandes',
    href: '/orders',
  },
  {
    name: 'Mon Profil',
    href: '/profile',
  },
]

export default function CustomerMenuContent() {
  const router = useRouter()
  const { signout } = useAuth()
  const { pathname } = useRouter()
  const { theme, setTheme } = useTheme()

  function handleClick(_: React.MouseEvent<HTMLAnchorElement>, href: string) {
    router.push(href)
  }

  return (
    <DropdownContent
      asChild
      side="bottom"
      sideOffset={10}
      className={s.root}
      id="CustomerMenuContent"
    >
      {LINKS.map(({ name, href }) => (
        <DropdownMenuItem key={href}>
          <a
            className={cn(s.link, {
              [s.active]: pathname === href,
            })}
            onClick={(e) => handleClick(e, href)}
          >
            {name}
          </a>
        </DropdownMenuItem>
      ))}
      <DropdownMenuItem>
        <a
          className={cn(s.link, 'justify-between')}
          onClick={() => {
            setTheme(theme === 'dark' ? 'light' : 'dark')
          }}
        >
          <div>
            Theme: <strong>{theme}</strong>{' '}
          </div>
          <div className="ml-3">
            {theme == 'dark' ? (
              <Moon width={20} height={20} />
            ) : (
              <Sun width={20} height={20} />
            )}
          </div>
        </a>
      </DropdownMenuItem>
      <DropdownMenuItem>
        <a
          className={cn(s.link, 'border-t border-accent-2 mt-4')}
          onClick={() => signout()}
        >
          Déconnexion
        </a>
      </DropdownMenuItem>
    </DropdownContent>
  )
}
