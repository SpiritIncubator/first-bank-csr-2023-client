import React, { ReactNode } from 'react'
import Box from '@mui/material/Box';

type LayoutProps = {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box bgcolor="#FDFDFB">
      {children}
    </Box>
  )
}

export default Layout