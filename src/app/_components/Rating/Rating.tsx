import React from 'react';
import Box from '@mui/material/Box';
import Image from 'next/image';

import Star from '@/app/_assets/images/star.svg'
import EmptyStar from '@/app/_assets/images/emptyStar.svg';

const MAX_STARTS = 3;

type RattingProp = {
  rate: number
}

const Rating = ({rate}: RattingProp) => {
  const starts = new Array(MAX_STARTS).fill(0);

  if (rate > MAX_STARTS) {
    throw new Error('Rate should be equal or less than 3');
  }

  function renderStarts(_: number, index: number) {
    if (index < rate) {
      return <Image src={Star} alt="star" />
    }

    return <Image src={EmptyStar} alt="nonStar" />
  }

  return (
    <Box display="flex" gap={2.5}>
      {starts.map(renderStarts)}
    </Box>
  )
}

export default Rating