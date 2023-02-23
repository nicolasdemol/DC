import React, { FC, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useMousePosition } from '@lib/hooks/useMousePosition'
import s from './Intro.module.css'
import { Video } from '@components/ui'
import Link from 'next/link'
import cn from 'clsx'

const ITEMS = [
    {
        id: 'website',
        title: 'SiteWeb',
        href: '/website',
    },
    {
        id: 'app',
        title: 'App',
        href: '/app',
    },
    {
        id: 'design',
        title: 'Design',
        href: '/design',
    },
]

const Intro: FC = () => {
    const [video, setVideo] = useState('')
    const pos = useMousePosition()

    const variants = {
        active: {
            opacity: 1,
            height: 300,
            width: 300,
            x: pos.x - 150,
            y: pos.y - 150,
        },
        inactive: {
            opacity: 0,
            height: 300,
            width: 300,
            x: pos.x - 150,
            y: pos.y - 150,
        },
    }

    return (
        <div id="intro" className={s.root}>
            <div id="list" className={s.list}>
                {ITEMS.map(({ id, title, href }) => (
                    <div
                        key={id}
                        className={s.item}
                        onMouseEnter={() => setVideo(id)}
                        onMouseLeave={() => setVideo('')}
                    >
                        <Link href={href}>
                            <a className={s.title}>{title}</a>
                        </Link>
                    </div>
                ))}
                <motion.div
                    className={s.circle}
                    variants={variants}
                    animate={video ? 'active' : 'inactive'}
                >
                    {ITEMS.map(({ id }) => (
                        <Video
                            key={id}
                            className={cn({ hidden: video != id }, 'scale-150')}
                            src={`https://cdn.jsdelivr.net/gh/nicolasdemol/DC@latest/videos/${id}.mp4`}
                        />
                    ))}
                </motion.div>
            </div>
        </div>
    )
}

export default Intro
