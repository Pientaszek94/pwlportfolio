import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="icon" href="/LogoPWLFD.jpg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Major+Mono+Display&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Teko:wght@300;400;500&display=swap" rel="stylesheet"/>
        <meta name="google-site-verification" content="jH1PVnBIylnNgSjlU1KGvmwx7fTCIQ79e5lumLKTKoI" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}