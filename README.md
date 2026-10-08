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

GitHub Actions builds a static export and deploys it to GitHub Pages on each push to `main`. The Pages build disables the service worker and applies the repository base path automatically.

The production Next.js app can also be deployed to Vercel; import this repository and use the default Next.js build settings.

## Built with

Next.js, React, React Three Fiber, Three.js and Drei. The app uses the [react-three-next](https://github.com/pmndrs/react-three-next) starter architecture for rendering 3D views within the DOM.
