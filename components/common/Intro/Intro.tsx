import React, { FC, useState, useEffect } from 'react'
import cn from 'clsx'
import { useMousePosition } from '@lib/hooks/useMousePosition'
import s from './Intro.module.css'
import { Container, Text } from '@components/ui'
import Link from 'next/link'

const ITEMS = [
  {
    id: 0,
    name: 'website',
    title: 'SiteWeb',
    href: '/website',
  },
  {
    id: 1,
    name: 'app',
    title: 'App',
    href: '/app',
  },
  {
    id: 2,
    name: 'design',
    title: 'Design',
    href: '/design',
  },
]

const Intro: FC = () => {
  const [video, setVideo] = useState(false)
  const position = useMousePosition()
  const handleEvent = (e) => {
    setVideo(e)
  }

  const styles = {
    transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
  }
  return (
    <div className="bg-accent-0 relative">
      <Container>
        <div className={s.root}>
          {video ? (
            <video
              style={styles}
              className={cn(s.video)}
              src={`./videos/${video}.mp4`}
              preload="auto"
              autoPlay
              muted
              loop
            ></video>
          ) : (
            ''
          )}
          <div className={s.list}>
            {ITEMS.map((item) => (
              <div
                id={item.name}
                key={item.id}
                className={s.item}
                onMouseEnter={() => handleEvent(item.name)}
                onMouseLeave={() => handleEvent(false)}
              >
                <Link href={item.href}>
                  <a className={s.title}>{item.title}</a>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Intro
