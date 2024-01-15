'use client'

import React, { useCallback } from 'react';
import Image from 'next/image';
import { Box, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';

import { IntroContainer } from './style';
import FadeIn from '@/app/_components/Transitions/FadeIn';
import FadeInHorizontal from '@/app/_components/Transitions/FadeInHorizontal';
import CardIntroIcon from '@/app/stage2/assets/card-intro.svg';
import cardLionIcon from '@/app/stage2/assets/card-lion.svg';
import BackLeftButton from '@/assets/back_left.svg';
import BackLeftActiveButton from '@/assets/back_left_active.svg';
import ImageButton from '@/app/_components/ImageButton/ImageButton';
import ReleaseStatistic from './_components/ReleaseStatistics/ReleaseStatistic';
import DemoCard from './_components/DemoCard/DemoCard';


const mockData = new Array(5).fill(0);

const CardOverview = () => {
  const router = useRouter();

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
          <Image src={CardIntroIcon} alt="intro" />
        </FadeInHorizontal>
        <FadeInHorizontal direction="rtl">          
          <Typography fontWeight={500} fontSize={52} mt={7.5} lineHeight={2} letterSpacing={1}>
            第一銀行持續透過依公益/綠色信用卡刷卡金額固定比率提撥之刷卡金推動環保及公益活動，並啟動「減碳標籤」認證專案。
          </Typography>
        </FadeInHorizontal>
      </Box>
      <Box mt={23}>
        <FadeInHorizontal direction="rtl">
          <ReleaseStatistic />
        </FadeInHorizontal>
      </Box>
      <Box mt={29.25}>
        <Box display="flex" px={25} gap={12.5} flexWrap="wrap" justifyContent="center">
          {mockData.map(renderDemoCard)}
        </Box>
      </Box>
      <Box position="absolute" bottom={0} left={120}>
        <Image src={cardLionIcon} alt="symbol-lion" />
      </Box>

      <ImageButton
        onClick={() => router.back()}
        src={BackLeftButton}
        activeImageSrc={BackLeftActiveButton}
        width="143px"
        height="283px"
        position="absolute"
        left={0}
        top="45%"
      />
    </IntroContainer>
  )
}

export default CardOverview;