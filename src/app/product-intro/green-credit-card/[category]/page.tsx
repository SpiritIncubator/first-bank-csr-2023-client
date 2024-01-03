'use client'

import React from 'react';
import { Box, Typography, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import Image from 'next/image';
import CountUp from 'react-countup';
import { useRouter } from 'next/navigation';

import { cardDetailWithType } from './spec';
import SymbolWithYears from './assets/symbol-years.svg';
import BackIcon from '@/assets/back.svg';
import { BackButtonWrap } from './style';

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
      <ListItem sx={{ marginTop: isHeadRecord ? 0 : 20}}>
        <ListItemIcon sx={{ marginRight: 10 }}>
          <Typography width={70} height={70} borderRadius={35} bgcolor="#BBC318" />
        </ListItemIcon>
        <ListItemText primaryTypographyProps={{ fontSize: 60, width: 1558, lineHeight: 2, letterSpacing: 8 }} primary={description} />
      </ListItem>
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
      padding={[13.75, 29.75, 54.75, 28.628]}
      height="100%"
      display="flex"
      flexDirection="column"
      alignItems="center"
      position="relative"
    >
      <Box flex={1}></Box>
      <Box height={624} width="100%" display="flex">
        <Box flex={1} display="flex" gap={16.25}>
          <Box flex={1} textAlign="right">
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
        </Box>
      </Box>
      <Box flex={1} pt={18.5}>
        <List>
          {detail.descriptions.map(renderCardDetail)}
        </List>
      </Box>
      <BackButtonWrap onClick={backToPreviousPage}>
        <Image src={BackIcon} alt="back" />
      </BackButtonWrap>
    </Box>
  )
}

export default Page