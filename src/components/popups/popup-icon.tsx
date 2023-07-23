import { CarbonIconType } from '@carbon/icons-react'
import Link from 'next/link'
import { barIconActive, barIconInactive, barIconOuterActive,
  barIconOuterInactive } from '../../lib/theme'

export default function PopupIcon(
  { href, Icon, isActive, title }:
  { href: string, Icon: CarbonIconType, isActive: boolean, title: string }
) {
  const outer = isActive ? barIconOuterActive : barIconOuterInactive
  const inner = isActive ? barIconActive : barIconInactive
  return (<Link className={outer} href={href} title={title}>
    <Icon size="32" className={inner} />
  </Link>)
}
