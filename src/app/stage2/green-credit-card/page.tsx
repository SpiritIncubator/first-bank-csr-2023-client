'use client'

import React, { useCallback, useEffect } from 'react';
import Image from 'next/image';
import { Box, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';

import FadeInVertical from '@/app/_components/Transitions/FadeInVertical';
import { IntroContainer } from './style';
import FadeIn from '@/app/_components/Transitions/FadeIn';
import FadeInHorizontal from '@/app/_components/Transitions/FadeInHorizontal';
import CardIntroIcon from '@/app/stage2/assets/card-intro.svg';
import GreenCardPageImg from '../assets/green-card-page.svg'
import cardLionIcon from '@/app/stage2/assets/card-lion.svg';
import BackLeftButton from '@/assets/back_left.svg';
import ClickLionImg from '@/app/stage2/assets/clicklion.svg';
import ClickLionEnImg from '@/app/stage2/assets/clicklionEn.svg';

import BackLeftActiveButton from '@/assets/back_left_active.svg';
import ImageButton from '@/app/_components/ImageButton/ImageButton';
import {useTranslation} from '@/app/_locales/hooks/useTranslation';
import ReleaseStatistic from './_components/ReleaseStatistics/ReleaseStatistic';
import DemoCard from './_components/DemoCard/DemoCard';
import useFirstBankTranslation from '@/app/_locales/hooks/useFirstBankTranslation';
import useMount from '@/app/hooks/useMount';

const mockData = new Array(5).fill(0);

const CardOverview = () => {
  const router = useRouter();
  const { t } = useTranslation('stage2');

  const { getLanguage } = useFirstBankTranslation();

  const { isMounted } = useMount();
  const [lang, setLang] = React.useState('en');
  const isEn = lang === 'en';

  useEffect(() => {
    if (isMounted) {
      const language = getLanguage();
      setLang(language);
    }
  });

  const redirectToDetail = useCallback((index: string) => () => {
    router.push(`/stage2/green-credit-card/${index}`);
  }, [router]);

  function renderDemoCard(_: any, index: number) {
    return (
      <FadeIn key={`demo-card-${index}`} delay={(index+1) * 0.3}>
        <DemoCard onRedirectToDetail={redirectToDetail(String(index + 1))} index={index} />
      </FadeIn>
    )
  }

  return (
    <IntroContainer>
      <Box padding="160px 160px 0px">
        <FadeInHorizontal direction="rtl">
          <Image src={GreenCardPageImg} alt="intro" />
        </FadeInHorizontal>
        <FadeInHorizontal direction="rtl">
          <Typography fontWeight={500} fontSize={52} mt={7.5} lineHeight={1.5} letterSpacing={1}>
            {t('green.creditCard.page')}
          </Typography>
        </FadeInHorizontal>
      </Box>
      <Box mt={23}>
        <FadeInHorizontal direction="rtl">
          <ReleaseStatistic />
        </FadeInHorizontal>
      </Box>
      <Box mt={25}>
        <Box display="flex" px={25} gap={12.5} flexWrap="wrap" justifyContent="center">
          {mockData.map(renderDemoCard)}
        </Box>
      </Box>
      <FadeInVertical direction='up' delay={1.2} position='absolute' bottom={0}>
        <Box position="absolute" bottom={-10} left={120} zIndex={999}>
          <Image src={cardLionIcon} alt="symbol-lion" />
        </Box>
        <Box position="absolute" left={850} bottom={180}>
          <Image src={isEn ? ClickLionEnImg :ClickLionImg} alt="click" />
        </Box>
      </FadeInVertical>

      <ImageButton
        onClick={() => router.back()}
        src={BackLeftButton}
        activeImageSrc={BackLeftActiveButton}
        width="143px"
        height="283px"
        position="absolute"
        left={0}
        top={1678}
      />
    </IntroContainer>
  )
}

export default CardOverview;