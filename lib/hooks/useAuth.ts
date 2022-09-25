import firebaseApp from '@lib/firebase'
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  onAuthStateChanged,
} from 'firebase/auth'
import { useEffect, useState } from 'react'

export const useAuth = () => {
  const auth = getAuth(firebaseApp)
  const [user, setUser] = useState(null)
  const [error, setError] = useState(null)

  const signin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user)
      })
      .catch((error) => {
        setError(error)
      })
  }

  const signup = (email, password, firstname, lastname) => {
    return createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user)
        return updateProfile(userCredential.user, {
          displayName: firstname + ' ' + lastname,
        })
      })
      .catch((error) => {
        setError(error)
      })
  }

  const signout = () => {
    return signOut(auth)
      .then(() => setUser(false))
      .catch((error) => {
        setError(error)
      })
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
      } else {
        setUser(null)
      }
    })
  }, [auth])

  return {
    user,
    error,
    signin,
    signup,
    signout,
  }
}
