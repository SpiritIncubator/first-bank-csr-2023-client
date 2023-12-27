import React from 'react'
import { Box, Typography } from '@mui/material';
import Image from 'next/image';

import IntroBirdIcon from '../../assets/introBird.svg';
import CalculateMoney from '../../assets/calculateMoney.svg';

const ReleaseStatistic = () => {
  return (
    <Box display="flex" flexDirection="column">
      <Box display="flex" pl={28} pr={26}>
        <Box width={411}>
          <Typography fontWeight={700} fontSize={140} letterSpacing={8}>2022</Typography>
          <Box display="flex" position="relative">
            <Typography fontSize={70} fontWeight={700} letterSpacing={14}>流通卡款</Typography>
            <Typography position="absolute" right={10} bottom={10} fontSize={40}>(張)</Typography>
          </Box>
        </Box>
        <Box width={743} display="flex" alignItems="center" justifyContent="center">
          <Typography fontWeight={900} fontSize={170}>270,787</Typography>
        </Box>
        <Box flex={1} ml={18}>
          <Image src={IntroBirdIcon} alt="symbol-bird" />
        </Box>
      </Box>
      <Box mt={15} textAlign="center">
        <Image src={CalculateMoney} alt="money" />
      </Box>
    </Box>
  )
}

export default ReleaseStatistic