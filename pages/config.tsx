import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { useEffect, useState } from 'react'
import { Avatar, Layout } from '@components/common'
import { Button, SideTab, Container, Grid, Input, Text } from '@components/ui'
import {
  IoPersonOutline as Person,
  IoSettingsOutline as Settings,
  IoNotificationsOutline as Notification,
  IoBusinessOutline as Business,
  IoBrushOutline as Brush,
  IoWalletOutline as Wallet,
  IoKeyOutline as Key,
  IoCloudUpload as Upload,
} from 'react-icons/io5'
import { useAuth } from '@lib/hooks/useAuth'
import { useForm } from 'react-hook-form'
import { useUI } from '@components/ui'
import Link from 'next/link'

const Profil = () => {
  const { user, error, updateDisplayName, updateAvatar } = useAuth()
  const { handleSubmit, register } = useForm()
  const [loading, setLoading] = useState(false)

  const storage = getStorage()

  const handleProfil = async (e) => {
    setLoading(true)
    await updateDisplayName(e.displayName).then(() => {
      setLoading(false)
      if (error) {
        console.log(error)
      }
    })
  }

  const handleAvatar = async (e) => {
    setLoading(true)
    const storageRef = ref(storage, 'avatars/' + user.uid)
    await uploadBytes(storageRef, e.target.files[0]).then((snapshot) => {})
    await getDownloadURL(storageRef).then((url) => {
      updateAvatar(url)
    })
    setLoading(false)
  }

  return (
    <>
      <Text variant="sectionHeading" className="border-b">
        Votre profil public
      </Text>
      <div className="grid md:grid-cols-2 gap-6 mt-4">
        <form onSubmit={handleSubmit(handleProfil)} className="space-y-4">
          <Input
            label="Nom"
            variant="slim"
            defaultValue={user.displayName}
            labelVisible
            {...register('displayName')}
          />
          <Button variant="slim" type="submit" loading={loading}>
            Enregistrer
          </Button>
        </form>
        <div className="flex flex-col items-center justify-center">
          <Text variant="subsectionHeading">Photo de profil</Text>
          <div className="relative h-48 w-48 flex">
            <label
              className="relative cursor-pointer w-full h-full"
              htmlFor="file"
            >
              <Upload
                size={48}
                className="text-white pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
              />
              <Avatar className="w-full h-full" />
            </label>
            <input
              className="hidden"
              id="file"
              name="file"
              type="file"
              accept="image/*"
              onChange={handleAvatar}
            />
          </div>
        </div>
      </div>
    </>
  )
}

const TABS = [
  { name: 'Profil', logo: <Person />, component: <Profil /> },
  { name: 'Compte', logo: <Settings /> },
  { name: 'Apparence', logo: <Brush /> },
  { name: 'Notifications', logo: <Notification /> },
  { name: 'Facturation', logo: <Wallet /> },
  { name: 'Mot de passe', logo: <Key /> },
  { name: 'Société', logo: <Business /> },
]

export default function Config() {
  const { user } = useAuth()
  const [activeTab, setActiveTab] = useState(Object)

  const handleTab = (e) => {
    setActiveTab(e)
  }

  useEffect(() => {
    setActiveTab(TABS[0])
  }, [])

  return (
    <Container className="pt-4">
      <UserInfos user={user} />
      <div className="grid md:grid-cols-4 gap-x-10 w-full mt-4 md:mt-8">
        <SideTab className="md:col-span-1" tabs={TABS} activeTab={handleTab} />
        <div className="md:col-span-3">{activeTab.component}</div>
      </div>
    </Container>
  )
}

const UserInfos = ({ user }) => {
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
        <Link href="/profil">
          <Button variant="slim">Retour au profil</Button>
        </Link>
      </div>
    </div>
  )
}

Config.Layout = Layout
