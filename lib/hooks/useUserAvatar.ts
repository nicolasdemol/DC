import { useState, useEffect } from 'react'
import { useUI } from '@components/ui/context'
import { getRandomPairOfColors } from '@lib/colors'
import { useAuth } from '@lib/hooks/useAuth'

export const useUserAvatar = (name = 'userAvatar') => {
    const { userAvatar, setUserAvatar } = useUI()
    const [isUpdatingAvatar, setIsUpdatingAvatar] = useState(false)
    const { user } = useAuth()

    useEffect(() => {
        if (!userAvatar && user.photoURL) {
            setUserAvatar(`url(${user.photoURL})`)
        }
        if (!userAvatar && localStorage.getItem(name) && !user.photoURL) {
            setUserAvatar(localStorage.getItem(name))
        }
        if (!localStorage.getItem(name) && !user.photoURL) {
            // bg not set locally, generating one, setting localStorage and context to persist.
            const bg = getRandomPairOfColors()
            const value = `linear-gradient(140deg, ${bg[0]}, ${bg[1]} 100%)`
            localStorage.setItem(name, value)
            setUserAvatar(value)
        }
    })

    return {
        isUpdatingAvatar,
        setIsUpdatingAvatar,
        userAvatar,
        setUserAvatar,
    }
}
