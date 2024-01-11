'use client'

import React from 'react'
import { Box, Button } from '@mui/material';
import Image from 'next/image';
import styled from '@emotion/styled';
import { useRouter } from 'next/navigation';

import I18nButton from '@/app/_components/I18nButton/I18nButton'
import CardIntroBg from './assets/card-intro.svg';
import CardIntroChat from './assets/card-intro-slogan.svg';
import CardBird from './assets/intro-bird.svg'
import LeftCard from './assets/left-card.svg';
import LeftContent from './assets/left-content.svg';
import RightCard from './assets/right-card.svg';
import RightContent from './assets/right-content.svg'

const StyledMainBox = styled(Box)`
  background-image: url('/assets/calculator-lion.svg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 100%;
`;

const StyledScaleImage = styled(Image)`
  transition: all 0.5s ease-in-out;
  &:hover {
    transform: scale(1.2);
  }
`;

const StyledCommonButton = styled(Button)`
  padding: 25px 68px;
  background-color: #7DBD36;
  border: none;
  border-radius: 84px;
  color: #ffffff;
  font-size: 50px;
  letter-spacing: 20px;
`;

const Page = () => {
  const router = useRouter();

  const redirectToCardIntro = () => {
    router.push('/stage2/green-credit-card');
  }

  return (
    <Box padding="170px 111px 583px 100px" display="flex" flexDirection="column" height="100%">
      <Box display="flex">
        <Image src={CardIntroBg} alt="card-intro" />
        <Box pl={16.125}>
          <I18nButton width={270} height={140} buttonOptions={{ width: 100, height: 100, fontSize: 48, fontWeight: 900, lineHeight: 100 }} />
        </Box>
      </Box>
      <Box mt={25} display="flex" alignItems="flex-end">
        <Image src={CardIntroChat} alt="chat" />
        <Box pl={15}>
          <Image src={CardBird} alt="bird" />
        </Box>
      </Box>
      <Box flex={1} mt={10} textAlign="center" position="relative">
        <Box position="absolute" left={-60} bottom="40%">
          <StyledScaleImage src={LeftCard} alt="right-card" />
          <Box mt={7.5}>
            <Image src={LeftContent} alt='right-content' />
          </Box>
          <StyledCommonButton variant='contained'>
            看更多
          </StyledCommonButton>
        </Box>
        <StyledMainBox />
        <Box position="absolute" right={-60} bottom="40%">
          <StyledScaleImage src={RightCard} alt="right-card" />
          <Box mt={7.5}>
            <Image src={RightContent} alt='right-content' />
          </Box>
          <StyledCommonButton variant='contained' onClick={redirectToCardIntro}>
            看更多
          </StyledCommonButton>
        </Box>
      </Box>
    </Box>
  )
}

export default Page