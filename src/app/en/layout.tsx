import Header from '../../components/header'
import t from '../../locales/en'

export const metadata = {
  description: t.description,
}

export default function LayoutEs(
  { children }: { children: React.ReactNode }
) {
  return (
    <main>
      <Header t={t} />
      {children}
    </main>
  )
}
