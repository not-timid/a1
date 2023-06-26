import './globals.css'

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
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
