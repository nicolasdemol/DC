import React, { FC } from 'react'
import { Container, Text } from '@components/ui'
import s from './Hero.module.css'
import Link from 'next/link'
interface HeroProps {
    className?: string
    headline: string
    description: string
}

const Hero: FC<HeroProps> = ({ headline, description }) => {
    return (
        <div className="bg-accent-0">
            <Container>
                <div className={s.root}>
                    <Text className={s.title} variant="pageHeading">
                        {headline}
                    </Text>
                    <div className={s.description}>
                        <Text variant="body">{description}</Text>
                        <Link href="/services">
                            <Text className="items-center font-bold">
                                En savoir plus
                            </Text>
                        </Link>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Hero
