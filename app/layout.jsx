import { Layout } from '@/components/dom/Layout'
import '@/global.css'

export const viewport = {
  themeColor: '#0b1110',
}

export const metadata = {
  title: 'Ranjith Kumar Golagani | Physical Design Engineer',
  description:
    'Portfolio and resume of Ranjith Kumar Golagani, an Electronics and VLSI Engineering student pursuing physical design roles.',
  keywords: [
    'Ranjith Kumar Golagani',
    'Physical Design Engineer',
    'VLSI',
    'ASIC physical design',
    'RTL to GDSII',
    'Cadence Innovus',
    'Cadence Genus',
  ],
  openGraph: {
    title: 'Ranjith Kumar Golagani | Physical Design Engineer',
    description:
      'Electronics and VLSI Engineering student focused on the physical design journey from RTL to routed silicon.',
    type: 'profile',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary',
    title: 'Ranjith Kumar Golagani | Physical Design Engineer',
    description:
      'Electronics and VLSI Engineering student focused on the physical design journey from RTL to routed silicon.',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang='en-IN' className='antialiased'>
      <body>
        {/* To avoid FOUT with styled-components wrap Layout with StyledComponentsRegistry https://beta.nextjs.org/docs/styling/css-in-js#styled-components */}
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
