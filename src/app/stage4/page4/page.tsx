'use client';

import React, { useCallback } from 'react';
import Box from '@mui/material/Box';
import Image from 'next/image';

import ScrollBar, { useScrollBar } from '@/app/_components/ScrollBar';

import { LANGUAGE_TYPE } from '@/types';
import colors from '@/constants/colors';
import NavBar from '../_components/NavBar/NavBar';
import FadeIn from '@/app/_components/Transitions/FadeIn';
import Stage4ScrollEN from '../_assets/stage4-scroll-en.svg';
import Stage4ScrollZH from '../_assets/stage4-scroll-zh.svg';
import { useTranslation } from '@/app/_locales/hooks/useTranslation';

import Stage4Page4TitleEN from '../_assets/stage4-page4-title-en.svg';
import Stage4Page4TitleZH from '../_assets/stage4-page4-title-zh.svg';
import Stage4Page4MainEN from '../_assets/stage4-page4-main-en.svg';
import Stage4Page4MainZH from '../_assets/stage4-page4-main-zh.svg';

const subtitle =
	'第一銀行逐年持續提升對綠色債券的投資比重，以行動支持被投資企業落實低碳經濟及減碳計畫，發行綠色/可持續發展債券，並取得第三方驗證。';

const Page = () => {
	const { containerRef, value, handleChangeBarOfValue } = useScrollBar({ loaded: true });

	const { i18n } = useTranslation();
	const isEN = i18n.language === LANGUAGE_TYPE.EN;

	const MemorizedImage = useCallback(() => {
		return <Image src={isEN ? Stage4ScrollEN : Stage4ScrollZH} alt="dialog" />;
	}, [isEN]);

	return (
		<Box
			px="210px"
			py="151px"
			mr="auto"
			pb="200px"
			position="relative"
			ref={containerRef}
			height={2160}
			overflow="auto">
			<Box maxWidth="2404px">
				<FadeIn>
					<Box>
						<Image src={isEN ? Stage4Page4TitleEN : Stage4Page4TitleZH} alt="title" />
					</Box>
				</FadeIn>
				<FadeIn delay={0.3}>
					<Box width={2404} minHeight={1200} mt={15} paddingBottom="380px">
						<Image src={isEN ? Stage4Page4MainEN : Stage4Page4MainZH} alt="title" />
					</Box>
				</FadeIn>

				<Box position="fixed" top={378} right={163} height={600} zIndex={1}>
					<ScrollBar value={value} onHandleScrollBar={handleChangeBarOfValue} />
				</Box>
			</Box>
			<NavBar dialogContent={MemorizedImage} />
		</Box>
	);
};

export default Page;
