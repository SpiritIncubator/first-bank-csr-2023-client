import React, { ReactNode } from 'react'
import Box from '@mui/material/Box';

type LayoutProps = {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box bgcolor="rgba(253, 253, 251, 1)">
      {children}
    </Box>
  )
}

export default Layout