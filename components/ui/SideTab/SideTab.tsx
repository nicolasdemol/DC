import { FC, useState } from 'react'
import cn from 'clsx'
import s from './SideTab.module.css'

interface SideTabProps {
    className?: string
    tabs?: any
    defaultTab?: any
}

const SideTab: FC<SideTabProps> = ({ className, tabs, defaultTab }) => {
    const [active, setActive] = useState(defaultTab)

    return (
        <div className="grid md:grid-cols-4 gap-x-10 w-full mt-4 md:mt-8">
            <div className={cn(s.root, className, 'md:col-span-1')}>
                {tabs.map((tab) => (
                    <div
                        className={cn(s.item, { [s.active]: active == tab })}
                        key={tab.name}
                        onClick={() => setActive(tab)}
                    >
                        {tab.logo}
                        <span className="pl-2 text-md py-2">{tab.name}</span>
                    </div>
                ))}
            </div>
            <div className="md:col-span-3">{active.component}</div>
        </div>
    )
}

export default SideTab
