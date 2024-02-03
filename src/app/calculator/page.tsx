'use client';

import React from 'react';
import { Box, Typography } from '@mui/material';
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Lottie from 'lottie-react';

import StyleButton from '@/app/_components/Button/Button';
import { useTranslation } from '@/app/_locales/hooks/useTranslation';
import I18nButton from '@/app/_components/I18nButton/I18nButton';
import Start from '@/app/_assets/images/start.svg';
import animationData from './assets/animation/leo_2-8_thinking.json';
import FadeIn from '../_components/Transitions/FadeIn';
import Homepage from '@/app/_assets/images/homepage-desc.svg'
import useStore from '../atoms/useStore';

const MainPage = () => {
	const router = useRouter();
	const { t } = useTranslation('common');
	const { language } = useStore();
	const isEn = language === 'en';

	function redirectToQuestionsPage() {
		router.push('/calculator/questions');
	}

	return (
		<Box display="flex" flexDirection="column" bgcolor="#FDFDFB" height="120vh"
		>
			<Lottie animationData={animationData} loop />
			<Box display="flex" justifyContent="center" mt={2.5}>
				<Box width="310px" display="flex" flexDirection="column" alignItems="center">
					<FadeIn marginBottom={50}>
						<Image src={Homepage} alt="calculator" />
							<Typography fontSize={isEn ? 14 : 16} letterSpacing={1} fontWeight={500} lineHeight={1.5} minHeight={63} textAlign={isEn ? 'center' : 'start'}>
								{t('homepage.desc')}
							</Typography>
					</FadeIn>
					<Box mb={7.5}>
						<FadeIn delay={0.5}>
							<StyleButton onClickHandler={redirectToQuestionsPage}>
								<Typography minHeight="42px" display="flex" alignItems="center"> 
									<Image src={Start} alt="start" />
								</Typography>
							</StyleButton>
						</FadeIn>
					</Box>
					<Box mb={4.5}>
						<FadeIn delay={1}>
							<I18nButton size="small" />
						</FadeIn>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default MainPage;