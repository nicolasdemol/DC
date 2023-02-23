import Link from 'next/link'
import s from './MenuSidebarView.module.css'
import { useUI } from '@components/ui/context'
import SidebarLayout from '@components/common/SidebarLayout'
import type { Link as LinkProps } from './index'
import { IoChevronForward } from 'react-icons/io5'

export default function MenuSidebarView({
    links = [],
}: {
    links?: LinkProps[]
}) {
    const { closeSidebar } = useUI()

    return (
        <SidebarLayout handleClose={() => closeSidebar()}>
            <div className={s.root}>
                <nav>
                    <ul>
                        {links.map((l: any) => (
                            <li
                                key={l.href}
                                className={s.item}
                                onClick={() => closeSidebar()}
                            >
                                <Link href={l.href}>
                                    <a>{l.label}</a>
                                </Link>
                                <IoChevronForward />
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </SidebarLayout>
    )
}

MenuSidebarView
