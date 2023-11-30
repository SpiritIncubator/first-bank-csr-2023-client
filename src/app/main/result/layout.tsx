import { Suspense, ReactNode} from 'react';
import Box from '@mui/material/Box';

import Loading from './loading';

type ResultLayoutProps = {
  children: ReactNode
}

export default function ResultLayout({ children }: ResultLayoutProps) {
  return (
    <Box>
      <Suspense fallback={<Loading />}>
        {children}
      </Suspense>
    </Box>
  )
}