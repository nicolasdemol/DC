import { Avatar, Layout } from '@components/common'
import { Button, SideTab, Container, Text } from '@components/ui'
import {
  IoPersonOutline as Person,
  IoSettingsOutline as Settings,
  IoNotificationsOutline as Notification,
  IoBusinessOutline as Business,
  IoBrushOutline as Brush,
  IoWalletOutline as Wallet,
  IoKeyOutline as Key,
  IoLogOut,
} from 'react-icons/io5'
import { Appearance, ChangePassword, PublicProfil } from '@components/config'
import { useAuth } from '@lib/hooks/useAuth'
import Link from 'next/link'

const TABS = [
  { name: 'Profil', logo: <Person />, component: <PublicProfil /> },
  { name: 'Compte', logo: <Settings /> },
  { name: 'Apparence', logo: <Brush />, component: <Appearance /> },
  { name: 'Notifications', logo: <Notification /> },
  { name: 'Facturation', logo: <Wallet /> },
  { name: 'Mot de passe', logo: <Key />, component: <ChangePassword /> },
  { name: 'Société', logo: <Business /> },
]

export default function Config() {
  return (
    <Container className="pt-4">
      <UserInfos />
      <SideTab tabs={TABS} defaultTab={TABS[0]} />
    </Container>
  )
}

export async function getStaticProps() {
  const categories = [
    {
      id: 'account',
      name: 'Mon Profil',
      slug: 'account',
      path: '/account',
    },
    {
      id: 'contracts',
      name: 'Mes Contrats',
      slug: 'contracts',
      path: '/contracts',
    },
    {
      id: 'config',
      name: 'Mes Paramètres',
      slug: 'config',
      path: '/config',
    },
  ]
  return { props: { categories }, revalidate: 60 }
}

const UserInfos = () => {
  const { user, signout } = useAuth()
  return (
    <div className="flex flex-col md:flex-row w-full justify-between">
      <div className="flex items-center">
        <Avatar className="h-14 w-14 mr-4" />
        <div>
          <span className="text-2xl font-semibold">{user.displayName}</span>
          <Text className="">Vos informations personnelles</Text>
        </div>
      </div>
      <div className="flex items-center mt-2">
        <Link href="/">
          <Button onClick={signout} variant="slim">
            Déconnexion
          </Button>
        </Link>
      </div>
    </div>
  )
}

Config.Layout = Layout
