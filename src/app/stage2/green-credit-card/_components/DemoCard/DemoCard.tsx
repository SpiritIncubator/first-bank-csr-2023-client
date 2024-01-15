import React from 'react'
import { Box } from '@mui/material';
import Image from 'next/image';

import CreditCardIcon from '@/app/stage2/assets/creditCard.svg';
import LeeCard from '@/app/stage2/assets/lee-card.svg';
import YIlanCard from '@/app/stage2/assets/yilan-card.svg';
import TyCard from '@/app/stage2/assets/ty-card.svg';
import WorldCard from '@/app/stage2/assets/world-card.svg';


type DemoCardProps = {
  index: number;
  onRedirectToDetail: () => void;
}

const dataMapping = [
  {
    img: CreditCardIcon
  },
  {
    img: LeeCard
  },
  {
    img: YIlanCard
  },
  {
    img: TyCard
  },
  {
    img: WorldCard
  }
]

const DemoCard = ({ onRedirectToDetail, index }: DemoCardProps) => {
  const img = dataMapping[index].img;

  return (
    <Box width={520} height={640} textAlign="center" onClick={onRedirectToDetail}>
      <Image src={img} alt="credit-card" />
    </Box>
  )
}

export default DemoCard