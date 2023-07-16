import { CarbonIconType } from '@carbon/icons-react'
import Link from 'next/link'
import { PopupI } from '../../locales/locale-schema'

export default function PopupIcon(
  { t, href, Icon }:
  { t: PopupI, href: string | false, Icon: CarbonIconType }
) {
  const outer = 'inline-block mx-3'
  return href ?
    <Link href={href} className={outer} title={t.title}>
      <Icon size="24" className="hover:text-lemon-100" />
    </Link> :
    <span className={outer}>
      <Icon size="24" className="text-lemon-600" />
    </span>
}

export function PopupIconFallback({ rounded }: { rounded: 'full' | 'none' }) {
  const outer = 'inline-block mx-3 my-[1.5px] px-[1.5px]'
  let inner = 'w-[21px] h-[21px] border-dashed border-[1.5px] border-lemon-400'
  if (rounded === 'full') inner += ' rounded-full'
  return <span className={outer}><div className={inner} /></span>
}
