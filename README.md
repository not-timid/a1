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
`npm run start`

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

### __Create a &lt;Header> component__

1. In Terminal, `npm run dev` and visit <http://localhost:3000/a1>
2. `mkdir src/app/components && touch src/app/components/header.tsx`
3. Export a default `Header()` function, with some simple Tailwind styling:
   ```jsx
   import Link from 'next/link'
    
   export default function Header() {
     return (
       <nav className="px-2 py-1">
         NOT-TIMID &nbsp;
         <Link href="/moodboard">Moodboard</Link> &nbsp;
         <Link href="/floorplan">Floorplan</Link> &nbsp;
         <Link href="/visual">Visual</Link>
         <aside><code>/a1</code></aside>
       </nav>
     )
   }
   ```
   _Note that `<Link href="/">` would not work after `npm run build`_
4. Import it into src/app/layout.tsx
5. The `Home()` function in src/app/page.tsx can now be simplified
6. Clicking on the new links should currently show a
   [404 This page could not be found](http://localhost:3000/a1/moodboard) page
7. In Terminal, Control-C to stop `npm run dev`

### __Get Next.js's App Router working__

New for Next.js 13 is the [App Router,](https://nextjs.org/docs/app) which
replaces the old 'Pages Router'.

1. In Terminal, `npm run dev` and visit <http://localhost:3000/a1>
2. Command-T and `cd src/app`
3. `mkdir floorplan && cp page.tsx floorplan/page.tsx`
4. Edit the new src/app/floorplan/page.tsx to make it minimal but unique, eg:  
   `export default function Floorplan() { return <h1>Floorplan</h1> }`
5. Visit <http://localhost:3000/a1/floorplan> to see the rendered page
6. `mkdir moodboard && cp floorplan/page.tsx moodboard/page.tsx`
7. `mkdir visual && cp floorplan/page.tsx visual/page.tsx`
8. Make the new Moodboard and Visual page.tsx files minimal but unique
9. Visit the new pages in your browser, to check they're working
10. Close that Terminal tab, and Control-C to stop `npm run dev`
11. `npm run build && npm start` and check the four routes still work

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
   Note that changes to tailwind.config.js should be hot-reloaded to the browser
6. Check that 'neutral' has now been renamed 'grey', eg in src/app/layout.tsx  
   add `className="bg-grey-200 text-grey-800"` to the `<html>` element
7. Check that the new colours are working, eg in src/app/components/header.tsx  
   add `bg-grey-800 text-lemon` to the `<nav className="...">`
8. In Terminal, Control-C to stop `npm run dev`

### __Add custom fonts__

From the [With Tailwind CSS
](https://nextjs.org/docs/app/building-your-application/optimizing/fonts#with-tailwind-css)
section of the Tailwind 'Font Optimization' docs:

1. In Terminal, `npm run dev` and visit <http://localhost:3000/a1>
2. Remove `font:21px Arial, sans-serif;` from src/app/globals.css
