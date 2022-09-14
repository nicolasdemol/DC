import cn from 'clsx'
import s from './UserNav.module.css'
import { Button } from '@components/ui'

const UserNav: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <nav className={cn(s.root, className)}>
      <ul className={s.list}>
        <li>
          <Button className={s.item} variant="slim">
            S'inscrire
          </Button>
        </li>
        <li>
          <Button className={s.item} variant="slim">
            Connexion
          </Button>
        </li>
      </ul>
    </nav>
  )
}

export default UserNav
