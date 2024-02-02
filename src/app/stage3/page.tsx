'use client';

import React from 'react';
import Box from '@mui/material/Box';
import Lottie from 'lottie-react';

import backgroundAnimation from './animationData/full_3-2_start.json';

const page = () => {
  return (
    <Box width="100%" height="100%">
      <Lottie animationData={backgroundAnimation} loop />
    </Box>
  )
}

export default page