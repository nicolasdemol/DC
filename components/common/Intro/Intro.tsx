import React, {
  FC,
  useState,
  useRef,
  forwardRef,
  JSXElementConstructor,
} from 'react'
import cn from 'clsx'
import { motion } from 'framer-motion'
import { mergeRefs } from 'react-merge-refs'
import { useMousePosition } from '@lib/hooks/useMousePosition'
import s from './Intro.module.css'
import { Container, Text } from '@components/ui'
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
    inactive: { opacity: 0, x: pos.x - 300 / 2, y: pos.y - 300 / 2 },
  }

  return (
    <div className="bg-accent-0">
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
          </div>
          <motion.div
            className={s.circle}
            variants={variants}
            animate={video ? 'active' : 'inactive'}
          >
            {video ? <Video id={video} /> : ''}
          </motion.div>
        </div>
      </Container>
    </div>
  )
}

interface VideoProps {
  id: string
  children?: any
  className?: string
  Component?: string | JSXElementConstructor<any>
  innerRef?: any
}

const Video: FC<VideoProps> = forwardRef((props, videoRef) => {
  Video.displayName = 'Video'
  const { id, className, children, Component = 'video', ...rest } = props

  const ref = useRef<typeof Component>(null)
  return (
    <Component
      id={id}
      className={cn(s.video, className)}
      ref={mergeRefs([ref, videoRef])}
      src={`./videos/${id}.mp4`}
      preload="auto"
      autoPlay
      muted
      loop
      {...rest}
    >
      {children}
    </Component>
  )
})

export default Intro
