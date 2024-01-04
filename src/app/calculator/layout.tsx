import React, { ReactNode } from 'react'
import Box from '@mui/material/Box';

type LayoutProps = {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box margin="0 auto" maxWidth={500} height="100%">
      {children}
    </Box>
  )
}

export default Layout