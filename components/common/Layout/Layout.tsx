import { FC } from 'react'
import dynamic from 'next/dynamic'
import { Navbar } from '@components/common'
import { Sidebar, Modal, LoadingDots, Button } from '@components/ui'
import { MenuSidebarView } from '@components/common/UserNav'
import { useUI } from '@components/ui/context'
import { useAcceptCookies } from '@lib/hooks/useAcceptCookies'
import type { Link as LinkProps } from '../UserNav/MenuSidebarView'

import { SignInView } from '@components/auth'
import Head from 'next/head'

const Loading = () => (
  <div className="w-80 h-80 flex items-center text-center justify-center p-3">
    <LoadingDots />
  </div>
)

const dynamicProps = {
  loading: Loading,
}

const SignUpView = dynamic(() => import('@components/auth/SignUpView'), {
  ...dynamicProps,
})

const FeatureBar = dynamic(() => import('@components/common/FeatureBar'), {
  ...dynamicProps,
})

interface Props {
  children: any
}

const ModalView: FC<{ modalView: string; closeModal(): any }> = ({
  modalView,
  closeModal,
}) => {
  return (
    <Modal onClose={closeModal}>
      {modalView === 'LOGIN_VIEW' && <SignInView />}
      {modalView === 'SIGNUP_VIEW' && <SignUpView />}
    </Modal>
  )
}

const ModalUI: FC = () => {
  const { displayModal, closeModal, modalView } = useUI()
  return displayModal ? (
    <ModalView modalView={modalView} closeModal={closeModal} />
  ) : null
}

const SidebarView: React.FC<{
  sidebarView: string
  closeSidebar(): any
  links: LinkProps[]
}> = ({ sidebarView, closeSidebar, links }) => {
  return (
    <Sidebar onClose={closeSidebar}>
      {sidebarView === 'MOBILE_MENU_VIEW' && <MenuSidebarView links={links} />}
    </Sidebar>
  )
}

const SidebarUI: React.FC<{ links: LinkProps[] }> = ({ links }) => {
  const { displaySidebar, closeSidebar, sidebarView } = useUI()
  return displaySidebar ? (
    <SidebarView
      links={links}
      sidebarView={sidebarView}
      closeSidebar={closeSidebar}
    />
  ) : null
}

const Layout: React.FC<Props> = ({ children }) => {
  const { acceptedCookies, onAcceptCookies } = useAcceptCookies()
  const navBarlinks = {}
  return (
    <>
      <Head>
        <title>D&C</title>
      </Head>
      <Navbar />
      <main className="fit">{children}</main>
      <ModalUI />
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
