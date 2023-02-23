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
            <nav className={s.nav}>
                <div className={s.navMenu}>
                    <Link href="/products">
                        <a className={s.link}>Produits</a>
                    </Link>
                    <Link href="/services">
                        <a className={s.link}>Services</a>
                    </Link>
                    <Link href="/contact">
                        <a className={s.link}>Contact</a>
                    </Link>
                </div>
                <Link href="/">
                    <a className={s.logo} aria-label="Logo">
                        <Logo />
                    </a>
                </Link>
                <div className={s.user}>
                    <SearchBar className="hidden lg:block" />
                    <UserNav />
                </div>
            </nav>
        </Container>
    </NavbarRoot>
)

export default Navbar
