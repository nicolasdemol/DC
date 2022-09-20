import { FC } from 'react'
import Link from 'next/link'
import s from './Navbar.module.css'
import NavbarRoot from './NavbarRoot'
import { UserNav, SearchBar } from '@components/common'
import { Logo, Container } from '@components/ui'

interface Link {
  href: string
  label: string
}

interface NavbarProps {
  links?: Link[]
}

const Navbar: FC<NavbarProps> = ({ links }) => (
  <NavbarRoot>
    <Container clean className="mx-auto max-w-8xl px-6">
      <div className={s.nav}>
        <Link href="/">
          <a className={s.logo} aria-label="Logo">
            <Logo />
          </a>
        </Link>
        <nav className={s.navMenu}>
          <Link href="/search">
            <a className={s.link}>Équipe</a>
          </Link>
          <Link href="/search">
            <a className={s.link}>Services</a>
          </Link>
          <Link href="/search">
            <a className={s.link}>Expertise</a>
          </Link>
          <Link href="/contact">
            <a className={s.link}>Contact</a>
          </Link>
        </nav>
        <SearchBar className="hidden lg:block" />
        <UserNav />
      </div>
    </Container>
  </NavbarRoot>
)

export default Navbar
