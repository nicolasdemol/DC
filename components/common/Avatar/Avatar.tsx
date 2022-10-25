import cn from 'clsx'
import { FC, useRef, useState, useEffect } from 'react'
import { useUserAvatar } from '@lib/hooks/useUserAvatar'

interface Props {
  className?: string
  children?: any
}

const Avatar: FC<Props> = ({ className }) => {
  let ref = useRef() as React.MutableRefObject<HTMLInputElement>
  const { userAvatar, isUpdatingAvatar } = useUserAvatar()
  useEffect(() => {}, [isUpdatingAvatar])

  return (
    <div
      ref={ref}
      style={{ backgroundImage: userAvatar }}
      className={cn(
        className,
        'inline-block bg-cover rounded-full border-2 border-primary hover:border-secondary focus:border-secondary transition-colors ease-linear'
      )}
    ></div>
  )
}

export default Avatar
