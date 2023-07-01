import './globals.css'
import Header from './components/header'

export const metadata = {
  title: 'NOT-TIMID',
  description: 'AI-assisted creative apps',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="bg-grey-200 text-grey-800">
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
