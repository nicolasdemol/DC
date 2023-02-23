import cn from 'clsx'
import s from './Card.module.css'
import { Text } from '@components/ui'

interface CardProps {
    className?: string
    title: string
    description?: string
    bg?: string
}

const Card: React.FC<CardProps> = ({ title, description, bg, className }) => {
    const rootClassName = cn(s.root, className)
    return (
        <div
            className={rootClassName}
            style={{
                backgroundImage: `url(${bg})`,
            }}
        >
            <div>
                <Text variant="subsectionHeading" className={s.title}>
                    {title}
                </Text>
                <span className="block mb-6 md:inline md:mb-0 md:ml-2">
                    {description}
                </span>
            </div>
        </div>
    )
}

export default Card
