import './globals.css'
import type { Metadata } from 'next'
import { Inter, Noto_Sans_TC } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const notoSansTC = Noto_Sans_TC({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '第一銀行',
  description: '展覽頁面',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={notoSansTC.className} >
        {children}
      </body>
    </html>
  )
}
