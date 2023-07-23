import { SettingsAdjust } from '@carbon/icons-react'
import { popupCloseHref, popupOpenHref, queryHasSegment } from '../../lib/query'
import { PopupI } from '../../locales/locale-schema'
import PopupIcon from './popup-icon'
import PopupPanel from './popup-panel'

export default function SettingsPopup(
  { query, t }:
  { query: string, t: PopupI }
) {
  const popped = queryHasSegment(query, t.route)
  const href = popupOpenHref(query, t.route)
  const xHid = popped ? popupCloseHref(query) : ''
  return (<>
    <PopupIcon href={href} Icon={SettingsAdjust} isActive={!popped} title={t.title} />
    <PopupPanel Icon={SettingsAdjust} t={t} xHid={xHid}>@TODO</PopupPanel>
  </>)
}
