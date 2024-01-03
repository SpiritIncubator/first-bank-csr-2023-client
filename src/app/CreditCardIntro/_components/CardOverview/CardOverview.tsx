'use client'

import React, {useCallback} from 'react';
import Image from 'next/image';
import { Box, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';

import { IntroContainer } from './CardOverview.style';
import CardIntroIcon from '../../assets/cardIntro.svg';
import cardLionIcon from '../../assets/card-lion.svg';
import BackButton from '@/assets/back.svg';

import ReleaseStatistic from '../ReleaseStatistics/ReleaseStatistic';
import DemoCard from '../DemoCard/DemoCard';


const mockData = new Array(5).fill(0);

const CardOverview = () => {
  const router = useRouter();

  const redirectToDetail = useCallback((index: string) => () => {
    router.push(`/CreditCardIntro/${index}`);
  }, [router]);

  function renderDemoCard(_: any, index: number) {
    return <DemoCard onRedirectToDetail={redirectToDetail(String(index))} />
  }

  return (
    <IntroContainer>
      <Box padding="160px 160px 0px">
        <Image src={CardIntroIcon} alt="intro" />
        <Typography fontWeight={500} fontSize={52} mt={7.5} lineHeight={2} letterSpacing={1}>
          第一銀行持續透過依公益/綠色信用卡刷卡金額固定比率提撥之刷卡金推動環保及公益活動，並啟動「減碳標籤」認證專案。
        </Typography>
      </Box>
      <Box mt={23}>
        <ReleaseStatistic />
      </Box>
      <Box mt={29.25}>
        <Box display="flex" px={25} gap={12.5} flexWrap="wrap" justifyContent="center">
          {mockData.map(renderDemoCard)}
        </Box>
      </Box>
      <Box position="absolute" bottom={0} left={120}>
        <Image src={cardLionIcon} alt="symbol-lion" />
      </Box>
      <Box position="absolute" left={0} top="45%">
        <Image src={BackButton} alt="back-button" />
      </Box>
    </IntroContainer>
  )
}

export default CardOverview;