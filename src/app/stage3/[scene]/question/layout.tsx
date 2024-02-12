import { ReactNode } from 'react';
import Box from '@mui/material/Box';

type LayoutProps = {
  children: ReactNode;
}

const Layout = ({children}: LayoutProps) => {
  return (
    <Box maxWidth={2560} maxHeight={1440} overflow="hidden">
      {children}
    </Box>
  )
}

export default Layout;