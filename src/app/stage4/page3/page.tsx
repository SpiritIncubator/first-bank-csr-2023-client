'use client';

import React, { useCallback } from 'react';
import Box from '@mui/material/Box';
import Image from 'next/image';

import ScrollBar, { useScrollBar } from '@/app/_components/ScrollBar';

import DialogImg from '../_assets/stage4-dialog.svg';
import { LANGUAGE_TYPE } from '@/types';
import NavBar from '../_components/NavBar/NavBar';
import FadeIn from '@/app/_components/Transitions/FadeIn';
import { useTranslation } from '@/app/_locales/hooks/useTranslation';
import Stage4Page3TitleEN from '../_assets/stage4-page3-title-en.svg';
import Stage4Page3TitleZH from '../_assets/stage4-page3-title-zh.svg';
import Stage4Page3MainEN from '../_assets/stage4-page3-main-en.svg';
import Stage4Page3MainZH from '../_assets/stage4-page3-main-zh.svg';
import Stage4ScrollEN from '../_assets/stage4-scroll-en.svg';
import Stage4ScrollZH from '../_assets/stage4-scroll-zh.svg';

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
			pt="150px"
			mr="auto"
			pb="320px"
			position="relative"
			ref={containerRef}
			height={2160}
			overflow="auto">
			<Box maxWidth="2404px">
				<Box>
					<Box position="relative">
						<Box>
							<Image src={isEN ? Stage4Page3TitleEN : Stage4Page3TitleZH} alt="title" />
						</Box>
						<FadeIn delay={0.3}>
							<Box width={2404} height={1200} mt={15}>
								<Image src={isEN ? Stage4Page3MainEN : Stage4Page3MainZH} alt="title" />
							</Box>
						</FadeIn>
					</Box>
					<Box position="fixed" top={200} right={183} height={600}>
						<ScrollBar value={value} onHandleScrollBar={handleChangeBarOfValue} />
					</Box>
					<NavBar dialogContent={MemorizedImage} />
				</Box>
			</Box>
		</Box>
	);
};

export default Page;
