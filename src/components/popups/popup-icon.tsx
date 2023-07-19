import { CarbonIconType } from '@carbon/icons-react'
import Link from 'next/link'
import { PopupI } from '../../locales/locale-schema'
import { barIconLink } from '../../lib/theme'

export default function PopupIcon(
  { href, Icon, t }:
  { href: string | false, Icon: CarbonIconType, t: PopupI }
) {
  const outer = 'inline-block mx-3'
  const active = 'p-[4px]' + barIconLink
  const inactive = 'p-[4px] text-lemon-600 dark:text-lemon-800'
  return href ?
    <Link href={href} className={outer} title={t.title}>
      <Icon size="32" className={active} />
    </Link> :
    <span className={outer}>
      <Icon size="32" className={inactive} />
    </span>
}

export function PopupIconFallback({ rounded }: { rounded: 'full' | 'none' }) {
  const outer = 'inline-block mx-3 my-[1.5px] px-[1.5px]'
  let inner = 'w-[21px] h-[21px] border-dashed border-[1.5px] border-lemon-400'
  if (rounded === 'full') inner += ' rounded-full'
  return <span className={outer}><div className={inner} /></span>
}
