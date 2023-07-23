import { CarbonIconType, Close } from '@carbon/icons-react'
import { MouseEventHandler, useCallback, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { bar, barIconActive, panel } from '../../lib/theme'
import { PopupI } from '../../locales/locale-schema'

export default function PopupPanel(
  { children, xHid, Icon, t }: // xHid is the Close href, or '' hides the panel
  { children: React.ReactNode, xHid: string, Icon: CarbonIconType, t: PopupI }
) {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  const router = useRouter()
  const close = useCallback(() => router.push(xHid), [xHid, router])

  const onClose: MouseEventHandler =
    evt => evt.target === evt.currentTarget && close()
  const onKeydown = useCallback(
    (evt: KeyboardEvent) => evt.key === 'Escape' && close(), [close])

  useEffect(() => {
    document.addEventListener('keydown', onKeydown)
    return () => document.removeEventListener('keydown', onKeydown)
  }, [onKeydown])

  if (xHid === '') return null

  const wrap = 'fixed flex inset-x-0 inset-y-0 pt-16 pb-8 justify-center ' +
    'bg-white/80 dark:bg-black/80'
  const closeLink = 'float-right mt-[-2px]' + barIconActive

  const el = <div className={wrap} onClick={onClose}>
    <div className={'w-[300px]' + panel}>
      <div className={'p-2 pl-3' + bar}>
        <Icon size="24" className="inline-block -mt-2" />
        <span className="text-xl uppercase tracking-wide">&nbsp;{t.title}</span>
        <Link href={xHid} className={closeLink}><Close size="24" /></Link>
      </div>
      <div className="border-b-2 px-3 py-2">{children}</div>
    </div>
  </div>
  return mounted ? createPortal(el, document.body) : null
}
