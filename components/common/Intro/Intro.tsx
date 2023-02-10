import React, { FC, useState } from 'react'
import { motion } from 'framer-motion'
import { useMousePosition } from '@lib/hooks/useMousePosition'
import s from './Intro.module.css'
import { Container, Video, Text } from '@components/ui'
import Link from 'next/link'

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
      x: pos.x - 300 / 2,
      y: pos.y - 300 / 2,
    },
    inactive: {
      opacity: 0,
      height: 100,
      width: 100,
      x: pos.x - 100 / 2,
      y: pos.y - 100 / 2,
    },
  }

  return (
    <Container>
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
              <Video key={id} className={video == id ? '' : 'hidden'} id={id} />
            ))}
          </motion.div>
        </div>
      </div>
    </Container>
  )
}

export default Intro
