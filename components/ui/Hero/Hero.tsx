import React, { FC } from 'react'
import { Container } from '@components/ui'
import { IoArrowForward } from 'react-icons/io5'
import s from './Hero.module.css'
import Link from 'next/link'
interface HeroProps {
  className?: string
  headline: string
  description: string
}

const Hero: FC<HeroProps> = ({ headline, description }) => {
  return (
    <div className="bg-accent-0 border-b border-t border-accent-2">
      <Container>
        <div className={s.root}>
          <h2 className={s.title}>{headline}</h2>
          <div className={s.description}>
            <p>{description}</p>
            <Link href="/">
              <a className="flex items-center text-accent-9 pt-3 font-bold hover:underline cursor-pointer w-max-content">
                En savoir plus
                <IoArrowForward width="20" height="20" className="ml-1" />
              </a>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Hero
