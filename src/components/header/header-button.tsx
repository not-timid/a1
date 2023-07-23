import Link from 'next/link'
import { barButtonActive, barButtonInactive } from '../../lib/theme'

export default function HeaderButton(
  { href, p, q, text, title }:
  { href: string, p: string, q: string, text: string, title: string }
) {
  const cn = q === '' && p === href ? barButtonInactive : barButtonActive
  return <Link className={cn} href={href} title={title}>{text}</Link>
}
