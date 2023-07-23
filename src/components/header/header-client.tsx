'use client'

import { usePathname, useSearchParams } from 'next/navigation'
import HeaderButton from './header-button'
import LocaleI from '../../locales/locale-schema'
import { bar } from '../../lib/theme'
import SettingsPopup from '../popups/settings-popup'

const outer = 'fixed table top-0 inset-x-0 w-full z-10 leading-[1px]'

export function HeaderClient({ t }: { t: LocaleI }) {
  const base = `/${t.code}/`
  const p = usePathname().replace('/a1', '')
  const query = useSearchParams().toString()
  const q = query.replace(/^%2F=?/, '') // q = '', if query is '', '/' or '/='
  
  return (
    <aside className={outer}>
      <nav className={'table-cell' + bar}>
        <HeaderButton href={base} p={p} q={q} text="NOT-TIMID" title="NOT-TIMID" />
      </nav>
      <nav className={'table-cell text-right' + bar}>
        {[ t.moodboard, t.floorplan, t.visual ].map(({ route, title }) =>
          <HeaderButton href={`${base}${route}/`}
            p={p} q={q} key={title} text={title} title={title} />
        )}
        <SettingsPopup query={query} t={t.settings} />
      </nav>
    </aside>
  )
}

export function HeaderFallback() {
  return <aside className={outer}>...</aside>
}
