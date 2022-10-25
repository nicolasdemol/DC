import { useState } from 'react'
import { IoPencil as Pencil } from 'react-icons/io5'
import { useAuth } from '@lib/hooks/useAuth'
import { ref, getStorage, uploadBytes, getDownloadURL } from 'firebase/storage'
import { useForm } from 'react-hook-form'
import { Text, Button, Input } from '@components/ui'
import { Avatar } from '@components/common'

const PublicProfil = () => {
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
            Mettre à jour
          </Button>
        </form>
        <div className="flex flex-col items-center justify-center">
          <Text variant="subsectionHeading">Photo de profil</Text>
          <div className="relative h-48 w-48 flex">
            <label
              className="relative cursor-pointer w-full h-full"
              htmlFor="file"
            >
              <div className="pointer-events-none absolute bottom-4 z-10">
                <div className="bg-accent-9 flex items-center px-2 py-1 text-accent-0 rounded-lg">
                  <Pencil size={20} className="" />
                  <span className="pl-1 font-semibold">Modifier</span>
                </div>
              </div>
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

export default PublicProfil
