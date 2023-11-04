import '@/styles/globals.scss'

import { I18nProvider } from '@/lib/next-international'
import { AppProps } from 'next/app'

import localFont from "next/font/local";
const font = localFont({ src: "../public/font/Monocraft.otf" });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <I18nProvider locale={pageProps.locale}>
      <main className={font.className}>
        <Component {...pageProps} />
      </main>
    </I18nProvider>
  )
}