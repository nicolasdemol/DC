import firebaseApp from '@lib/firebase'
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth'
import { useEffect, useState } from 'react'

export const useAuth = () => {
  const auth = getAuth(firebaseApp)
  const [user, setUser] = useState(null)
  const [isAuthenticating, setIsAuthenticating] = useState(true)

  const handleUser = (user) => {
    if (user) {
      setUser(user)
    } else {
      setUser(null)
    }
    setIsAuthenticating(false)
  }

  const signin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password).then(
      (userCredential) => {
        setUser(userCredential.user)
      }
    )
  }

  const signup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password).then(
      (userCredential) => {
        setUser(userCredential.user)
      }
    )
  }

  const signout = () => {
    return signOut(auth).then(() => setUser(false))
  }

  useEffect(() => {
    const unsubscribe = auth.onIdTokenChanged(handleUser)
    return () => unsubscribe()
  }, [auth])

  return {
    user,
    isAuthenticating,
    signin,
    signup,
    signout,
  }
}
