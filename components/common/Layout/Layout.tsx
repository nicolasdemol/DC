import dynamic from 'next/dynamic'
import { Navbar } from '@components/common'
import { LoadingDots, Button } from '@components/ui'
import { useAcceptCookies } from '@lib/hooks/useAcceptCookies'

const Loading = () => (
  <div className="w-80 h-80 flex items-center text-center justify-center p-3">
    <LoadingDots />
  </div>
)

const dynamicProps = {
  loading: Loading,
}

const FeatureBar = dynamic(() => import('@components/common/FeatureBar'), {
  ...dynamicProps,
})

interface Props {
  children: any
}

const Layout: React.FC<Props> = ({ children }) => {
  const { acceptedCookies, onAcceptCookies } = useAcceptCookies()
  const navBarlinks = {}
  return (
    <>
      <Navbar />
      <main className="fit">{children}</main>
      <FeatureBar
        title="Ce site utilise des cookies pour améliorer votre expérience. En cliquant, vous acceptez notre politique de confidentialité."
        hide={acceptedCookies}
        action={
          <Button
            variant="slide"
            className="mx-5"
            onClick={() => onAcceptCookies()}
          >
            Accepter les cookies
          </Button>
        }
      />
    </>
  )
}

export default Layout
