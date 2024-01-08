'use client'

import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Stack from '@mui/material/Stack';
import styled from '@mui/material/styles/styled';

import ScrollBar, {useScrollBar} from '../_components/ScrollBar';
import useMessageBoard  from './hooks';
import MessageCard from './components/MessageCard/MessageCard';
import BgIcon from './assets/bg.svg';
import title from './assets/title.svg';

const StyledSlider = styled(Slider)`
  .MuiSlider-thumb{
    width: 52px;
    height: 52px;
    color: #B8C318;
  }
  .MuiSlider-rail{
    color: #E9E3D8;
    width: 12px;
  }
  .MuiSlider-track{
    height: 0 !important;
    color: #E9E3D8;
  }
`;

const StyledBox = styled(Box)`
  ::-webkit-scrollbar {
    display: none;
  }
`

const HEIGHT_UNIT = 100

const Page = () => {
  const { messages, loaded } = useMessageBoard();
  const { containerRef } = useScrollBar({loaded});
  // const [value, setValue] = useState<number>(HEIGHT_UNIT);
  // const [offsetValue, setOffsetValue] = useState<number>(0); // [0, 100
  // const messageBoardRef = useRef<HTMLDivElement>(null);
  // const scrollableHeight = useRef(0);
  // const stepHeight = useRef(0);

  // const handleChange = (_: Event, newValue: number | number[]) => {
  //   const typedValue = newValue as number;
  //   const value = Math.abs(typedValue - 100) * stepHeight.current;
  //   setOffsetValue(value);
  //   setValue(typedValue);
  // };

  // const handleScroll = () => {
  //   if (messageBoardRef.current) {
  //     const { scrollTop } = messageBoardRef.current;
  //     const sliderPercentageValue = Math.abs(Math.round(scrollTop / stepHeight.current) - HEIGHT_UNIT);

  //     setValue(sliderPercentageValue);
  //   }
  // };
  
  // useEffect(() => {
  //   if (messageBoardRef.current) {
  //     const { scrollHeight, offsetHeight } = messageBoardRef.current;
  //     scrollableHeight.current = scrollHeight - offsetHeight;
  //     stepHeight.current = scrollableHeight.current / HEIGHT_UNIT;
  //     messageBoardRef.current.addEventListener('scroll', handleScroll);
  //   }

  //   return () => {
  //     if (messageBoardRef.current) {
  //       messageBoardRef.current.removeEventListener('scroll', handleScroll);
  //     }
  //   };
  // }, [messages]);

  // useEffect(() => { 
  //   if (messageBoardRef.current) {
  //     messageBoardRef.current.scrollTop = offsetValue;
  //   }
  // }, [offsetValue])

  return (
    <Box display="flex" flexDirection="column" alignItems="center" px={23.75} pt={15}>
      <Image src={BgIcon} alt="bg" />
      <Box mt={9}>
        <Image src={title} alt="title" />
      </Box>
      <Box position="relative">
        <StyledBox
          display="flex"
          flexWrap="wrap"
          gap={7.5}
          // 12.5
          mt={5}
          maxHeight={2240}
          overflow="auto"
          ref={containerRef}
        >
          {messages.map((item, index) => (<MessageCard key={index} bgColor={item.color} isTop={item.keepTop} content={item.message} name={item.name} />))}
        </StyledBox>
        <Box position="absolute" right={-100} top={150} height={600}>
          <ScrollBar />
          {/* <Stack sx={{ height: 600 }} spacing={1} direction="row">
            <StyledSlider
              orientation="vertical"
              valueLabelDisplay="off"
              value={value}
              onChange={handleChange} />
          </Stack> */}
        </Box>
      </Box>
    </Box>
  )
}

export default Page