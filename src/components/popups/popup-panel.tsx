import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

export default function PopupPanel(
  { children, hidden }:
  { children: React.ReactNode, hidden: boolean }
) {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  let wrap = 'fixed flex inset-x-0 inset-y-0 py-12 justify-center bg-black/70'
  wrap += hidden ? ' hidden' : ''
  let box = 'w-[300px] p-3 bg-grey-400 text-grey-800 rounded'
  const el = <div className={wrap}><div className={box}>{children}</div></div>
  return mounted ? createPortal(el, document.body) : null
}
