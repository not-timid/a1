import Script from 'next/script'
import Footer from './footer'

export default function RootLayout(
  { children, className, lang } :
  { children:React.ReactNode, className:string, lang:'en'|'es' }
) {
  return (
    <html lang={lang}>
      <Script src='/a1/legacy-browser-fallback.js'></Script>
      <body className={className}>
        {children}
        <Footer />
      </body>
    </html>
  )
}
