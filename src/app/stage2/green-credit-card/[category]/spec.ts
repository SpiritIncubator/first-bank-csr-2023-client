import GreenReleaseDate from './assets/green-release-date.svg';
import TaoyuanReleaseDate from './assets/taoyuan-release-date.svg';
import YilanReleaseDate from './assets/yilan-release-date.svg';
import LeezenReleaseDate from './assets/leezen-release-date.svg';
import LastReleaseDate from './assets/world-release-date.svg';

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


type LanguageType = 'en' | 'zh';

type CreditCardInfoType = {
	circulationAmount: number;
	accumulateAmount: number;
	descriptions: string[];
	src: string;
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
		imgSrc: {
			en: {
				titleImg: '',
				releaseDateImg: '',
				cardNameImg: '',
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
		imgSrc: {
			en: {
				titleImg: '',
				releaseDateImg: '',
				cardNameImg: '',
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
		imgSrc: {
			en: {
				titleImg: '',
				releaseDateImg: '',
				cardNameImg: '',
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
		src: GreenCardSample,
		imgSrc: {
			en: {
				titleImg: '',
				releaseDateImg: '',
				cardNameImg: '',
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
		imgSrc: {
			en: {
				titleImg: '',
				releaseDateImg: '',
				cardNameImg: '',
			},
			zh: {
				titleImg: WorldCardTitle,
				releaseDateImg: LastReleaseDate,
				cardNameImg: WorldCard,
			},
		},
	},
];