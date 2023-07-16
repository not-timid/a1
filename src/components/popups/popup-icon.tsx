import { CarbonIconType } from '@carbon/icons-react'
import Link from 'next/link'
import { PopupI } from '../../locales/locale-schema'

export default function PopupIcon(
  { t, Icon, href }:
  { t: PopupI, Icon: CarbonIconType, href: string | false }
) {
  const outer = 'inline-block mx-3'
  return href ?
    <Link href={href} className={outer} title={t.title}>
      <Icon size="24" className="text-lemon-400 hover:text-lemon-100" />
    </Link> :
    <span className={outer}>
      <Icon size="24" className="text-lemon-600" />
    </span>
}
