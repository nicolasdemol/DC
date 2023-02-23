import { FC, useEffect, useState, useCallback } from 'react'
import { validate } from 'email-validator'
import { IoInformationCircle } from 'react-icons/io5'
import { useUI } from '@components/ui/context'
import { Logo, Button, Input } from '@components/ui'
import { useForm } from 'react-hook-form'
import { useAuth } from '@lib/hooks/useAuth'

interface Props {}

const SignUpView: FC<Props> = () => {
    // Form State
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')
    const [dirty, setDirty] = useState(false)
    const [disabled, setDisabled] = useState(false)

    const { signup, error } = useAuth()
    const { register, handleSubmit } = useForm()
    const { setModalView, closeModal } = useUI()

    const handleSignup = async (e) => {
        setLoading(true)
        setMessage('')
        await signup(e.email, e.password, e.firstname, e.lastname).then(() => {
            setLoading(false)
            if (error) {
                setMessage(error.message)
            } else {
                closeModal()
            }
        })
    }

    return (
        <form
            onSubmit={handleSubmit(handleSignup)}
            className="w-80 flex flex-col justify-between p-3"
        >
            <div className="flex justify-center pb-12 ">
                <Logo />
            </div>
            <div className="flex flex-col space-y-4">
                {message && (
                    <div className="text-red border border-red p-3">
                        {message}
                    </div>
                )}
                <div className="flex flex-row space-x-4">
                    <Input
                        type="text"
                        placeholder="Prénom"
                        {...register('firstname', { required: true })}
                    />
                    <Input
                        type="text"
                        placeholder="Nom"
                        {...register('lastname', { required: true })}
                    />
                </div>
                <Input
                    type="email"
                    placeholder="Email"
                    {...register('email', { required: true })}
                />
                <Input
                    type="password"
                    placeholder="Mot de passe"
                    {...register('password', { required: true })}
                />
                <span className="text-accent-8">
                    <span className="inline-block align-middle ">
                        <IoInformationCircle width="15" height="15" />
                    </span>{' '}
                    <span className="leading-6 text-sm">
                        <strong>Info</strong>: Votre mot de passe doit contenir
                        au moins 7 caractères et inclure des chiffres.{' '}
                    </span>
                </span>
                <div className="pt-2 w-full flex flex-col">
                    <Button type="submit" loading={loading} disabled={disabled}>
                        S'inscrire
                    </Button>
                </div>

                <span className="pt-1 text-center text-sm">
                    <span className="text-accent-7">Vous avez un compte?</span>
                    {` `}
                    <a
                        className="text-accent-9 font-bold hover:underline cursor-pointer"
                        onClick={() => setModalView('LOGIN_VIEW')}
                    >
                        Se connecter
                    </a>
                </span>
            </div>
        </form>
    )
}

export default SignUpView
