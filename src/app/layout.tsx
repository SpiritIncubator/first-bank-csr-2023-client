'use client';

import './globals.css'
import { i18n } from 'i18next';
import { I18nextProvider } from 'react-i18next';

import { i18nInstance } from '@/app/_locales/i18n';

import { Inter, Caveat, Noto_Sans_TC } from 'next/font/google'
const notoSansTC = Noto_Sans_TC({
  subsets: ['latin'],
  weight: "variable"
})

// const inter = Inter({ subsets: ['latin'] });
export const caveat = Caveat({ subsets: ['latin'] });

// export const metadata: Metadata = {
//   title: '第一銀行',
//   description: '展覽頁面',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={notoSansTC.className} >
        <I18nextProvider i18n={i18nInstance as i18n}>
          {children}
        </I18nextProvider>
      </body>
    </html>
  )
}
