'use client'

import React from 'react'
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import CountUp from 'react-countup';

import IntroBirdIcon from '@/app/stage2/assets/introBird.svg'
import CalculateMoney from '@/app/stage2/assets/calculateMoney.svg';
import CalculateMoneyEn from '@/app/stage2/assets/calculateMoneyEn.svg'
import NumberOfCardImg from '@/app/stage2/assets/numberOfCard.svg';
import NumberOfCardEnImg from '@/app/stage2/assets/numberOfCardEn.svg'
import useStore from '@/app/atoms/useStore';

const ReleaseStatistic = () => {
  const { language } = useStore();
  const isEn = language === 'en';

  return (
    <Box display="flex" flexDirection="column">
      <Box display="flex" pl={28} pr={26} alignItems="center">
        <Box width={411}>
          <Image src={isEn ? NumberOfCardEnImg : NumberOfCardImg} alt="number-of-card" />
        </Box>
        <Box width={743} pl={5}>
          <CountUp style={{ letterSpacing: 15, color: 'rgba(184, 195, 24, 1)', fontSize: 170, fontWeight: 900 }} start={0} end={270787} duration={3} />
        </Box>
        <Box flex={1} ml={18}>
          <Image src={IntroBirdIcon} alt="symbol-bird" />
        </Box>
      </Box>
      <Box mt={15} textAlign="center">
        <Image src={isEn ? CalculateMoneyEn : CalculateMoney} alt="money" />
      </Box>
    </Box>
  )
}

export default ReleaseStatistic