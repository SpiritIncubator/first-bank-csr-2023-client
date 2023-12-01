'use client';

import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image from 'next/image';

import Ratting from '@/app/_components/Ratting/Ratting';
import useStore from '@/app/atoms/useStore';
import AirHintIcon from '@/app/_assets/images/airHint.svg';
import SlashIcon from '@/app/_assets/images/slash.svg';
import UnitIcon from '@/app/_assets/images/unit.svg';

const ResultPage = () => {
  const questionAnswers = useStore(state => state.questionAnswer);

  const score = questionAnswers.reduce((acc, cur) => {
    return acc + cur.score;
  }, 0);

  return (
    <Box pt={4} px={3}>
      <Box display="flex" justifyContent="center" flexDirection="column">
        <Typography>
          碳足跡
        </Typography>
        <Box display="flex" width="100%" height={90} bgcolor="#958B73" borderRadius={5} border="5px solid #F2cD90" alignItems="center" pl={2}>
          <Box flex={1}>
            <Image src={AirHintIcon} alt="AirHintIcon" width={75} height={50} />
          </Box>
          <Box width={150} fontWeight={900} textAlign="right">
            <Typography fontSize={45} color="#fff" letterSpacing={10}>
              {Number(score).toFixed(1)}
            </Typography>
          </Box>
          <Box width={84} height="100%" position="relative">
            <Box height="100%" position="absolute" top={5} right={5}>
              <Image src={SlashIcon} alt='slash' />
            </Box>
            <Box position="absolute" height="100%" top={30} right={40}>
              <Image src={UnitIcon} alt="unit" />
            </Box>
          </Box>
        </Box>
        <Box display="flex" justifyContent="center" mt={1.2}>
          <Typography letterSpacing={1}>
            CO2排放量以kg計
          </Typography>
        </Box>
      </Box>
      <Ratting rate={3}  />
    </Box>
  )
}

export default ResultPage