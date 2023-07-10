import RootLayout from '../../components/root-layout'
import className from '../../lib/class-name-latin'
import t from '../../locales/en'
import '../globals.css'

export const metadata = {
  description: t.description,
  title: 'NOT-TIMID',
}

export default function LayoutEn(
  { children }: { children: React.ReactNode }
) {
  return <RootLayout className={className} lang="en">{children}</RootLayout>
}
