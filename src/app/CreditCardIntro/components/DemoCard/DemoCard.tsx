import React from 'react'
import { Box } from '@mui/material';
import Image from 'next/image';

import CreditCardIcon from '../../assets/creditCard.svg';

const DemoCard = () => {
  return (
    <Box display="flex" px={25} gap={12.5} flexWrap="wrap" justifyContent="center">
      <Box width={520} height={640} textAlign="center">
        <Image src={CreditCardIcon} alt="credit-card" />
      </Box>
      <Box width={520} height={640} textAlign="center">
        <Image src={CreditCardIcon} alt="credit-card" />
      </Box>
      <Box width={520} height={640} textAlign="center">
        <Image src={CreditCardIcon} alt="credit-card" />
      </Box>
      <Box width={520} height={640} textAlign="center">
        <Image src={CreditCardIcon} alt="credit-card" />
      </Box>
      <Box width={520} height={640} textAlign="center">
        <Image src={CreditCardIcon} alt="credit-card" />
      </Box>
    </Box>
  )
}

export default DemoCard