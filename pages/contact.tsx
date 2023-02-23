import { Layout } from '@components/common'
import { Button, Checkbox, Container, Grid, Input, Text } from '@components/ui'
import { useForm } from 'react-hook-form'

export default function Contact() {
    const { register, handleSubmit } = useForm({
        defaultValues: {
            email: '',
            checkbox: [],
        },
    })
    return (
        <Container className="mt-4 mb-10 md:mt-12">
            <Text variant="heading">Réaliser votre projet</Text>
            <Text className="mt-4">
                Ce formulaire nous permettra de comprendre vos enjeux et
                envisager des solutions à votre projet. Nous vous invitons à
                renseigner votre{' '}
                <span className="font-semibold">adresse email</span>, afin que
                nous puissions vous contacter.
            </Text>
            <div className="mt-8 grid gap-4 md:grid-cols-2 lg:w-2/3">
                <Input
                    {...register('email', { required: true })}
                    label="email"
                    placeholder="Email"
                />
                <Button type="submit">Envoyer</Button>
            </div>
            <form
                className="mt-8"
                onSubmit={handleSubmit((data) => console.log(data))}
            >
                <Text variant="sectionHeading">
                    Sélectionner les services correspondant à votre projet
                </Text>
                <Grid variant="filled" layout="normal">
                    <Checkbox
                        {...register('checkbox')}
                        value="application"
                        label="Application"
                    />
                    <Checkbox
                        {...register('checkbox')}
                        value="site-web"
                        label="Site Web"
                    />
                    <Checkbox
                        {...register('checkbox')}
                        value="referencement"
                        label="Référencement"
                    />
                    <Checkbox
                        {...register('checkbox')}
                        value="web-design"
                        label="Web Design"
                    />
                    <Checkbox
                        {...register('checkbox')}
                        value="site-e-commerce"
                        label="Site E-commerce"
                    />
                    <Checkbox
                        {...register('checkbox')}
                        value="i-a"
                        label="Intelligence Artificielle"
                    />
                </Grid>
            </form>
        </Container>
    )
}

Contact.Layout = Layout
