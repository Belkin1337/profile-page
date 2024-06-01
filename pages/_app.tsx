import Head from 'next/head';
import { I18nProvider, useScopedI18n } from '@/lib/i18n/i18n'
import { AppProps } from 'next/app'
import { ThemeProvider } from '@/providers/theme-provider';
import { Montserrat } from 'next/font/google'
import { TooltipProvider } from '@/ui/components/tooltip';
import { DotBackgroundDemo } from '@/ui/components/dot-background';
import { Header } from '@/components/layout/header/header';
import { Toaster } from '@/ui/components/toaster';
import { WeatherProvider } from "@/providers/weather-provider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import '@/styles/globals.css'

const font = Montserrat({
	subsets: ['latin', 'cyrillic'],
	display: 'swap',
})

export default function App({
	Component,
	pageProps
}: AppProps) {
	const [queryClient] = useState(() =>
		new QueryClient({
			defaultOptions: {
				queries: {
					staleTime: 60 * 1000,
				}
			}
		})
	)

	return (
		<>
			<Head>
				<title>pureawake: dev</title>
				<meta property="og:title" content="pureawake: dev"/>
				<meta property="og:twitter" content="pureawake: dev"/>
				<meta
					name="keywords"
					content="pureawake, личная страница pureawake, profile,
						pureawake profile, web development, web, development,
						website development, pureawake.studio"
				/>
				<meta name="author" content="Rus Belkin"/>
				<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
				<link rel="canonical" href="https://pureawake.ru/"/>
				<meta property="og:image" content="/images/avatar5.jpg"/>
				<meta property="og:url" content="https://pureawake.ru/"/>
			</Head>
			<QueryClientProvider client={queryClient}>
				<I18nProvider locale={pageProps.locale}>
					<ThemeProvider
						attribute="class"
						defaultTheme="dark"
						enableSystem
						disableTransitionOnChange
					>
						<WeatherProvider>
							<TooltipProvider>
								<main className={`${font.className} `}>
									<DotBackgroundDemo>
										<Header/>
										<Component {...pageProps} />
									</DotBackgroundDemo>
									<Toaster/>
								</main>
							</TooltipProvider>
						</WeatherProvider>
					</ThemeProvider>
				</I18nProvider>
			</QueryClientProvider>
		</>
	)
}