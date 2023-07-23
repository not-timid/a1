import { Suspense } from 'react'
import { PopupI } from '../../locales/locale-schema'
import SettingsPopupClient, { SettingsPopupFallback } from './settings-popup-client'

export default function SettingsPopup({ t }: { t: PopupI }) {
  return (
    <Suspense fallback={<SettingsPopupFallback />}>
      <SettingsPopupClient t={t} />
    </Suspense>
  )
}
