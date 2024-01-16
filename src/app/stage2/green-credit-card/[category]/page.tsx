'use client'

import React from 'react';
import { Box, Typography, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import Image from 'next/image';
import CountUp from 'react-countup';
import { useRouter } from 'next/navigation';

import ImageButton from '@/app/_components/ImageButton/ImageButton';
import FadeIn from '@/app/_components/Transitions/FadeIn';
import BackLeftButton from '@/assets/back_left.svg';
import BackLeftActiveButton from '@/assets/back_left_active.svg';
import { cardDetailWithType } from './spec';
import SymbolWithYears from './assets/symbol-years.svg';
import Card from './assets/life-card-detail.svg';


type PageProps = {
  params: {
    category: string;
  }
}

const Page = ({ params }: PageProps) => {
  const detail = cardDetailWithType[Number(params.category)];
  const router = useRouter();

  function renderCardDetail(description: string, index: number) {
    const isHeadRecord = index === 0;
    return (
      <FadeIn delay={(index + 1) * 0.3 + 0.5}>
        <ListItem sx={{ marginTop: isHeadRecord ? 0 : 20 }}>
          <ListItemIcon sx={{ marginRight: 10 }}>
            <Typography width={70} height={70} borderRadius={35} bgcolor="#BBC318" />
          </ListItemIcon>
          <ListItemText primaryTypographyProps={{ fontSize: 60, width: 1558, lineHeight: 2, letterSpacing: 8 }} primary={description} />
        </ListItem>
      </FadeIn>
    )
  }

  function backToPreviousPage() {
    router.back();
  }

  if (!detail) {
    return null;
  }

  return (
    <Box
      pt={16.25}
      // padding={[13.75, 29.75, 0, 28.628]}
      height="100%"
      display="flex"
      flexDirection="column"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
    >
      <Box>
        <Image src={Card} alt="life-card" />
      </Box>
      <Box height={624} width="100%" display="flex" mt={23}>
        <FadeIn delay={0.5} flex={1} display='flex'>
          <Box flex={1} textAlign="right" pr={16.25}>
            <Image src={SymbolWithYears} alt="years" />
          </Box>
          <Box flex={1}>
            <Box>
              <Box display="flex">
                <Typography fontWeight={700} fontSize={54}>流通卡數</Typography>
                <Typography fontSize={30}>(張)</Typography>
              </Box>
              <Typography fontSize={160} fontWeight={900} color="#BBC318">
                <CountUp start={0} end={270787} duration={3} />
              </Typography>
            </Box>
            <Box>
              <Typography fontSize={54} fontWeight={700}>累積提撥金額</Typography>
              <Typography fontSize={120} fontWeight={900} color="#BBC318">156,787,000</Typography>
            </Box>
          </Box>
        </FadeIn>
      </Box>
      <Box flex={1} pt={18.5}>
        <List>
          {detail.descriptions.map(renderCardDetail)}
        </List>
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
    </Box>
  )
}

export default Page