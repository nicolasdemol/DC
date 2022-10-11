import '@assets/main.css'

import { FC, useEffect } from 'react'
import type { AppProps } from 'next/app'
import { ManagedUIContext } from '@components/ui/context'
import { AuthProvider } from '@lib/hooks/useAuth'

interface NoopProps {
  children: any
}

const Noop: FC<NoopProps> = ({ children }) => <>{children}</>

export default function MyApp({ Component, pageProps }: AppProps) {
  const Layout = (Component as any).Layout || Noop

  useEffect(() => {
    document.body.classList?.remove('loading')
  }, [])

  return (
    <>
      <ManagedUIContext>
        <AuthProvider>
          <Layout pageProps={pageProps}>
            <Component {...pageProps} />
          </Layout>
        </AuthProvider>
      </ManagedUIContext>
    </>
  )
}
