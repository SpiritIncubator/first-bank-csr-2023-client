import { ReactNode } from 'react';
import Box from '@mui/material/Box';

type LayoutProps = {
  children: ReactNode;
}

const Layout = ({children}: LayoutProps) => {
  return (
    <Box width={2560} height={1440}>
      {children}
    </Box>
  )
}

export default Layout;