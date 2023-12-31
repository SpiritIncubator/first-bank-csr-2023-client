import React from 'react'
import { Box } from '@mui/material';
import Image from 'next/image';

import CreditCardIcon from '@/app/product-intro/assets/creditCard.svg';

type DemoCardProps = {
  onRedirectToDetail: () => void;
}

const DemoCard = ({ onRedirectToDetail }: DemoCardProps ) => {
  return (
    <Box width={520} height={640} textAlign="center" onClick={onRedirectToDetail}>
        <Image src={CreditCardIcon} alt="credit-card" />
      </Box>
  )
}

export default DemoCard