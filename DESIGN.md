# Portfolio design system

## Direction

The page is an instrument-like view into an early-career physical-design practice: a small, working 3D silicon die leads the experience; the resume remains readable, grounded and immediately contactable.

## Materials and color

- Ink-black substrate (`#0b1110`) with subtly raised graphite panels.
- Mint signal paths (`#8fd4aa`) identify active routes, key actions and selected details.
- Restrained copper traces (`#d09170`) punctuate pins and secondary labels.
- Cool, high-contrast text and quiet green-gray dividers keep dense resume information legible.
- The grid is confined to the die inspection stage as a measurement surface, not used as page-wide texture.

## Type and composition

Use the system sans-serif stack for quick reading across devices. Large, tightly tracked headings contrast with compact uppercase instrument labels, small tabular dates and comfortable body-copy line-height. The desktop opening pairs the profile and contact actions with the 3D die; on mobile, the same content becomes a single-column sequence.

## Interaction and accessibility

The die is a real React Three Fiber scene with touch/pointer orbit controls and a clearly labeled rotation toggle. Respect `prefers-reduced-motion` on first render. Keep resume content, navigation, contact actions and print behavior in semantic HTML so the experience does not depend on WebGL. Maintain visible keyboard focus, a skip link and a print stylesheet.
