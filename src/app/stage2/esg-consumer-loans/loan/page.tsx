'use client'
import { useRouter } from 'next/navigation';
import BackRightButton from '@/assets/back_right.svg';
import BackRightActiveButton from '@/assets/back_right_active.svg';
import ImageButton from '@/app/_components/ImageButton/ImageButton';
import React from 'react';
import Image from 'next/image';
import { LANGUAGE_TYPE } from '@/types';
import { useTranslation } from '@/app/_locales/hooks/useTranslation';
import {
  Box,
  Container,
} from '@mui/material';
import BulletPointList from '@/components/LoanBulletPointList';
import FadeInHorizontal from '@/app/_components/Transitions/FadeInHorizontal';
import FadeIn from '@/app/_components/Transitions/FadeIn';
import useFirstBankTranslation from '@/app/_locales/hooks/useFirstBankTranslation';




const PageLayout: React.FC = () => {
  const { t } = useTranslation('stage2');
  const { lang } = useFirstBankTranslation();
  const isEN = lang === LANGUAGE_TYPE.EN;

  console.log('isEN :', isEN);
  const router = useRouter();


  const descriptionStyle = isEN ? {
    mb: '70px',
    fontSize: "40px",
    fontWeight: 500,
    lineHeight: "64px",
    letterSpacing: "1.6px",
    maxWidth: "1514px",
  } : {
    fontSize: "52px",
    lineHeight: "98.8px",
    mb: "60px",
    maxWidth: "1514px",
    letterSpacing: "4.16px"
  }

  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{
        width: '2160px',
        height: '3840px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        p: '260px 230px',
        bgcolor: 'background.paper',
      }}
    >
      <FadeInHorizontal direction="ltr"
        flexDirection='column'
        display='flex'
        alignItems="center" >

        <Box width="500px" height="500px" position="relative" mb="80px">
          <Image
            fill
            src="/assets/stage2/greenConsumerLoan-Badges.svg"
            alt="greenConsumerLoan-Badges"
          />
        </Box>

        <Box
          display="flex"
          mb="60px"
          width="929px" height="114px" position="relative"
        >
          <Image
            fill
            src={`/assets/stage2/greenConsumerLoan-title-${lang}.svg`}
            alt="greenConsumerLoan"
          />
        </Box>

        <Box
          sx={descriptionStyle}>
          {t('loan.desc')}
        </Box>

      </FadeInHorizontal>
      <Box sx={{
        width: '100%',
        mb: '100px',
      }}>
        <FadeIn delay={0.5} width="100%"  >
          <Box
            display="flex"
            width='100%'
            height='900px'
            position="relative"
          >
            <Image
              fill
              src={`/assets/stage2/greenConsumerLoan-chart-${lang}.svg`}
              alt="greenConsumerLoan-chart"
            />
          </Box>
        </FadeIn>
      </Box>
      <FadeIn delay={0.7}>
        <BulletPointList />
      </FadeIn>
      <ImageButton
        onClick={() => router.back()}
        src={BackRightButton}
        activeImageSrc={BackRightActiveButton}
        position="fixed"
        right="0"
        width="143px"
        height="283px"
        top="45%"
      />

    </Container>
  );
};

export default PageLayout;
