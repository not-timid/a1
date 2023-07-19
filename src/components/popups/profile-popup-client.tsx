'use client'

import { UserAvatar } from '@carbon/icons-react'
import { useSearchParams } from 'next/navigation'
import { popupCloseHref, popupOpenHref, queryHasSegment } from '../../lib/query'
import { PopupI } from '../../locales/locale-schema'
import PopupIcon, { PopupIconFallback } from './popup-icon'
import PopupPanel from './popup-panel'

export default function ProfilePopupClient({ t }: { t: PopupI }) {
  const query = useSearchParams().toString()
  const isActive = queryHasSegment(query, t.route)
  const openHref = !isActive && popupOpenHref(query, t.route)
  const xHid = isActive ? popupCloseHref(query) : ''
  return (<>
    <PopupIcon href={openHref} Icon={UserAvatar} t={t} />
    <PopupPanel xHid={xHid} Icon={UserAvatar} t={t}>@TODO</PopupPanel>
  </>)
}

// Passed as a fallback to the Suspense boundary. Will be rendered in the
// initial HTML, until the value is available during React hydration, when
// it will be replaced with `<ProfilePopupClient>`.
export function ProfilePopupFallback() {
  return <PopupIconFallback rounded="full" />
}
