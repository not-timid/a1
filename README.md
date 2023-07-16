# a1

__NOT-TIMID Alpha 1: Proof-of-tech styled responsive layout with routing__

⊖ __Version:__ 0.0.1  
⊖ __Repo:__ <https://github.com/not-timid/a1>  
⊖ __URL:__ <https://not-timid.com/a1/>

---

## Tech stack

This is a [Next.js](https://nextjs.org/) project bootstrapped with
[`create-next-app`.
](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) For
more about Next.js:

- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)
- [The Next.js GitHub repository](https://github.com/vercel/next.js/)

---

## Set up the project

### __Set up your development machine__

1. Check your __Git__ version:  
   `git --version # should be 'git version 2.20.1' or greater`
2. Check your __Node__ version:  
   `node --version # should be 'v16.8.0' or greater`  
   Node 16.8.0 is the minimum specified by [the Next.js 'installation' docs
   ](https://nextjs.org/docs/getting-started/installation)

### __Set up VS Code__

1. Check your __VS Code__ version:  
   `code --version # should be '1.79.1' or greater`
2. Control-Comma in VS Code to show settings, search for 'editor.tabSize', and
   set it to '2' — this suits files like .tsx which have nested HTML markup
3. In VS Code, install and enable version 1.3.0 or greater of the
   [`dnamsons.kimbie-dark-plus`
   ](https://marketplace.visualstudio.com/items?itemName=dnamsons.kimbie-dark-plus)
   theme
4. And install and enable version 0.9.11 or greater of the
   [`bradlc.vscode-tailwindcss`
   ](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
   extension

### __Set up the repo locally__

Clone the repository, and `cd` into it:  
`git clone https://github.com/not-timid/a1.git && cd a1`

Install the dependencies:  
`npm i`

Open the `a1` repo in VS Code:  
`code .`

---

## Handy dev commands

Serve a development build of the app locally, with hot-reloading:  
`npm run dev`

Use ESLint to check for problems with JavaScript code:  
`npm run lint`

Build the app to the docs/ folder:  
`npm run build`

Serve the build locally:  
`npm start`

Or just build and serve in one command:  
`npm run bas`

---

## Steps to build this demo

### __Continue from where the previous version left off__

1. Follow the steps in [the Alpha 0 README's 'Steps to build this demo'
   ](https://github.com/not-timid/a0#steps-to-build-this-demo)
2. Find and replace `Alpha 0` to `Alpha 1`, `a0` to `a1`, and `0.0.0` to `0.0.1`
3. Change the `description` to fit the intent of this repo
4. `npm run build`, test locally, commit and push to GitHub
5. Once GitHub Pages has deployed, find and replace `a0` to `a1` in
   [the apex landing-page](https://github.com/not-timid/not-timid.github.io)
6. Commit and push not-timid.github.io, and after GitHub Pages has deployed,
   check that <https://not-timid.com/> redirects to <https://not-timid.com/a1/>
7. The visual transition should be smooth, so you may need to update the style,
   layout and content of not-timid.github.io

### __Install Tailwind CSS__

Follow the ['Install' section of the Next.js Tailwind CSS docs:
](https://tailwindcss.com/docs/guides/nextjs)

1. `npm install -D tailwindcss postcss autoprefixer` which adds 53 packages,
   14.7 MB for 1401 items.  
   The '5 moderate severity vulnerabilities' are from previously installed
   packages.
2. `npx tailwindcss init -p` to generate tailwind.config.js and
   postcss.config.js
3. In tailwind.config.js, change `content: [],` to:
   ```js
   content: [
     './src/**/*.{js,ts,jsx,tsx,mdx}',
   ],
   ```
4. In src/app/global.css, add the following three lines to the top:
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```
5. From the ['2022-05 Update' of this Stack Overflow answer,
   ](https://stackoverflow.com/a/61333686) prevent the
   "Unknown at rule @tailwind css(unknownAtRules)" VS Code warning by installing
   v0.9.11 of the [The official Tailwind CSS IntelliSense extension
   ](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
   and also [adding `"*.css": "tailwindcss"` to `"files.associations"`
   ](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss#recommended-vs-code-settings)
6. `npm run dev` and visit <http://localhost:3000/a1>, where you should see that
   Tailwind has made the &lt;H1> and &lt;H2> text the same size, and smaller
7. In src/app/page.tsx change `<h1>NOT-TIMID</h1>` to:  
   ```html
   <h1 className="text-3xl font-bold underline">NOT-TIMID</h1>
   ```
8. You should see that the classes have been applied to the &lt;H1> element
9. In Terminal, Control-C to stop `npm run dev`

#### __Notes on trying (and failing) to install Semantic UI__

Before trying Tailwind, I first tried to follow the steps in
[part 1 of this Semantic UI with custom theming article,
](https://annacoding.com/article/6FndBILqMD16Bp7w95WJrd) but it
threw some nasty Webpack errors.
`npm install semantic-ui-less @zeit/next-less` would add 521 packages:
64 MB for 7166 items, 31 vulnerabilities (23 moderate, 6 high, 2 critical).

Then I tried the ['Install' section of the React Semantic UI docs,
](https://react.semantic-ui.com/usage#install) but couldn't get it to work.
`npm install semantic-ui-react semantic-ui-css` would add 16 packages:
26 MB for 3936 items, the '5 moderate severity vulnerabilities' are from
previously installed packages.

### __Modify the default Tailwind theme's colours__

From the [Using the default colors
](https://tailwindcss.com/docs/customizing-colors#using-the-default-colors)
section of the Tailwind 'Customizing Colors' docs:

1. In Terminal, `npm run dev` and visit <http://localhost:3000/a1>
2. Remove all `background` and `color` rules from src/app/globals.css
3. Check that Tailwind's colours are working, eg in src/app/layout.tsx  
   add `className="bg-neutral-200 text-neutral-800"` to the `<html>` element
4. In tailwind.config.js add `import colors from 'tailwindcss/colors'`
5. Modify the default Tailwind theme, so that only a few colour-names are valid.  
   This keeps the app on-brand, and will also simplify Intellisense suggestions.  
   For example, change:
   ```js
   theme: {
     extend: {},
   },
   ```
   To:
   ```js
   theme: {
     colors: {
       black: colors.black,
       current: 'currentColor',
       grey: colors.neutral, // aliased 'neutral' to 'grey'
       transparent: 'transparent',
       white: colors.white,
     },
     extend: {},
   },
   ```
   Note that changes to tailwind.config.js should be hot-reloaded to the browser
6. Extend the theme, with some custom colours:
   ```js
   theme: {
     ...
     extend: {
       colors: {
         lemon: {
           '50': '#fffccc',
           '100': '#fffd99',
           '200': '#faff66',
           '300': '#eeff33',
           '400': '#ddff00',
           'DEFAULT': '#ddff00',
           '500': '#b1d911',
           '600': '#8bb31d',
           '700': '#698c22',
           '800': '#4a6621',
           '900': '#2e401a',
           '950': '#121a0c',
         },
       },
     },
   },
   ```
7. Check that the new colours are working, and that 'neutral' has now been
   renamed 'grey', eg in src/app/layout.tsx add:  
   `className="bg-grey-200 text-lemon"` to the `<html>` element
8. In Terminal, Control-C to stop `npm run dev`

### __Add custom fonts__

From the [With Tailwind CSS
](https://nextjs.org/docs/app/building-your-application/optimizing/fonts#with-tailwind-css)
section of the Next.js 'Font Optimization' docs:

1. In Terminal, `npm run dev` and visit <http://localhost:3000/a1>
2. Remove all `font` and `font-family` rules from src/app/globals.css
3. In src/app/layout.js insert a new import to the top of the file:  
   `import { Albert_Sans, Zilla_Slab } from 'next/font/google'`
4. Add the following configuration and setup to src/app/layout.js:  
   ```js
   const albert = Albert_Sans({
     display: 'swap',
     subsets: ['latin'],
     variable: '--font-albert',
     weight: '500',
   })
   const zilla = Zilla_Slab({
     display: 'swap',
     subsets: ['latin'],
     variable: '--font-zilla',
     weight: '500',
   })
   const className = `
     ${albert.variable} ${zilla.variable}
     font-sans
     bg-grey-200 dark:bg-grey-900 text-grey-800 dark:text-grey-300
   `
   ```
5. And change the `<html>` tag to:  
   `<html lang="en" className={className}>`
6. In tailwind.config.js add
   `import { fontFamily } from 'tailwindcss/defaultTheme'`
7. Extend the theme in tailwind.config.js, with some custom [Google fonts:
   ](https://fonts.google.com/variablefonts)
   ```js
   theme: {
     ...
     extend: {
       colors: {
         ...
       },
       fontFamily: {
         sans: ['var(--font-albert)', ...fontFamily.sans],
         serif: ['var(--font-zilla)', ...fontFamily.serif],
       },
     },
   },
   ```
8. Check that the new fonts are working, eg in src/app/layout.tsx add:  
   `font-serif` to the `className` prop, and then change that to `font-sans`
9. In Terminal, Control-C to stop `npm run dev`

__Optionally, check the .woff2 files__  
After you have run `npm run build` and `npm serve`, use your browser's Network
inspector to find the URLs of the two .woff2 font files. Visiting these URLs
should download those files. You can then use an online service like
<https://fontsee.com/> to check which glyphs are included. Don't forget to
donate to FontSee on its Ko-fi page!

### __Create a &lt;Header> component__

1. In Terminal, `npm run dev` and visit <http://localhost:3000/a1>
2. `mkdir src/components && touch src/components/header.tsx`
3. Export a default `Header()` function, with some Tailwind styling:
   ```tsx
   // src/components/header.tsx
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
   ```
   _Note that `<Link href="/">` would not work after `npm run build`_
4. Import it into src/app/layout.tsx
5. The `Home()` function in src/app/page.tsx can now be simplified
6. Clicking on the new links should currently show a
   [404 This page could not be found](http://localhost:3000/en/a1/visual) page
7. In Terminal, Control-C to stop `npm run dev`

__Why src/components/ not src/app/components/ ?__  
From Next.js 13 onwards components in src/app/ are considered [server components
](https://nextjs.org/docs/getting-started/react-essentials#thinking-in-server-components)
by default. Since this app is intended to be served from CDN or GitHub Pages, it
will not be using server components. That means the src/app/ can be treated
solely as the router root, as advocated in this [Stack Overflow answer,
](https://stackoverflow.com/a/76214566) and the [Store project files outside of
app](https://nextjs.org/docs/app/building-your-application/routing/colocation#store-project-files-outside-of-app) section of the 
Next.js Project Organization docs.

### __Create initial routes for a static multilingual app__

New for Next.js 13 is the [App Router,](https://nextjs.org/docs/app) which
replaces the old 'Pages Router'.

1. In Terminal, `npm run dev` and visit <http://localhost:3000/a1>
2. Command-T to open a new tab, and `mkdir public`
3. `touch public/legacy-browser-fallback.js` and add placeholder code:  
   `console.log('@TODO legacy browser fallback')`
4. The remaining new files will all go in src/app/, so `cd src/app`
5. The src/app/ layout and page will be used for a short animation and redirect.  
   They should be language-agnostic - that is, they should contain no text:
   ```tsx
   // src/app/layout.tsx
   import { Albert_Sans, Zilla_Slab } from 'next/font/google'
   import Script from 'next/script';
   import './globals.css'
   
   const albert = Albert_Sans({
     display:'swap', subsets:['latin'], variable:'--font-albert', weight:'500' })
   const zilla = Zilla_Slab({
     display:'swap', subsets:['latin'], variable:'--font-zilla', weight:'500' })
   const className = `
     ${albert.variable} ${zilla.variable} font-sans
     bg-grey-200 dark:bg-grey-900 text-grey-800 dark:text-grey-300`
   
   export const metadata = {
     title: 'NOT-TIMID',
     description: '...', // we don't know the user's language yet
   }
   
   export default function RootLayout({
     children,
   }: {
     children: React.ReactNode
   }) {
     return (
       <html lang="en">
         <head>
           <Script src='/a1/legacy-browser-fallback.js'></Script>
         </head>
         <body className={className}>
           {children}
         </body>
       </html>
     )
   }
   ```
   ```js
   // src/app/page.tsx
   export default function Landing() {
     return <h1>@TODO non-language animation, then redirect to /a1/*/</h1>
   }
   ```
6. `mkdir en && cp layout.tsx en/layout.tsx && cp page.tsx en/page.tsx`
7. The src/app/en/ layout and page create the English-language homepage:
   ```tsx
   // src/app/en/layout.tsx
   import Header from '../../components/header'
   
   export const metadata = {
     title: 'NOT-TIMID',
     description: 'AI-assisted creative apps',
   }
   
   export default function HomeEnLayout({
     children,
   }: {
     children: React.ReactNode
   }) {
     return (
       <main>
         <Header />
         {children}
       </main>
     )
   }
   ```
   ```tsx
   // src/app/en/page.tsx
   export default function HomeEn() {
     return <h1 className="font-serif">Coming Soon</h1>
   }
   ```
8. `mkdir en/floorplan && cp en/page.tsx en/floorplan/page.tsx`
9. Edit the new src/app/en/floorplan/page.tsx to make it minimal but unique, eg:  
   `export default function Floorplan() { return <h1>Floorplan</h1> }`
10. Visit <http://localhost:3000/a1/floorplan> to see the rendered page
11. `mkdir en/moodboard && cp en/floorplan/page.tsx en/moodboard/page.tsx`
12. `mkdir en/visual && cp en/floorplan/page.tsx en/visual/page.tsx`
13. Make the new Moodboard and Visual page.tsx files minimal but unique
14. Visit the new pages in your browser, to check they're working
15. Command-W to close the 2nd Terminal tab, and Control-C to stop `npm run dev`
16. `npm run bas` and check that the five routes work

### Add a new language route

As the [i18n docs say,
](https://nextjs.org/docs/pages/building-your-application/routing/internationalization#how-does-this-work-with-static-generation)
Next.js's built-in Internationalized Routing does not integrate with
`output: 'export'`. Instead, we will manually recreate the i18n behavior.

1. In Terminal, `cp -R src/app/en/ src/app/es` to start the Spanish locale
2. Rename the Spanish floorplan.tsx to plano.tsx, moodboard.tsx to
   tablero-de-humor.tsx and visual.tsx to visualizacion.tsx
3. Update the page.tsx files. For example, src/app/es/tablero-de-humor/page.tsx:
   ```tsx
   export default function MoodboardEs() {
     return <h1 className="font-serif">Tablero de Humor</h1>
   }
   ```
   Note that `MoodboardEn` becomes `MoodboardEs`, not `TableroDeHumorEs`
4. `npm run dev` and visit <http://localhost:3000/a1/es>, where you should see
   'Muy pronto' instead of 'Coming soon'
5. Control-C to stop `npm run dev`

### Use simple object imports for internationalisation

Next.js is relaxed about the choice of i18n library. From the
[Internationalization (i18n) Routing docs:
](https://nextjs.org/docs/pages/building-your-application/routing/internationalization)

> "The i18n routing support is currently meant to complement existing i18n
> library solutions like react-intl, react-i18next, lingui, rosetta, next-intl,
> next-translate, next-multilingual, typesafe-i18n, tolgee, and others by
> streamlining the routes and locale parsing."

I looked at a few of these. In particular I tried installing:
- 'typesafe-i18n' - too obtrusive and fully featured
- 'rosetta' - simple and straightforward, see the now-deleted
  'Maybe use Rosetta for internationalisation' section of this README.md,
  at commit 07bd343

But there were two problems I could not solve. Firstly, the entire 'en.json'
locale files were replicated in each generated page .js file, including text not
used on that page. Secondly, the `useContext()` hook needs components to begin
`'use client'`, but that prevents `<head>` from being updated from sub-layouts.

My solution, described below, just uses simple `import` statements. Firstly this
lets Webpack's tree-shaking remove unused text from the docs/ page .js files.
Secondly, it avoids `'use client'`, so that sub-layouts can update `<head>`.

1. `mkdir src/locales && touch src/locales/locale-schema.d.ts` and paste in:
   ```ts
   interface Page {
     intro: string;
     route: string;
     title: string;
   }
   export default interface Locale {
     /** Two-character language code, eg 'pt' for Portuguese. */
     code: string;
     /** The content for `<meta name="description" ...>` in the `<head>`. */
     description: string;
     floorplan: Page;
     home: Page;
     moodboard: Page;
     visual: Page;
   }
   ```
2. `touch src/locales/en.ts` and paste in:
   ```ts
   import Locale from './locale-schema'
   const en: Locale = {
     code: 'en',
     description: 'AI-assisted creative apps',
     floorplan: { intro: 'Lorem', route: 'floorplan', title: 'Floorplan' },
     home: { intro: 'Coming Soon', route: '', title: 'NOT-TIMID' },
     moodboard: { intro: 'Ipsum', route: 'moodboard', title: 'Moodboard' },
     visual: { intro: 'Dolor', route: 'visual', title: 'Visual' },
   }
   export default en
   ```
3. `cp src/locales/en.ts src/locales/es.ts` and translate it to Spanish, using
   'Consectetur', 'Adipiscing' and 'Elit' for the three placeholder intros.
4. Update the eight page.tsx files. For example, src/app/es/plano/page.tsx:
   ```tsx
   import t from '../../../locales/es'
   export default function FloorplanEs() {
     return <h1 className="font-serif">{t.floorplan.title} {t.floorplan.intro}</h1>
   }
   ```
5. Make the Header component accept a `Locale` object called `t`:
   ```tsx
   // src/components/header.tsx
   import Link from 'next/link'
   import Locale from '../locales/locale-schema'   
   export default function Header({ t }: { t: Locale }) {
     const base = `/${t.code}`
     return (
       <nav className="px-2 py-1 bg-grey-800 text-lemon">
         <Link href={base}>
           <span className="font-serif text-[1.08em]">NOT</span>-TIMID
         </Link> &nbsp;
         <Link href={`${base}/${t.moodboard.route}`}>{t.moodboard.title}</Link> &nbsp;
         <Link href={`${base}/${t.floorplan.route}`}>{t.floorplan.title}</Link> &nbsp;
         <Link href={`${base}/${t.visual.route}`}>{t.visual.title}</Link>
         <aside><code>/a1</code></aside>
       </nav>
     )
   }
   ```
6. Update two of the layout.tsx files. For example, src/app/es/layout.tsx:
   ```tsx
   import Header from '../../components/header'
   import t from '../../locales/es'
   export const metadata = { description:t.description }
   export default function LayoutEs(
    { children }: { children: React.ReactNode }
   ) {
     return (
       <main>
         <Header t={t} />
         {children}
       </main>
     )
   }
   ```
7. In Terminal, `npm run build`
8. You should see that docs/es/plano.html contains:  
   `<meta name="description" content="Aplicaciones creativas asistidas por IA"/>`
9. You should also see that docs/es/plano.html contains the word 'Consectetur'
   in two places, and docs/es/plano.txt contains it once, but neither file
   contains 'Adipiscing' or 'Elit'

### Fix the `<html lang="...">` attribute

Before this stage, the Spanish pages use `<html lang="en">`. This can be
fixed by [creating multiple root layouts.
](https://nextjs.org/docs/app/building-your-application/routing/route-groups#creating-multiple-root-layouts)

The default language (English, in this case) will need to be set up a little
differently to the other languages, because the landing page /a1/ is in the
default language (see step 6., below).

1. `touch src/components/root-layout.tsx` and paste in:
   ```tsx
   import Script from 'next/script'
   export default function RootLayout(
     { children, className, lang } :
     { children:React.ReactNode, className:string, lang:'en'|'es' }
   ) {
     return (
       <html lang={lang}>
         <Script src='/a1/legacy-browser-fallback.js'></Script>
         <body className={className}>{children}</body>
       </html>
     )
   }
   ```
2. `mkdir src/lib && touch src/lib/class-name-latin.ts` and paste in:
   ```ts
   import { Albert_Sans, Zilla_Slab } from 'next/font/google'
   
   // The 'latin' subset covers most Western European languages.
   const albert = Albert_Sans({
     display:'swap', subsets:['latin'], variable:'--font-albert', weight:'500' })
   const zilla = Zilla_Slab({
     display:'swap', subsets:['latin'], variable:'--font-zilla', weight:'500' })
   
   const classNameLatin = `
     ${albert.variable} ${zilla.variable} font-sans
     bg-grey-200 dark:bg-grey-900 text-grey-800 dark:text-grey-300`
   export default classNameLatin
   ```
3. Next we'll need to move the files in src/app/ around, so `cd src/app`
4. `mkdir \(english\) && mkdir \(spanish\)` to create two Next.js 'Route Groups'
5. `mv en \(english\) && mv es \(spanish\)` which will keep the /a1/en/... and
    /a1/es/... routes working as before
6. `mv page.tsx \(english\) && mv layout.tsx \(english\)` to move the landing
   page and its layout to the default language's route group.  
   Next.js expects exactly one Route Group to contain a page.tsx file in its top
   level. It treats that page.tsx as the /a1/ root route. In NOT-TIMID's case,
   that page.tsx will be our landing page, which won't look like it's in any
   particular language. It will need to favour a language in two places though:
   - `<html lang="...">` which will be the default NOT-TIMID language, `"en"`
   - `<meta name="description" content="..."` which will be some English text
7. The landing page's layout should use root-layout.tsx and class-name-latin.ts:
   ```tsx
   // src/app/(english)/layout.tsx
   import RootLayout from '../../components/root-layout'
   import className from '../../lib/class-name-latin'
   import t from '../../locales/en'
   import '../globals.css'
   
   export const metadata = {
     description: t.description,
     title: 'NOT-TIMID',
   }
   
   export default function LayoutEn(
     { children }: { children: React.ReactNode }
   ) {
     return <RootLayout className={className} lang="en">{children}</RootLayout>
   }
   ```
8. Now the Spanish language can be given its own layout, which will specify the
   important `lang="es"` attribute:
   ```tsx
   // src/app/(spanish)/layout.tsx
   import RootLayout from '../../components/root-layout'
   import className from '../../lib/class-name-latin'
   import t from '../../locales/es'
   import '../globals.css'
   
   // Override some of the metadata that src/app/(english)/layout.tsx exports.
   export const metadata = { description: t.description }
   
   export default function LayoutEs(
     { children }: { children: React.ReactNode }
   ) {
     return <RootLayout className={className} lang="es">{children}</RootLayout>
   }
   ```
9. The second-level layout.tsx files no longer need to export `metadata`, eg:
   ```tsx
   // src/app/(spanish)/es/layout.tsx
   import Header from '../../../components/header'
   import t from '../../../locales/es'
   export default function LayoutEs(
     { children }: { children: React.ReactNode }
   ) {
     return (
       <main>
         <Header t={t} />
         {children}
       </main>
     )
   }
   ```
   ...The English version of this is identical, apart from importing `t` from
   es.ts, and naming the exported function `LayoutEn()`

### __Install and use Carbon React icons__

I searched for a free (donation-ware), React-compatible icon library, with a
fairly broad set of useful icons. In particular, square line-caps to fit the
Zilla slab typeface.

- From [this Untitled UI blog post,
  ](https://www.untitledui.com/blog/free-icon-sets) a stand-out is
  [css.gg](https://css.gg/app?s=arrow) which is 1 package, 28.6 MB for 5773
  items. I wasn't sure about CSS-based icons though, and usage seems tricky
- From [this Kindacode article,
  ](https://www.kindacode.com/article/best-open-source-icon-libraries-for-react/)
  the [IBM Carbon Design System
  ](https://carbondesignsystem.com/guidelines/icons/library/) ticks all the
  boxes. The main module and TS types install 4 packages, 46.3 MB for 8502 items

1. In Terminal, `npm install @carbon/icons-react` which adds 3 packages,
   28.8 MB for 4269 items (the '3 moderate severity vulnerabilities' are all
   from previously installed packages)
2. `npm install @types/carbon__icons-react` which adds 1 package,
   17.5 MB for 4233 items
3. Search for 'user avatar' on the [Carbon Icons search page,
   ](https://carbondesignsystem.com/guidelines/icons/library/) and click the
   `</>` icon under one of the results, to get the component name
4. Add `import { UserAvatar } from '@carbon/icons-react'` to header.tsx
5. Inside the Header's `<nav>` element, add:  
   `<UserAvatar size="24" style={{float:'right',marginRight:24,cursor:'pointer'}} />`
6. `npm run bas` and 'Inspect' the icon in the browser. You should see it is an
   inline SVG, containing various `<path>` elements:
   ```html
   <svg
     focusable="false"
     preserveAspectRatio="xMidYMid meet"
     xmlns="http://www.w3.org/2000/svg"
     fill="currentColor"
     style="float: right; margin-right: 24px; cursor: pointer"
     width="24"
     height="24"
     viewBox="0 0 32 32"
     aria-hidden="true"
   >
     <path
       d="M16,8a5,5,0,1,0,5,5A5,5,0,0,0,16,8Zm0,8a3,3,0,1,1,3-3A3 ... 1,16,16Z"
     ></path>
     <path
       d="M16,2A14,14,0,1,0,30,16,14.0158,14.0158,0,0,0,16,2ZM10 ... ,15.985,0Z"
     ></path>
   </svg>
   ```
7. In Terminal, Control-C to stop the server and rename a1/ back to docs/
8. In VS Code, Command-Shift-F to multi-file search for 'xMidYMid' - you should
   see that the SVG data is duplicated in 24 places in 16 files

So Carbon React icons are quick and easy to install and use, but node_modules/
becomes significantly bigger. The .html and .txt files in docs/ will also become
much bigger, if many/complex icons are used throughout the app.

There may be a more slimline solution but the Carbon React icons are ok for now.

### __Parse the ID from the route__

Every Moodboard, Floorplan and Visual will have a unique identifier. These
unique IDs can be parsed from the URL, for example:
- /a1/en/visual/?/60142/
- /a1/es/visualizacion/?/60142/

Next.js commonly runs on a Node server, where it could parse the ID 60142 from a
URL like /a1/en/visual/60142/ to dynamically generate the correct page response.  
But this app will be statically exported and served by GitHub Pages (effectively
a CDN), so an extra `?/` must be inserted before the dynamic parts of the URL.

1. At this point it would be useful to differentiate between the home page and
   the three creative pages. Update src/locales/locale-schema.d.ts to this:
   ```ts
   export interface HomePageI {
     /** Introductory text, welcoming the user to the app. */
     intro: string;
     title: string;
   }
   export interface PopupI {
     /** Used as a tooltip when hovering over the link icon */
     route: string;
     title: string;
   }
   export interface CreativePageI {
     /** Introductory text, shown when no ID is present. */
     intro: string;
     route: string;
     title: string;
   }
   export default interface LocaleI {
     /** Two-character language code, eg 'pt' for Portuguese. */
     code: string;
     /** The content for `<meta name="description" ...>` in the `<head>`. */
     description: string;
     floorplan: CreativePageI;
     home: HomePageI;
     moodboard: CreativePageI;
     profile: PopupI;
     visual: CreativePageI;
   }
   ```
2. Update src/locales/en.ts and es.ts by removing `home.route` and adding:  
   `profile: { route: 'perfil', title: 'Perfil' },`  
   Note that `profile` and `PopupI` will not be needed until later - see
   [Parse the popup from the route,](#parse-the-popup-from-the-route) below
3. Rename `Locale` to `LocaleI` in all the src/ files
4. The dynamic `?/` will look more like a regular URL if the 'real' routes have
   a trailing slash. In next.config.js add:  
   `trailingSlash: true,`  
   Note that a page in docs/ which was previously en/foo-bar.html, will now be
   en/foo-bar/index.html (with an accompanying index.txt file). This is actually
   more widely supported by static servers - for example the NPM module
   `static-server` will now serve the app correctly.
5. `mkdir touch src/lib/query && touch src/lib/query/get-id-from-query.ts`
   and paste in:
   ```ts
   export default function getIdFromQuery(query: string) {
     const id = query.toString()
       .match(/\d{5,}/) // the ID is the first 5+ digit integer
     return id && Number(id[0])
   }
   ```
6. `mkdir src/components/pages && touch src/components/pages/creative-page.tsx`
   and paste in:
   ```tsx
   import { Suspense } from 'react'
   import { CreativePageI } from '../../locales/locale-schema'
   import CreativePageClient, { CreativePageFallback } from './creative-page-client'
   
   export default function CreativePage({ t }: { t: CreativePageI }) {
     return (
       <Suspense fallback={<CreativePageFallback />}>
         <CreativePageClient t={t} />
       </Suspense>
     )
   }
   ```
   This provides a 'Suspense boundary', where `<CreativePageClient>` will be
   rendered by the browser, not baked into the static .html files.
7. `touch src/components/pages/creative-page-client.tsx` and paste in:
   ```tsx
   'use client'
   import { useSearchParams } from 'next/navigation'
   import { CreativePageI } from '../../locales/locale-schema'
   import getIdFromQuery from '../../lib/query/get-id-from-query'
   
   export default function CreativePageClient({ t }: { t: CreativePageI }) {
     const id = getIdFromQuery(useSearchParams().toString())
     return (<>
       <h1 className="font-serif">{t.title}</h1>
       <p>{id ? id : t.intro}</p>
     </>)
   }
   
   // Passed as a fallback to the Suspense boundary. Will be rendered in the
   // initial HTML, until the value is available during React hydration, when
   // it will be replaced with `<CreativePageClient>`.
   export function CreativePageFallback() { return <>...</> }
   ```
8. The six 'creative' page.tsx files can now be simplified, eg:
   ```tsx
   // src/app/(english)/en/floorplan/page.tsx
   import t from '../../../../locales/en'
   import CreativePage from '../../../../components/pages/creative-page'
   export default function FloorplanEn() {
     return <CreativePage t={t.floorplan} />
   }
   ```
9. `npm run bas` and check that the following routes work as expected (you may
   see a flash of '...' between requests, which shows that the fallback works)
   - /a1/es - should automatically redirect to /a1/es/
   - /a1/es/plano/ - should show 'Plano' and 'Consectetur' on two lines
   - /a1/es/plano/60142/ - should show the 404 page
   - /a1/es/plano/?/60142/ - should show 'Plano' and '60142' on two lines
   - /a1/es/plano?60142 - should show the same - the '/'s are optional
   - /a1/es/plano/?/1234/ - should show the 'Consectetur' page (only 4 digits)
10. Control-C to stop `npm run bas` and rename a1/ back to docs/

### __Parse the popup from the route__

Popups (which are often 'modals') should be [accessible as unique routes.
](https://www.bennadel.com/blog/3620-most-of-your-modal-windows-should-be-directly-accessible-by-route-in-angular-7-2-15.htm)

Currently the app has four pages, multiplied by two languages. If popups were
implemented as static exported routes like this:
- /a1/en/profile/
- /a1/en/visual/profile/
- /a1/en/visual/profile/?/60142/

...then the number of exported .html and .txt pages would multiply by the
number of possible popups, so that adding a new language might add several dozen
files to the build.

The query string system introduced in [the previous step
](#parse-the-id-from-the-route) can prevent that kind of duplication, eg:
- /a1/en/?/profile/
- /a1/en/visual/?/profile/
- /a1/en/visual/?/60142/profile/ (more natural than /profile/?/60142/)

1. `touch src/lib/query/query-has-segment.ts` and paste in:
   ```ts
   export default function queryHasSegment(query: string, segment: string) {
     return query.endsWith(`%2F${segment}=`) || query.includes(`%2F${segment}%2F`)
   }
   ```
2. `touch src/lib/query/query-popup-link.ts` and paste in:
   ```ts
   export default function queryPopupLink(query: string, segment: string) {
     let q = query.replace(/%2F/g, '/') // '%2F12345%2F=' -> '/12345/='
     q = q.slice(-1) === '=' ? q.slice(0, -1) : q // remove trailing '='
     const id = q.match(/\d{5,}/) // the ID is the first 5+ digit integer
     return `?/${id ? id+'/' : ''}${segment}/`
   }
   ```
3. `touch src/lib/query/index.ts` and paste in:
   ```ts
   export { default as getIdFromQuery } from './get-id-from-query'
   export { default as queryHasSegment } from './query-has-segment'
   export { default as queryPopupLink } from './query-popup-link'
   ```
   ...and now src/components/pages/creative-page-client.tsx can use:  
   `import { getIdFromQuery } from '../../lib/query'`
4. `mkdir src/components/popups && touch src/components/popups/popup-icon.tsx`
   and paste in:
   ```tsx
   import { CarbonIconType } from '@carbon/icons-react'
   import Link from 'next/link'
   import { PopupI } from '../../locales/locale-schema'
   
   export default function PopupIcon(
     { t, Icon, href }:
     { t: PopupI, Icon: CarbonIconType, href: string | false }
   ) {
     const outer = 'inline-block mx-3'
     return href ?
       <Link href={href} className={outer} title={t.title}>
         <Icon size="24" className="text-lemon-400 hover:text-lemon-100" />
       </Link> :
       <span className={outer}>
         <Icon size="24" className="text-lemon-600" />
       </span>
   }
   ```
5. `touch src/components/pages/profile-popup-client.tsx` and paste in:
   ```tsx
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
   ```
5. `touch src/components/popups/profile-popup.tsx` and paste in:
   ```tsx
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
   ```
   From [the Next.js useSearchParams docs,
   ](https://nextjs.org/docs/app/api-reference/functions/use-search-params#static-rendering)
   we can maximise the amount of static rendering by placing a 'Suspense' boundary
   just above the Profile icon.
6. `touch src/components/popups/index.ts` and just export the externally useful
   popup component:
   ```tsx
   export { default as ProfilePopup } from './profile-popup'
   ```
7. In src/components/header.tsx, replace:  
   `import { UserAvatar } from '@carbon/icons-react'`  
   with:  
   `import { ProfilePopup } from './popups'`
8. And replace:  
   `<UserAvatar size="24" style={{ ... }} />`  
   with:  
   `<ProfilePopup t={t.profile} />`
8. `npm run bas` and check that the following works as expected (the flash
   of '...' before the Profile icon appears shows that the fallback works)
   - The /a1/es/ route should show the Profile icon, the same colour as the text
   - Hovering over the icon should show the lighter colour, and 'Perfil' tooltip
   - Clicking it should navigate to /a1/es/?/perfil/
   - The icon should now be darker, unhoverable, and show no tooltip
   - Clicking 'Plano' should navigate to /a1/es/plano/
   - The icon should be hoverable again
   - Manually appending ?/12345/ to the route should show '12345' in the content
   - Clicking the icon should navigate to /a1/es/plano/?/12345/perfil/
   - The content should still show '12345', while the icon is unhoverable again
9. Control-C to stop `npm run bas` and rename a1/ back to docs/
10. In VS Code, Command-Shift-F to multi-file search for 'xMidYMid' - you should
    now see that the SVG data is only duplicated in 2 places in 1 file (one of
    the static chunks). Moving the icon into a `'use client'` component, below a
    Suspense boundary has made this Carbon React icon much slimmer in the build.

<!-- ### __Turn the Header into a CSS table__

1. Remove the `aside ...` line from src/app/globals.css
2.  -->


<!-- 255,924,531 bytes (326.7 MB on disk) for 24,448 items -->