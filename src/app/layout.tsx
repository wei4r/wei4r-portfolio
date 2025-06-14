import './globals.css'
import { Inter } from 'next/font/google'
import { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'wei4r',
  description: 'wei4r\'s personal website',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
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
