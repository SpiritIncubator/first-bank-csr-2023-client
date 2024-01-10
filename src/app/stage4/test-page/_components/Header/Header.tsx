import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image from 'next/image';

import HeadImg from '../../assets/header-title.svg';

type HeaderProps = {
  subTitle: string;
}

const Header = ({subTitle}: HeaderProps) => {
  return (
    <Box>
      <Image src={HeadImg} alt="header" />
      <Typography maxWidth={1840} fontSize={52} fontWeight={500} letterSpacing={4} lineHeight={2}>
        {subTitle}
      </Typography>
    </Box>
  )
}

export default Header