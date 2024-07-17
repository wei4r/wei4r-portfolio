import './globals.css'
import { Inter, Space_Mono } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
export const space_mono = Space_Mono({ subsets: ['latin'], weight: '700' })

// export const metadata = {
//   title: 'wei4r',
//   description: 'wei4r\'s personal website',
// }

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>wei4r</title>
        <meta name='description' content='Personal website of wei4r.' />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
