'use client'

import React from 'react'
import Image from 'next/image';
import Box from '@mui/material/Box';
import styled from '@mui/material/styles/styled';

import ScrollBar, {useScrollBar} from '../_components/ScrollBar';
import useMessageBoard  from './hooks';
import MessageCard from './components/MessageCard/MessageCard';
import BgIcon from './assets/bg.svg';
import title from './assets/title.svg';

const StyledBox = styled(Box)`
  ::-webkit-scrollbar {
    display: none;
  }
`

const Page = () => {
  const { messages, loaded } = useMessageBoard();
  const { containerRef, value, handleChangeBarOfValue } = useScrollBar({loaded});

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
          mt={5}
          maxHeight={2240}
          overflow="auto"
          ref={containerRef}
        >
          {messages.map((item, index) => (<MessageCard key={index} bgColor={item.color} isTop={item.keepTop} content={item.message} name={item.name} />))}
        </StyledBox>
        <Box position="absolute" right={-100} top={150} height={600}>
          <ScrollBar value={value} onHandleScrollBar={handleChangeBarOfValue} />
        </Box>
      </Box>
    </Box>
  )
}

export default Page