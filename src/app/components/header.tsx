import Link from 'next/link'
 
export default function Header() {
  return (
    <nav className="px-2 py-1 bg-grey-800 text-lemon">
      NOT-TIMID &nbsp;
      <Link href="/moodboard">Moodboard</Link> &nbsp;
      <Link href="/floorplan">Floorplan</Link> &nbsp;
      <Link href="/visual">Visual</Link>
      <aside><code>/a1</code></aside>
    </nav>
  )
}
