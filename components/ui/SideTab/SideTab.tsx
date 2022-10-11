import { FC, useEffect, useState } from 'react'
import cn from 'clsx'
import s from './SideTab.module.css'

interface SideTabProps {
  className?: string
  tabs?: any
  activeTab: Function
}

const SideTab: FC<SideTabProps> = ({ className, tabs, activeTab }) => {
  const [active, setActive] = useState(tabs[0])

  const handleTab = (e) => {
    setActive(e)
    activeTab(e)
  }

  return (
    <div className={cn(s.root, className)}>
      {tabs.map((tab) => (
        <div
          className={cn(s.item, { [s.active]: active == tab })}
          key={tab.name}
          onClick={() => handleTab(tab)}
        >
          {tab.logo}
          <span className="pl-2 text-md py-2">{tab.name}</span>
        </div>
      ))}
    </div>
  )
}

export default SideTab
