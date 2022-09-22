import { Layout, Intro } from '@components/common'
import { Hero } from '@components/ui'

export default function Home() {
  return (
    <>
      <Intro />
      <Hero
        headline="Agence web experte en développement JavaScript"
        description="Misez sur notre expertise et notre efficacité afin de valoriser votre potentiel et vous apporter des solutions à vos objectifs business. Des ingénieurs qualifiés au cœur de vos projets."
      />
    </>
  )
}

Home.Layout = Layout
