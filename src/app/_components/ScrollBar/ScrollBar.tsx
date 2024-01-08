import React from 'react';
import Stack from '@mui/material/Stack';

import { StyledSlider } from './ScrollBar.style';
import useScrollBar from './hooks';

const ScrollBar = () => {
  return (
    <Stack height="100%" spacing={1} direction="row">
      <StyledSlider orientation="vertical" valueLabelDisplay='off' />
    </Stack>
  )
}

export default ScrollBar;