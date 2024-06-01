import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
	return (
		<Html lang="ru" suppressHydrationWarning>
			<Head>
				<link rel="stylesheet" type="text/css" href="https://cdn.rawgit.com/moqmar/weather.css/master/weather.min.css"/>
			</Head>
			<body>
			<Main/>
			<NextScript/>
			<script>
				let FF_FOUC_FIX;
			</script>
			</body>
		</Html>
	)
}