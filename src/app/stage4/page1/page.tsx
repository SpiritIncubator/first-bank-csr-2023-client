'use client';

import { Box, Typography, Paper, Grid } from '@mui/material';
import Image from 'next/image';
import { useCallback } from 'react';

import FadeIn from '@/app/_components/Transitions/FadeIn';
import FadeInOnView from '@/app/_components/Transitions/FadeInOnView';
import ScrollBar, { useScrollBar } from '@/app/_components/ScrollBar';
import NavBar from '../_components/NavBar/NavBar';
import { useTranslation } from '@/app/_locales/hooks/useTranslation';
import { LANGUAGE_TYPE } from '@/types';
import Stage4Page1MainEN from '../_assets/stage4-page1-main-en.svg';
import Stage4Page1MainZH from '../_assets/stage4-page1-main-zh.svg';
import Stage4Page1TitleEN from '../_assets/stage4-page1-title-en.svg';
import Stage4Page1TitleZH from '../_assets/stage4-page1-title-zh.svg';
import Stage4ScrollEN from '../_assets/stage4-scroll-en.svg';
import Stage4ScrollZH from '../_assets/stage4-scroll-zh.svg';

//EsgConsumerLoans
export default function Page1() {
	const { i18n } = useTranslation();
	const isEN = i18n.language === LANGUAGE_TYPE.EN;
	const { value, handleChangeBarOfValue, containerRef } = useScrollBar({});

	const MemorizedImage = useCallback(() => {
		return <Image src={isEN ? Stage4ScrollEN : Stage4ScrollZH} alt="dialog" />;
	}, [isEN]);

	return (
		<Box
			px="210px"
			py="150px"
			pt="150px"
			pb="320px"
			mr="auto"
			mb="320px"
			position="relative"
			ref={containerRef}
			height={2160}
			overflow="scroll">
			<Box maxWidth="2404px">
				<FadeIn>
					<Box width="1970px" height="349px" position="relative" mb="120px" textAlign="left">
						<Image
							fill
							src={isEN ? Stage4Page1TitleEN : Stage4Page1TitleZH}
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
						<Image src={isEN ? Stage4Page1MainEN : Stage4Page1MainZH} alt="Stage4Page1Main" />
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
