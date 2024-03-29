import Head from 'next/head';
import { I18nProvider } from '@/lib/next-international'
import { AppProps } from 'next/app'
import { ThemeProvider } from '@/providers/theme-provider';
import { Montserrat } from 'next/font/google'
import { TooltipProvider } from '@/ui/tooltip';
import { DotBackgroundDemo } from '@/ui/dot-background';
import { Header } from '@/components/layout/header';
import '@/styles/globals.css'
import { Toaster } from '@/ui/toaster';

const font = Montserrat({
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
})

export default function App({
  Component,
  pageProps
}: AppProps) {
  return (
    <>
      <Head>
        <title>pureawake</title>
        <meta name="description" content="Ку! Я pureawake. Здесь вы можете узнать больше обо мне, моих интересах и скиллах." />
        <meta name="keywords" content="pureawake, личная страница, интересы, профиль" />
        <meta name="author" content="pureawake" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="http://pureawake.ru/" />
        <meta property="og:title" content="pureawake | dev" />
        <meta property="og:description" content="Ку! Я pureawake. Здесь вы можете узнать больше обо мне, моих интересах и скиллах." />
        <meta property="og:image" content="/images/avatar5.jpg" />
        <meta property="og:url" content="https://pureawake.ru/" />
      </Head>
      <I18nProvider locale={pageProps.locale}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider>
            <main className={font.className}>
              <DotBackgroundDemo>
                <Header />
                <Component {...pageProps} />
              </DotBackgroundDemo>
              <Toaster />
            </main>
          </TooltipProvider>
        </ThemeProvider>
      </I18nProvider>
    </>
  )
}