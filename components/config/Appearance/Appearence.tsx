import { Text, Grid } from '@components/ui'
import Image from 'next/image'
import s from './Appearence.module.css'
import { useTheme } from 'next-themes'

const Appearance = () => {
  const { theme, setTheme } = useTheme()

  return (
    <>
      <Text variant="sectionHeading" className="border-b">
        Préférence du thème
      </Text>
      <div className={s.list}>
        <div onClick={() => setTheme('light')} className={s.item}>
          <div className={s.filter}></div>
          <Image
            className={s.img}
            src="/images/lightTheme.png"
            layout="fill"
            alt="lightTheme"
          />
        </div>
        <div onClick={() => setTheme('dark')} className={s.item}>
          <div className={s.filter}></div>
          <Image
            className={s.img}
            src="/images/darkTheme.png"
            layout="fill"
            alt="darkTheme"
          />
        </div>
      </div>
    </>
  )
}

export default Appearance
