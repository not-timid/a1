'use client'

import { UserAvatar } from '@carbon/icons-react'
import { useSearchParams } from 'next/navigation'
import { queryHasSegment, queryPopupLink } from '../../lib/query'
import { PopupI } from '../../locales/locale-schema'
import PopupIcon from './popup-icon'

export default function ProfilePopupClient({ t }: { t: PopupI }) {
  const query = useSearchParams().toString()
  const isActive = queryHasSegment(query, t.route)
  const href = !isActive && queryPopupLink(query, t.route)
  return (<>
    <PopupIcon t={t} Icon={UserAvatar} href={href} />
  </>)
}

// Passed as a fallback to the Suspense boundary. Will be rendered in the
// initial HTML, until the value is available during React hydration, when
// it will be replaced with `<ProfilePopupClient>`.
export function ProfilePopupFallback() { return <> &nbsp; ...</> }