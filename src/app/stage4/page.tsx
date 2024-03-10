'use client';
import { Box, Typography, Paper, Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import colors from '@/constants/colors';
import { LANGUAGE_TYPE } from '@/types';
import LionImage from '@/app/stage4/_assets/stage4-lion.svg';
import BirdImage from '@/app/stage4/_assets/stage4-bird.svg';
import Image from 'next/image';
import TITLE_IMAGE from './_assets/stage4-home-title.svg';
import PAGE1_IMAGE_EN from './_assets/stage4-thumbnail-page1-en.svg';
import PAGE1_IMAGE_ZH from './_assets/stage4-thumbnail-page1-zh.svg';
import PAGE2_IMAGE_EN from './_assets/stage4-thumbnail-page2-en.svg';
import PAGE2_IMAGE_ZH from './_assets/stage4-thumbnail-page2-zh.svg';
import PAGE3_IMAGE_EN from './_assets/stage4-thumbnail-page3-en.svg';
import PAGE3_IMAGE_ZH from './_assets/stage4-thumbnail-page3-zh.svg';
import PAGE4_IMAGE_EN from './_assets/stage4-thumbnail-page4-en.svg';
import PAGE4_IMAGE_ZH from './_assets/stage4-thumbnail-page4-zh.svg';
import Leo2_7 from '@/lottieAnimations/leo_2-7.json';
import Lottie from 'lottie-react';

import DialogEN from './_assets/stage4-lion-seeMore-en.svg';
import DialogZH from './_assets/stage4-lion-seeMore-zh.svg';

import FadeIn from '@/app/_components/Transitions/FadeIn';
import I18nButton from '@/app/_components/I18nButton/I18nButton';
import { useTranslation } from 'react-i18next';

const PAGE_DATA_EN = [
	{
		imageUrl: PAGE1_IMAGE_EN,
		link: '/stage4/page1',
	},
	{
		imageUrl: PAGE2_IMAGE_EN,
		link: '/stage4/page2',
	},
	{
		imageUrl: PAGE3_IMAGE_EN,
		link: '/stage4/page3',
	},
	{
		imageUrl: PAGE4_IMAGE_EN,
		link: '/stage4/page4',
	},
];

const PAGE_DATA_ZH = [
	{
		imageUrl: PAGE1_IMAGE_ZH,
		link: '/stage4/page1',
	},
	{
		imageUrl: PAGE2_IMAGE_ZH,
		link: '/stage4/page2',
	},
	{
		imageUrl: PAGE3_IMAGE_ZH,
		link: '/stage4/page3',
	},
	{
		imageUrl: PAGE4_IMAGE_ZH,
		link: '/stage4/page4',
	},
];
export default function Stage4() {
	const { t, i18n } = useTranslation('stage4');
	console.log('i18n :');
	const isEN = i18n.language === LANGUAGE_TYPE.EN;

	const PAGE_DATA = isEN ? PAGE_DATA_EN : PAGE_DATA_ZH;
	return (
		<Box py="150px" px="230px" bgcolor={colors.ivory}>
			<FadeIn>
				<Box mb="87px">
					<Image src={TITLE_IMAGE} alt="title" width="1333" height="283" />
				</Box>

				<Box
					mb="130px"
					width={isEN ? '2034px' : '1840px'}
					sx={
						isEN
							? {
									fontSize: '40px',
									fontWeight: 500,
									lineHeight: '64px',
									letterSpacing: '0.04em',
							  }
							: {
									fontSize: '52px',
									fontWeight: 500,
									letterSpacing: '0.08em',
									textAlign: 'left',
									lineHeight: '99px',
							  }
					}>
					{t('greenLoanDescription')}
				</Box>
			</FadeIn>

			<Grid container spacing="120px" sx={{ width: '100%', maxWidth: '2536px', p: 2 }}>
				{PAGE_DATA.map((pageData, index) => {
					const { imageUrl, link } = pageData;
					return (
						<Grid
							key={index}
							item
							xs={12}
							sm={3}
							display="flex"
							flexDirection="column"
							justifyContent="center"
							alignItems="center">
							<FadeIn delay={0.3 + index * 0.2}>
								<Link href={link}>
									<Box display="flex" justifyContent="center" width="100%" mb="40px">
										<Image src={imageUrl} width="500" height="847" alt="page image" />
									</Box>
								</Link>
							</FadeIn>
						</Grid>
					);
				})}
			</Grid>
			<FadeIn
				position="absolute"
				right={100}
				bottom="0px"
				overflow="hidden"
				width="1320px"
				height="1650px">
				{/* <Image src={LionImage} alt="Lion" width={880} height={1100} priority /> */}
				<Box
					position="absolute"
					top="50%"
					left="50%"
					sx={{
						transform: 'translate(-40%, -33%) scale(1.65)',
						overflow: 'hidden',
					}}>
					<Lottie animationData={Leo2_7} style={{ width: 1320, height: 1650 }} />
				</Box>
			</FadeIn>
			<FadeIn position="absolute" top={230} right={894} transform="rotate(-10deg)">
				<Image src={BirdImage} alt="Bird" width={377} height={308} priority />
			</FadeIn>
			<FadeIn position="absolute" top={664} right={300}>
				<Image src={isEN ? DialogEN : DialogZH} alt="Bird" width={660} height={440} priority />
			</FadeIn>
			<FadeIn position="fixed" right="200px" top="180px">
				<I18nButton size="large" />
			</FadeIn>
		</Box>
	);
}
