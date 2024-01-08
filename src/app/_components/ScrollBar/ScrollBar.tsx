import React from 'react';
import Stack from '@mui/material/Stack';

import { StyledSlider } from './ScrollBar.style';
import useScrollBar from './hooks';

type ScrollBarProps = {
  value: number;
  onHandleScrollBar: (event: Event, value: number | number[]) => void;
}

const ScrollBar = ({value, onHandleScrollBar}: ScrollBarProps) => {
  return (
    <Stack height="100%" spacing={1} direction="row">
      <StyledSlider
        orientation="vertical"
        valueLabelDisplay='off'
        value={value}
        onChange={onHandleScrollBar}
      />
    </Stack>
  )
}

export default ScrollBar;