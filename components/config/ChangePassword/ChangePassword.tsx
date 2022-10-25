import { useState } from 'react'
import { useAuth } from '@lib/hooks/useAuth'
import { useForm } from 'react-hook-form'
import { Text, Button, Input } from '@components/ui'
import { updatePassword } from 'firebase/auth'

const ChangePassword = () => {
  const { user } = useAuth()
  const { register, handleSubmit } = useForm()
  const [loading, setLoading] = useState(false)
  const [passwordShown, setPasswordShown] = useState(false)

  const handlePassword = (e) => {
    setLoading(true)
    updatePassword(user, e.password)
    console.log(e.password)
    setLoading(false)
  }
  return (
    <>
      <Text variant="sectionHeading" className="border-b">
        Changer votre mot de passe
      </Text>
      <div className="grid md:grid-cols-2 gap-6 mt-4">
        <form onSubmit={handleSubmit(handlePassword)} className="space-y-4">
          <Input
            label="Nouveau mot de passe"
            variant="slim"
            labelVisible
            type={passwordShown ? 'text' : 'password'}
            {...register('password')}
          />
          <div className="flex items-center mb-4">
            <input
              id="default-checkbox"
              type="checkbox"
              value=""
              className="w-4 h-4 rounded"
              onChange={() => setPasswordShown(!passwordShown)}
            />
            <label htmlFor="default-checkbox" className="ml-2 font-medium">
              Montrer le mot de passe
            </label>
          </div>
          <Button variant="slim" type="submit" loading={loading}>
            Mettre à jour
          </Button>
        </form>
      </div>
    </>
  )
}

export default ChangePassword
