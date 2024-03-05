'use client';
import { Grid, Box, Typography, Paper } from '@mui/material';
import Image from 'next/image';
import { useCallback } from 'react';
import NavBar from '../_components/NavBar/NavBar';
import FadeIn from '@/app/_components/Transitions/FadeIn';
import ScrollBar, { useScrollBar } from '@/app/_components/ScrollBar';
import Stage4ScrollEN from '../_assets/stage4-scroll-en.svg';
import Stage4ScrollZH from '../_assets/stage4-scroll-zh.svg';
import { LANGUAGE_TYPE } from '@/types';
import { useTranslation } from '@/app/_locales/hooks/useTranslation';
import Stage4Page2MainEN from '../_assets/stage4-page2-main-en.svg';
import Stage4Page2MainZH from '../_assets/stage4-page2-main-zh.svg';
import Stage4Page2TitleEN from '../_assets/stage4-page2-title-en.svg';
import Stage4Page2TitleZH from '../_assets/stage4-page2-title-zh.svg';

export default function Page2() {
	const { value, handleChangeBarOfValue, containerRef } = useScrollBar({});
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
			pb="320px"
			height={2160}
			overflow="scroll"
			ref={containerRef}
			position="relative">
			<Box maxWidth="2592px">
				<FadeIn>
					<Box width="1840px" height="610px" position="relative" mb="60px" textAlign="left">
						<Image
							fill
							src={isEN ? Stage4Page2TitleEN : Stage4Page2TitleZH}
							alt="colorPicker_select_color"
						/>
					</Box>
				</FadeIn>

				<FadeIn delay={0.5}>
					<Box
						width="100%"
						height="100%"
						position="relative"
						display="flex"
						justifyContent="center"
						alignItems="center">
						<Image src={isEN ? Stage4Page2MainEN : Stage4Page2MainZH} alt="Stage4Page1Main" />
					</Box>
				</FadeIn>
			</Box>
			<NavBar dialogContent={MemorizedImage} />
			<Box position="fixed" right={163} top={378} height={600}>
				<ScrollBar value={value} onHandleScrollBar={handleChangeBarOfValue} />
			</Box>
		</Box>
	);
}
