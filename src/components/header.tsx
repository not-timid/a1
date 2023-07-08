import Link from 'next/link'
export default function Header() {
  return (
    <nav className="px-2 py-1 bg-grey-800 text-lemon">
      <Link href="/en">
        <span className="font-serif text-[1.08em]">NOT</span>-TIMID
      </Link> &nbsp;
      <Link href="/en/moodboard">Moodboard</Link> &nbsp;
      <Link href="/en/floorplan">Floorplan</Link> &nbsp;
      <Link href="/en/visual">Visual</Link>
      <aside><code>/a1</code></aside>
    </nav>
  )
}