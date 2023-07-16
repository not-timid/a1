import Link from 'next/link'
import LocaleI from '../locales/locale-schema'
import { ProfilePopup } from './popups'

export default function Header({ t }: { t: LocaleI }) {
  const base = `/${t.code}`
  return (
    <nav className="px-2 py-1 bg-grey-800 text-lemon">
      <Link href={base}>
        <span className="font-serif text-[1.08em]">NOT</span>-TIMID
      </Link> &nbsp;
      <Link href={`${base}/${t.moodboard.route}`}>{t.moodboard.title}</Link> &nbsp;
      <Link href={`${base}/${t.floorplan.route}`}>{t.floorplan.title}</Link> &nbsp;
      <Link href={`${base}/${t.visual.route}`}>{t.visual.title}</Link>
      <ProfilePopup t={t.profile} />
      <aside><code>/a1</code></aside>
    </nav>
  )
}
