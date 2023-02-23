import { FC, useEffect, useState, useCallback } from 'react'
import { Logo, Button, Input } from '@components/ui'
import { useUI } from '@components/ui/context'
import { useAuth } from '@lib/hooks/useAuth'
import { useForm } from 'react-hook-form'

interface Props {}

const SignInView: FC<Props> = () => {
    // Form State
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')
    const [disabled, setDisabled] = useState(false)
    const { setModalView, closeModal } = useUI()

    const { signin, error } = useAuth()
    const { register, handleSubmit } = useForm()

    const handleLogin = async (e) => {
        setLoading(true)
        setMessage('')
        await signin(e.email, e.password).then(() => {
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
            onSubmit={handleSubmit(handleLogin)}
            className="w-80 flex flex-col justify-between p-3"
        >
            <div className="flex justify-center pb-12 ">
                <Logo />
            </div>
            <div className="flex flex-col space-y-3">
                {message && (
                    <div className="text-red border border-red p-3">
                        {message}. Did you {` `}
                        <a
                            className="text-accent-9 inline font-bold hover:underline cursor-pointer"
                            onClick={() => setModalView('FORGOT_VIEW')}
                        >
                            forgot your password?
                        </a>
                    </div>
                )}
                <Input
                    type="email"
                    placeholder="Email"
                    {...register('email', { required: true })}
                />
                <Input
                    type="password"
                    placeholder="Password"
                    {...register('password', { required: true })}
                />

                <div className="pt-2 w-full flex flex-col">
                    <Button type="submit" loading={loading} disabled={disabled}>
                        Se connecter
                    </Button>
                </div>
                <div className="pt-1 text-center text-sm">
                    <span className="text-accent-7">Pas de compte?</span>
                    {` `}
                    <a
                        className="text-accent-9 font-bold hover:underline cursor-pointer"
                        onClick={() => setModalView('SIGNUP_VIEW')}
                    >
                        S'inscrire
                    </a>
                </div>
            </div>
        </form>
    )
}

export default SignInView
