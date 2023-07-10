import RootLayout from '../../components/root-layout'
import className from '../../lib/class-name-latin'
import t from '../../locales/es'
import '../globals.css'

// Override some of the metadata that src/app/(english)/layout.tsx exports.
export const metadata = { description: t.description }

export default function LayoutEs(
  { children }: { children: React.ReactNode }
) {
  return <RootLayout className={className} lang="es">{children}</RootLayout>
}
