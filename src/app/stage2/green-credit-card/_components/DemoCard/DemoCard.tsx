import React from 'react'
import { Box } from '@mui/material';
import Image from 'next/image';

import GreenCard from '@/app/stage2/assets/green-card-new.svg';
import TaoyuanCard from '@/app/stage2/assets/taoyuan-card-new.svg';
import YilanCard from '@/app/stage2/assets/yilan-card-new.svg';
import LeezenCard from '@/app/stage2/assets/leezen-card-new.svg';
import WorldCard from '@/app/stage2/assets/world-card-new.svg';


type DemoCardProps = {
  index: number;
  onRedirectToDetail: () => void;
}

const dataMapping = [
  {
    img: GreenCard
  },
  {
    img: TaoyuanCard
  },
  {
    img: YilanCard
  },
  {
    img: LeezenCard
  },
  {
    img: WorldCard
  }
]

const DemoCard = ({ onRedirectToDetail, index }: DemoCardProps) => {
  const img = dataMapping[index].img;

  return (
    <Box width={520} height={640} textAlign="center" onClick={onRedirectToDetail}>
      <Image src={img} alt="credit-card" priority={index === 0} />
    </Box>
  )
}

export default DemoCard