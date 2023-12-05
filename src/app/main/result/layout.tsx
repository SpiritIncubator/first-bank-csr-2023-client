'use client';

import { Suspense, ReactNode, useState, useEffect } from 'react';
import Box from '@mui/material/Box';

import Loading from './loading';

type ResultLayoutProps = {
  children: ReactNode
}

const DELAY_LOADING_TIME = 2000;

export default function ResultLayout({ children }: ResultLayoutProps) {
  const [delayLoading, setDelayLoading] = useState(true);

  useEffect(() => {
    
  }, []);

  return (
    <Box>
      <Suspense fallback={<Loading />}>
        {children}
      </Suspense>
    </Box>
  )
}