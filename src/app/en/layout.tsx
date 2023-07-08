import Header from '../../components/header'

export const metadata = {
  title: 'NOT-TIMID',
  description: 'AI-assisted creative apps',
}

export default function HomeEnLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main>
      <Header />
      {children}
    </main>
  )
}
