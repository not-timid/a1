import { Albert_Sans, Zilla_Slab } from 'next/font/google'

// The 'latin' subset covers most Western European languages.
const albert = Albert_Sans({
  display:'swap', subsets:['latin'], variable:'--font-albert', weight:'500' })
const zilla = Zilla_Slab({
  display:'swap', subsets:['latin'], variable:'--font-zilla', weight:'500' })

const classNameLatin = `
  p-5 pt-12 ${albert.variable} ${zilla.variable} font-sans
  bg-grey-200 dark:bg-grey-900 text-grey-800 dark:text-grey-300`

export default classNameLatin
