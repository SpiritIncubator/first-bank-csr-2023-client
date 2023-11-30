'use client';

import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import useStore from '@/app/atoms/useStore'

const ResultPage = () => {
  const questionAnswers = useStore(state => state.questionAnswer);

  console.log(questionAnswers, 'questionAnswers')

  return (
    <Box pt={4} px={3}>
      <Box display="flex" justifyContent="center" flexDirection="column">
        <Typography>
          碳足跡
        </Typography>
        <Box display="flex" width="100%" height={90} bgcolor="#958B73" borderRadius={5} border="5px solid #F2cD90">
          <Box flex={1}></Box>
          <Box width={150}>

          </Box>
          <Box flex={1}></Box>
        </Box>
      </Box>
    </Box>
  )
}

export default ResultPage