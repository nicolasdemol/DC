import '@assets/main.css'

import { FC, useEffect } from 'react'
import type { AppProps } from 'next/app'
import { ManagedUIContext } from '@components/ui/context'

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
        <Layout pageProps={pageProps}>
          <Component {...pageProps} />
        </Layout>
      </ManagedUIContext>
    </>
  )
}
