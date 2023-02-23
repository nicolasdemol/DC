import { Layout, Card } from '@components/common'
import { Container, Text } from '@components/ui'

export default function Services() {
    return (
        <Container className="mt-4 mb-10 md:mt-12">
            <Text variant="heading">Nos Services</Text>
            <Text>
                Gestion de projet, consulting et formations : découvrez des
                prestations adaptées à vos attentes et vos exigences. Des
                objectifs mesurables et atteignables.
            </Text>
            <div className="mt-8 flex justify-around flex-wrap gap-4">
                <Card
                    title="Intelligence Artificielle"
                    bg="https://i.pinimg.com/736x/8f/a0/51/8fa051251f5ac2d0b756027089fbffde--terry-o-neill-al-pacino.jpg"
                ></Card>
                <Card
                    title="Développement Web"
                    bg="https://i.pinimg.com/originals/28/d2/e6/28d2e684e7859a0dd17fbd0cea00f8a9.jpg"
                ></Card>
                <Card
                    title="Gestion de Projet"
                    bg="https://i.pinimg.com/originals/ee/85/08/ee850842e68cfcf6e3943c048f45c6d1.jpg"
                ></Card>
            </div>
        </Container>
    )
}

Services.Layout = Layout
