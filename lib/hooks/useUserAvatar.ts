import { useEffect } from 'react'
import { useUI } from '@components/ui/context'
import { getRandomPairOfColors } from '@lib/colors'
import { useAuth } from '@lib/hooks/useAuth'

export const useUserAvatar = (name = 'userAvatar') => {
  const { userAvatar, setUserAvatar } = useUI()
  const { user } = useAuth()

  useEffect(() => {
    if (!userAvatar) {
      if (localStorage.getItem(name)) {
        // Get bg from localStorage and push it to the context.
        setUserAvatar(localStorage.getItem(name))
      }
      if (user.photoURL) {
        setUserAvatar(`url(${user.photoURL})`)
      }
    }
    if (!localStorage.getItem(name)) {
      // bg not set locally, generating one, setting localStorage and context to persist.
      const bg = getRandomPairOfColors()
      const value = `linear-gradient(140deg, ${bg[0]}, ${bg[1]} 100%)`
      localStorage.setItem(name, value)
      setUserAvatar(value)
    }
  })

  return {
    userAvatar,
    setUserAvatar,
  }
}
