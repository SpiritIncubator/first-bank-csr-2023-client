'use client';
import { Box, Typography, Paper, Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { LANGUAGE_TYPE } from '@/types';
import LionImage from '@/app/stage4/_assets/stage4-lion.svg';
import BirdImage from '@/app/stage4/_assets/stage4-bird.svg';
import Image from 'next/image';
import TITLE_IMAGE from './_assets/stage4-home-title.svg';
import PAGE1_IMAGE from './_assets/stage4-page1.svg';
import PAGE2_IMAGE from './_assets/stage4-page2.svg';
import PAGE3_IMAGE from './_assets/stage4-page3.svg';
import PAGE4_IMAGE from './_assets/stage4-page4.svg';
import DialogImg from './_assets/stage4-dialog.svg';
import FadeIn from '@/app/_components/Transitions/FadeIn';
import I18nButton from '@/app/_components/I18nButton/I18nButton';
import { useTranslation } from 'react-i18next';
import useFirstBankTranslation from '@/app/_locales/hooks/useFirstBankTranslation';

const PAGE_DATA = [
	{
		title: 'title_page1',
		imageUrl: PAGE1_IMAGE,
		description: `支持能源技術服務產業簡稱發展，節電、節水。`,
		link: '/stage4/page1',
	},
	{
		title: 'title_page2',
		imageUrl: PAGE2_IMAGE,
		description: `支持能源技術服務產業簡稱發展，節電、節水。`,
		link: '/stage4/page2',
	},
	{
		title: 'title_page3',
		imageUrl: PAGE3_IMAGE,
		description: `支持能源技術服務產業簡稱發展，節電、節水。`,
		link: '/stage4/page3',
	},
	{
		title: 'title_page4',
		imageUrl: PAGE4_IMAGE,
		description: `支持能源技術服務產業簡稱發展，節電、節水。`,
		link: '/stage4/page4',
	},
];

export default function Stage4() {
	const { t, i18n } = useTranslation('stage4');
	console.log('i18n :');
	const isEN = i18n.language === LANGUAGE_TYPE.EN;

	return (
		<Box py="150px" px="230px">
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
					const { title, description, imageUrl, link } = pageData;
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
										<Image src={imageUrl} width="420" height="420" alt="page image" />
									</Box>
									<Paper
										elevation={0}
										sx={{
											bgcolor: 'darkgrey',
											width: '500px',
											height: '160px',
											padding: '20px',
											mb: '40px',
										}}>
										<Typography variant="body1" color="white">
											{title}
										</Typography>
									</Paper>
									<Box
										sx={{
											color: 'var(--brown4, #594A39)',
											width: '500px',
											fontSize: '46px',
											fontStyle: 'normal',
											fontWeight: 500,
											lineHeight: '160%',
											letterSpacing: '3.68px',
										}}>
										{description}
									</Box>
								</Link>
							</FadeIn>
						</Grid>
					);
				})}
			</Grid>
			<FadeIn position="absolute" right={100} bottom="-50px">
				<Image src={LionImage} alt="Lion" width={880} height={1100} />
			</FadeIn>
			<FadeIn position="absolute" top={230} right={894} transform='rotate(-10deg)' >
				<Image src={BirdImage} alt="Bird" width={377} height={308} />
			</FadeIn>
			<FadeIn position="absolute" top={664} right={300}>
				<Image src={DialogImg} alt="Bird" width={660} height={440} />
			</FadeIn>
			<FadeIn position="fixed" right="200px" top="180px">
				<I18nButton size="large" />
			</FadeIn>
		</Box>
	);
}
