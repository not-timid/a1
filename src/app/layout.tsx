import { Albert_Sans, Zilla_Slab } from 'next/font/google'
import Script from 'next/script';
import './globals.css'

const albert = Albert_Sans({
  display:'swap', subsets:['latin'], variable:'--font-albert', weight:'500' })
const zilla = Zilla_Slab({
  display:'swap', subsets:['latin'], variable:'--font-zilla', weight:'500' })
const className = `
  ${albert.variable} ${zilla.variable} font-sans
  bg-grey-200 text-grey-800`

export const metadata = {
  title: 'NOT-TIMID',
  description: '...', // we don't know the user's language yet
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <Script src='/a1/legacy-browser-fallback.js'></Script>
      </head>
      <body className={className}>
        {children}
      </body>
    </html>
  )
}
