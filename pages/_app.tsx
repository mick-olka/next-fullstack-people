import { Box, LinearProgress } from '@mui/material'
import { AnimatePresence } from 'framer-motion'
import type { AppProps } from 'next/app'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import { DefaultSeo } from 'next-seo'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import * as S from './styles'

import { GlobalStyles } from '../styles/globalStyles'

import { Footer } from '@/components/Footer/Footer'
import { Header } from '@/components/Header/Header'
import ResponsiveDrawer from '@/components/NavPane/NavPane'
import Theme from '@/containers/Theme'
import { usePageLoading } from '@/hooks/usePageLoading'
import { v } from '@/styles/variables'

import '@/styles/normalize.scss'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  style: ['normal'],
})

export default function App({ Component, pageProps, router }: AppProps) {
  const { isPageLoading } = usePageLoading()
  const url = `http://localhost:3000${router.route}`
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='description' content='Created by mick-olka' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <DefaultSeo
        titleTemplate='Mick %s'
        openGraph={{
          type: 'website',
          locale: 'en_IE',
          url,
          description: 'The Next js template from Mick',
          site_name: 'Next js template by Mick',
          images: [],
        }}
        canonical={url}
      />
      <Theme>
        <GlobalStyles />
        <ToastContainer hideProgressBar autoClose={1000} />
        <S.Wrapper>
          {isPageLoading && <LinearProgress sx={{ minHeight: '4px' }} />}
          <Header />
          <S.MainContent>
            <Box
              component='nav'
              sx={{ width: { sm: 0, md: v.navbarWidth }, flexShrink: { sm: 0 } }}
            >
              <ResponsiveDrawer />
            </Box>
            <Box sx={{ width: '100%' }}>
              <AnimatePresence initial={false} onExitComplete={() => window.scrollTo(0, 0)}>
                {!isPageLoading && <Component {...pageProps} />}
              </AnimatePresence>
              <Footer />
            </Box>
          </S.MainContent>
        </S.Wrapper>
      </Theme>
    </>
  )
}
