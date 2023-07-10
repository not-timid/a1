import Header from '../../../components/header'
import t from '../../../locales/es'

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
