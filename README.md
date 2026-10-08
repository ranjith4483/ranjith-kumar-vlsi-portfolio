# Ranjith Kumar Golagani — Portfolio

A responsive 3D resume portfolio for an aspiring Physical Design Engineer. It pairs a WebGL silicon-die scene with a readable resume, internship history, education, VLSI skills and direct contact links.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). To check the production build locally:

```bash
npm run build
npm run start
```

The 3D die can be rotated with pointer or touch. Its rotation follows the device reduced-motion preference and can be paused. The resume can be printed or saved as PDF from the browser.

## Deploy

The project is configured for **Vercel** (`vercel.json`, Next.js framework). Import this repository into a Vercel project; Vercel will detect Next.js and use `npm run build`. No environment variables are required. Connect the GitHub repository to enable automatic preview deployments for branches and production deployment from the selected production branch.

GitHub Pages is not configured: this project uses Next.js with a shared React Three Fiber canvas and the Next PWA plugin, so it should be deployed with a Next.js host rather than published as a plain static folder.

## Built with

Next.js, React, React Three Fiber, Three.js and Drei. The app uses the [react-three-next](https://github.com/pmndrs/react-three-next) starter architecture for rendering 3D views within the DOM.
