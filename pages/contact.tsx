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
    <Container className="mt-4 mb-10 md:mt-24">
      <Text className="text-center" variant="pageHeading">
        Réaliser votre projet
      </Text>
      <Text className="mt-4 text-center">
        Ce formulaire nous permettra de comprendre vos enjeux et envisager des
        solutions à votre projet.
        <br /> Nous vous invitons à renseigner votre{' '}
        <span className="font-semibold">adresse email</span>, afin que nous
        puissions vous contacter.
      </Text>
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <Grid className="mt-10 font-semibold" variant="filled" layout="normal">
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
        <div className="mt-12 mx-auto grid gap-4 md:grid-cols-2 lg:w-1/2">
          <Input
            {...register('email', { required: true })}
            label="email"
            placeholder="Email"
          />
          <Button type="submit" variant="slide">
            Envoyer
          </Button>
        </div>
      </form>
    </Container>
  )
}

Contact.Layout = Layout
