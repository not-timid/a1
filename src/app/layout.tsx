import { Albert_Sans, Zilla_Slab } from 'next/font/google'
import './globals.css'
import Header from './components/header'

// Fonts.
const albert = Albert_Sans({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-albert',
  weight: '500',
})
const zilla = Zilla_Slab({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-zilla',
  weight: '500',
})

export const metadata = {
  title: 'NOT-TIMID',
  description: 'AI-assisted creative apps',
}

const className = `
  ${albert.variable} ${zilla.variable}
  font-sans
  bg-grey-200 text-grey-800
`

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={className}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
