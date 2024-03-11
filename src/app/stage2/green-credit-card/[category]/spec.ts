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

import GreenCardFront from './assets/cards/green-card-front.svg';
import GreenCardBack from './assets/cards/green-card-back.svg';
import GreenCard_QrCode from './assets/cards/green-card-qrcode.svg';
import GreenCard_QrCodeEn from './assets/cards/green-card-qrcode-en.svg';

import TaoyuanCardFront from './assets/cards/taoyuan-card-front.svg';
import TaoyuanCardBack from './assets/cards/taoyuan-card-back.svg';
import TaoyuanCard_QrCode from './assets/cards/taoyuan-card-qrcode.svg';
import TaoyuanCard_QrCodeEn from './assets/cards/taoyuan-card-qrcode-en.svg';

import YilanCardFront from './assets/cards/yilan-card-front.svg';
import YilanCardBack from './assets/cards/yilan-card-back.svg';
import YilanCard_QrCode from './assets/cards/yilan-card-qrcode.svg';
import YilanCard_QrCodeEn from './assets/cards/yilan-card-qrcodeEn.svg';

import LeezenCardFront from './assets/cards/leezen-card-front.svg';
import LeezenCardBack from './assets/cards/leezen-card-back.svg';
import LeezenCard_QrCode from './assets/cards/leezen-card-qrcode.svg';
import LeezenCard_QrCodeEn from './assets/cards/leezen-card-qrcode-en.svg';

import WorldCardFront from './assets/cards/world-card-front.svg';
import WorldCardBack from './assets/cards/world-card-back.svg';
import WorldCard_QrCode from './assets/cards/world-card-qrcode.svg';
import WorldCard_QrCodeEn from './assets/cards/world-card-qrcodeEn.svg';


type LanguageType = 'en' | 'zh';

export type CreditCardInfoType = {
	circulationAmount: number;
	accumulateAmount: number;
	descriptions: string[];
	src: string;
	srcBack: string
	code: string;
	codeEn: string;
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
		src: GreenCardFront,
		srcBack: GreenCardBack,
		code: GreenCard_QrCode,
		codeEn: GreenCard_QrCodeEn,
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
		src: TaoyuanCardFront,
		srcBack: TaoyuanCardBack,
		code: TaoyuanCard_QrCode,
		codeEn: TaoyuanCard_QrCodeEn,
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
		descriptions: ['yilan.card.detail.one', 'yilan.card.detail.two'],
		src: YilanCardFront,
		srcBack: YilanCardBack,
		code: YilanCard_QrCode,
		codeEn: YilanCard_QrCodeEn,
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
		descriptions: ['leezen.card.detail.one', 'leezen.card.detail.two'],
		src: LeezenCardFront,
		srcBack: LeezenCardBack,
		code: LeezenCard_QrCode,
		codeEn: LeezenCard_QrCodeEn,
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
		src: WorldCardFront,
		srcBack: WorldCardBack,
		code: WorldCard_QrCode,
		codeEn: WorldCard_QrCodeEn,
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