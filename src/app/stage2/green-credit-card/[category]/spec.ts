import GreenReleaseDate from './assets/green-release-date.svg';
import TaoyuanReleaseDate from './assets/taoyuan-release-date.svg';
import YilanReleaseDate from './assets/yilan-release-date.svg';
import LeezenReleaseDate from './assets/leezen-release-date.svg';
import LastReleaseDate from './assets/world-release-date.svg';

import GreenReleaseDateEn from './assets/green-release-data-en.svg';
import TaoyuanReleaseDateEn from './assets/taoyuan-release-date-en.svg';
import YilanReleaseDateEn from './assets/yilan-release-date-en.svg';
import LeezenReleaseDateEn from './assets/leezen-release-date-en.svg';
import LastReleaseDateEn from './assets/world-release-date-en.svg';

import GreenCard from './assets/green-card.svg';
import TaoyuanCard from './assets/taoyuan-card.svg';
import YilanCard from './assets/yilan-card.svg';
import LeezenCard from './assets/leezen-card.svg';
import WorldCard from './assets/world-card.svg';

import GreenCardTitle from './assets/green-card-title.svg';
import TaoyuanCardTitle from './assets/taoyuan-card-title.svg';
import YilanCardTitle from './assets/yilan-card-title.svg';
import LeezenCardTitle from './assets/leezen-card-title.svg';
import WorldCardTitle from './assets/world-card-title.svg';

import GreenCardSample from './assets/green-card-sample.svg';
import WorldCardSample from './assets/world-card-sample.svg';

import LeezenQrCode from './assets/leezen-qrcode.svg';


type LanguageType = 'en' | 'zh';

export type CreditCardInfoType = {
	circulationAmount: number;
	accumulateAmount: number;
	descriptions: string[];
	src: string;
	code: string;
	imgSrc: {
		[key in LanguageType]: {
			titleImg: string;
			releaseDateImg: string;
			cardNameImg: string;
		};
	}
};


export const creditCardInfos: Array<CreditCardInfoType> = [
	{
		circulationAmount: 54439,
		accumulateAmount: 7280711,
		descriptions: ['green.card.detail.one'],
		src: GreenCardSample,
		code: LeezenQrCode,
		imgSrc: {
			en: {
				titleImg: GreenCardTitle,
				releaseDateImg: GreenReleaseDateEn,
				cardNameImg: GreenCard,
			},
			zh: {
				titleImg: GreenCardTitle,
				releaseDateImg: GreenReleaseDate,
				cardNameImg: GreenCard,
			},
		},
	},
	{
		circulationAmount: 113921,
		accumulateAmount: 7077047,
		descriptions: ['taoyuan.card.detail.one', 'taoyuan.card.detail.two'],
		src: GreenCardSample,
		code: LeezenQrCode,
		imgSrc: {
			en: {
				titleImg: TaoyuanCardTitle,
				releaseDateImg: TaoyuanReleaseDateEn,
				cardNameImg: TaoyuanCard,
			},
			zh: {
				titleImg: TaoyuanCardTitle,
				releaseDateImg: TaoyuanReleaseDate,
				cardNameImg: TaoyuanCard,
			},
		},
	},
	{
		circulationAmount: 50584,
		accumulateAmount: 10285527,
		descriptions: ['yilan.card.detail.one', 'taoyuan.card.detail.two'],
		src: GreenCardSample,
		code: LeezenQrCode,
		imgSrc: {
			en: {
				titleImg: YilanCardTitle,
				releaseDateImg: YilanReleaseDateEn,
				cardNameImg: YilanCard,
			},
			zh: {
				titleImg: YilanCardTitle,
				releaseDateImg: YilanReleaseDate,
				cardNameImg: YilanCard,
			},
		},
	},
	{
		circulationAmount: 46453,
		accumulateAmount: 132143734,
		descriptions: ['leezen.card.detail.one', 'taoyuan.card.detail.two'],
		code: LeezenQrCode,
		src: GreenCardSample,
		imgSrc: {
			en: {
				titleImg: LeezenCardTitle,
				releaseDateImg: LeezenReleaseDateEn,
				cardNameImg: LeezenCard,
			},
			zh: {
				titleImg: LeezenCardTitle,
				releaseDateImg: LeezenReleaseDate,
				cardNameImg: LeezenCard,
			},
		},
	},
	{
		circulationAmount: 5390,
		accumulateAmount: 5502602,
		descriptions: ['world.card.detail.one', 'world.card.detail.two'],
		src: WorldCardSample,
		code: LeezenQrCode,
		imgSrc: {
			en: {
				titleImg: WorldCardTitle,
				releaseDateImg: LastReleaseDateEn,
				cardNameImg: WorldCard,
			},
			zh: {
				titleImg: WorldCardTitle,
				releaseDateImg: LastReleaseDate,
				cardNameImg: WorldCard,
			},
		},
	},
];