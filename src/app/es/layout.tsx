'use client'
import Header from '../../components/header'
import useI18nEs from '../../hooks/use-i18n-es'

// export const metadata = {
//   title: 'NOT-TIMID',
//   description: 'AI-assisted creative apps',
// }

export default function HomeEnLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { t } = useI18nEs()
  return (
    <main>
      <Header t={t} />
      {children}
    </main>
  )
}
