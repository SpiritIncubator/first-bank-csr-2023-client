'use client'

import React from 'react'
import Image from 'next/image';
import Box from '@mui/material/Box';
import styled from '@mui/material/styles/styled';
import CircularProgress from '@mui/material/CircularProgress';
import ScrollBar, { useScrollBar } from '../_components/ScrollBar';
import useMessageBoard from './hooks';
import MessageCard from './components/MessageCard/MessageCard';
import BgIcon from './assets/bg.svg';
import title from './assets/title.svg';
import colors from '@/constants/colors';
import CardQueueAnimation from '../_components/Transitions/CardQueued';
import { MessageCardType } from '@/app/messageBoard/hooks';

const StyledBox = styled(Box)`
  ::-webkit-scrollbar {
    display: none;
  }
`

const Page = () => {
  const { messages, loaded } = useMessageBoard();
  console.log('messages :', messages);
  const { containerRef, value, handleChangeBarOfValue } = useScrollBar({ loaded });

  return (
    <Box display="flex" flexDirection="column" alignItems="center" px={23.75} pt={15} bgcolor={colors.ivory}>
      <Image src={BgIcon} alt="bg" />
      <Box mt={9}>
        <Image src={title} alt="title" />
      </Box>
      <Box position="relative" width="100%">
        <StyledBox
          display="flex"
          flexWrap="wrap"
          gap={7.5}
          mt={5}
          maxHeight={2240}
          overflow="auto"
          ref={containerRef}
        >
          {!loaded ?
            <Box
              height="2000px"
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',

              }}
            >
              <CircularProgress size="100px" color="inherit" />
            </Box> :
            <CardQueueAnimation<MessageCardType>
              items={messages}
              keyExtractor={(item, index) => index + item.name}
              renderItem={(item, index) => (<MessageCard key={index} bgColor={item.color} isTop={item.keepTop} content={item.message} name={item.name} />)}
            />
          }

        </StyledBox>
        <Box position="absolute" right={-100} top={150} height={600}>
          <ScrollBar value={value} onHandleScrollBar={handleChangeBarOfValue} />
        </Box>
      </Box >
    </Box >
  )
}

export default Page