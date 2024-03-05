import { LinkType } from "./types";
import Stage4NavbarGreenBoundEN from '@/app/stage4/_components/NavBar/assets/stage4-navbar-green-bonds-en.svg'
import Stage4NavbarGreenBoundZH from '@/app/stage4/_components/NavBar/assets/stage4-navbar-green-bonds-zh.svg'
import Stage4NavbarGreenBoundZHActive from '@/app/stage4/_components/NavBar/assets/stage4-navbar-green-bonds-zh-active.svg'
import Stage4NavbarGreenBoundENActive from '@/app/stage4/_components/NavBar/assets/stage4-navbar-green-bonds-en-active.svg'

import Stage4NavbarGreenFinancingEN from '@/app/stage4/_components/NavBar/assets/stage4-navbar-green-financing-en.svg'
import Stage4NavbarGreenFinancingZH from '@/app/stage4/_components/NavBar/assets/stage4-navbar-green-financing-zh.svg'
import Stage4NavbarGreenFinancingZHActive from '@/app/stage4/_components/NavBar/assets/stage4-navbar-green-financing-zh-active.svg'
import Stage4NavbarGreenFinancingENActive from '@/app/stage4/_components/NavBar/assets/stage4-navbar-green-financing-en-active.svg'

import Stage4NavbarSixKeyENActive from '@/app/stage4/_components/NavBar/assets/stage4-navbar-sixkey-en-active.svg'
import Stage4NavbarSixKeyZHActive from '@/app/stage4/_components/NavBar/assets/stage4-navbar-sixkey-zh-active.svg'
import Stage4NavbarSixKeyEN from '@/app/stage4/_components/NavBar/assets/stage4-navbar-sixkey-en.svg'
import Stage4NavbarSixKeyZH from '@/app/stage4/_components/NavBar/assets/stage4-navbar-sixkey-zh.svg'

import Stage4NavbarSusFinancingEN from '@/app/stage4/_components/NavBar/assets/stage4-navbar-sustainable-perf-en.svg'
import Stage4NavbarSusFinancingZH from '@/app/stage4/_components/NavBar/assets/stage4-navbar-sustainable-perf-zh.svg'
import Stage4NavbarSusFinancingENActive from '@/app/stage4/_components/NavBar/assets/stage4-navbar-sustainable-perf-en-active.svg'
import Stage4NavbarSusFinancingZHActive from '@/app/stage4/_components/NavBar/assets/stage4-navbar-sustainable-perf-zh-active.svg'

export const navigationLinksConfigEN: Array<LinkType> = [
	{
		label: 'home',
		path: '/stage4',
	},
	{
		label: 'Green Financing',
		path: '/stage4/page1?disableDialogAnimation=true',
		buttonImage: Stage4NavbarGreenFinancingEN,
		buttonImageActive: Stage4NavbarGreenFinancingENActive,
	},
	{
		label: 'Six Key Principles',
		path: '/stage4/page2?disableDialogAnimation=true',
		buttonImage: Stage4NavbarSixKeyEN,
		buttonImageActive: Stage4NavbarSixKeyENActive,
	},
	{
		label: 'Sustainable Financing',
		path: '/stage4/page3?disableDialogAnimation=true',
		buttonImage: Stage4NavbarSusFinancingEN,
		buttonImageActive: Stage4NavbarSusFinancingENActive,
	},
	{
		label: 'Green Bonds',
		path: '/stage4/page4?disableDialogAnimation=true',
		buttonImage: Stage4NavbarGreenBoundEN,
		buttonImageActive: Stage4NavbarGreenBoundENActive,
	},
];




export const navigationLinksConfigZH: Array<LinkType> = [
	{
		label: 'home',
		path: '/stage4',
	},
	{
		label: 'Green Financing',
		path: '/stage4/page1?disableDialogAnimation=true',
		buttonImage: Stage4NavbarGreenFinancingZH,
		buttonImageActive: Stage4NavbarGreenFinancingZHActive,
	},
	{
		label: 'Six Key Principles',
		path: '/stage4/page2?disableDialogAnimation=true',
		buttonImage: Stage4NavbarSixKeyZH,
		buttonImageActive: Stage4NavbarSixKeyZHActive,
	},
	{
		label: 'Sustainable Financing',
		path: '/stage4/page3?disableDialogAnimation=true',
		buttonImage: Stage4NavbarSusFinancingZH,
		buttonImageActive: Stage4NavbarSusFinancingZHActive,
	},
	{
		label: 'Green Bonds',
		path: '/stage4/page4?disableDialogAnimation=true',
		buttonImage: Stage4NavbarGreenBoundZH,
		buttonImageActive: Stage4NavbarGreenBoundZHActive,
	},
];