'use client';

import { useEffect } from 'react';
import './globals.css';
import { i18n } from 'i18next';
import { I18nextProvider } from 'react-i18next';
import { getStorage, setStorage } from '@/utils/localStorage';
import isServer from '@/utils/isServer';
import { LANGUAGE_TYPE } from '@/types';

import { DEFAULT_LANG, i18nInstance } from '@/app/_locales/i18n';

import { Caveat, Noto_Sans_TC } from 'next/font/google';
const notoSansTC = Noto_Sans_TC({
	subsets: ['latin'],
	weight: 'variable',
});

// const inter = Inter({ subsets: ['latin'] });
export const caveat = Caveat({ subsets: ['latin'] });

// export const metadata: Metadata = {
//   title: '第一銀行',
//   description: '展覽頁面',
// }

export default function RootLayout({ children }: { children: React.ReactNode }) {
	const isServerSide = isServer();

	useEffect(() => {
		if (!isServerSide) {
			let currentLang = getStorage<LANGUAGE_TYPE>('lang');

			if (!currentLang) {
				currentLang = DEFAULT_LANG;
			}
			setStorage('lang', currentLang);
			i18nInstance.changeLanguage(currentLang);
		}
	}, [isServerSide]);

	return (
		<html lang="zh-Hant-TW">
			<head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
				<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100..900&display=swap" rel="stylesheet" />
			</head>
			<body>
				<I18nextProvider i18n={i18nInstance as i18n}>{children}</I18nextProvider>
			</body>
		</html>
	);
}
