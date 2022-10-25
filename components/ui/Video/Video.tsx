import { FC, useRef, forwardRef, JSXElementConstructor } from 'react'
import cn from 'clsx'
import s from './Video.module.css'
import { mergeRefs } from 'react-merge-refs'

interface VideoProps {
  id: string
  children?: any
  className?: string
  Component?: string | JSXElementConstructor<any>
}

const Video: FC<VideoProps> = forwardRef((props, videoRef) => {
  Video.displayName = 'Video'
  const { id, className, children, Component = 'video', ...rest } = props

  const ref = useRef<typeof Component>(null)
  return (
    <Component
      id={id}
      className={cn(s.root, className)}
      ref={mergeRefs([ref, videoRef])}
      src={`/api/videos/${id}`}
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

export default Video
