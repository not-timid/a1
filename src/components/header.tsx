import Link from 'next/link'
import LocaleI from '../locales/locale-schema'
import { bar } from '../lib/theme'
import SettingsPopup from './popups/settings-popup'

export default function Header({ t }: { t: LocaleI }) {
  const base = `/${t.code}`
  return (
    <nav className={'fixed top-0 inset-x-0 z-10 px-2 pt-1' + bar}>
      <Link href={base}>
        <span className="font-serif text-[1.08em]">NOT</span>-TIMID
      </Link> &nbsp;
      <Link href={`${base}/${t.moodboard.route}`}>{t.moodboard.title}</Link> &nbsp;
      <Link href={`${base}/${t.floorplan.route}`}>{t.floorplan.title}</Link> &nbsp;
      <Link href={`${base}/${t.visual.route}`}>{t.visual.title}</Link>
      <SettingsPopup t={t.settings} />
    </nav>
  )
}
