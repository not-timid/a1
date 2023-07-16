import { Suspense } from 'react'
import { PopupI } from '../../locales/locale-schema'
import ProfilePopupClient, { ProfilePopupFallback } from './profile-popup-client'

export default function ProfilePopup({ t }: { t: PopupI }) {
  return (
    <Suspense fallback={<ProfilePopupFallback />}>
      <ProfilePopupClient t={t} />
    </Suspense>
  )
}
