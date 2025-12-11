import './globals.css'
import { Roboto } from 'next/font/google'
import type { Metadata } from 'next'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-roboto'
})

export const metadata: Metadata = {
  title: {
    template: '%s | 사이트 이름',
    default: '사이트 이름'
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <body className={`${roboto.className} antialiased`}>{children}</body>
    </html>
  )
}
