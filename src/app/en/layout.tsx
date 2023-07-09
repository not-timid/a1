'use client'
import Header from '../../components/header'
import useI18nEn from '../../hooks/use-i18n-en'

// export const metadata = {
//   title: 'NOT-TIMID',
//   description: 'AI-assisted creative apps',
// }

export default function HomeEnLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { t } = useI18nEn()
  return (
    <main>
      <Header t={t} />
      {children}
    </main>
  )
}
