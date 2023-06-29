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
3. Check your __VS Code__ version:  
   `code --version # should be '1.79.1' or greater`
4. In VS Code, install and enable version 1.3.0 or greater of the
   [`dnamsons.kimbie-dark-plus`
   ](https://marketplace.visualstudio.com/items?itemName=dnamsons.kimbie-dark-plus)
   theme
5. And install and enable version 0.9.11 or greater of the
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

Follow the the ['Install' section of the Next.js Tailwind CSS docs:
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
