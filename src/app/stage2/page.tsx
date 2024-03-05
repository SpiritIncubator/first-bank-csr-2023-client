'use client';

import React from 'react';
import { Box } from '@mui/material';
import Button from '@/app/_components/Button/Button';
import Image from 'next/image';
import styled from '@emotion/styled';
import { useRouter } from 'next/navigation';
import I18nButton from '@/app/_components/I18nButton/I18nButton';
import FadeIn from '../_components/Transitions/FadeIn';
import CardIntroBg from './assets/card-intro.svg';
import CardIntroChat from './assets/card-intro-slogan.svg';
import CardIntroChatEn from './assets/card-intro-slogan-en.svg';
import CardBird from './assets/intro-bird.svg';
import LeftCard from './assets/left-card.svg';
import LeftContent from './assets/left-content.svg';
import LeftContentEn from './assets/left-content-en.svg';
import RightCard from './assets/right-card.svg';
import RightContent from './assets/right-content.svg';
import RightContentEn from './assets/right-content-en.svg';
import Lion from './assets/lion.svg';
import useStore from '../atoms/useStore';
import isServer from '@/utils/isServer';

import MoreIcon from './assets/more.svg';
import MoreIconEn from './assets/more-en.svg';

const StyledScaleImage = styled(Image)`
	transition: all 0.5s ease-in-out;
	&:hover {
		transform: scale(1.2);
	}
`;

const StyledCommonButton = styled(Button)`
	padding: 25px 68px;
	background-color: #7dbd36;
	border: none;
	border-radius: 84px;
	color: #ffffff;
	font-size: 50px;
	letter-spacing: 20px;
	display: inline-block;
	minwidth: 260px;
	width: auto;
	&:active,
	&:focus,
	&:visited,
	&:hover {
		background-color: #b8c318;
	}
`;

const Page = () => {
  const router = useRouter();
  const { language } = useStore();
  const isEn = language === 'en';

  const redirectToCardIntro = () => {
    router.push('/stage2/green-credit-card');
  }
  const redirectToEsgLoan = () => {
    router.push('/stage2/esg-consumer-loans');
  }

  return !isServer() ? (
    <Box padding="170px 111px 583px 100px" display="flex" flexDirection="column" height="100%">
      <FadeIn display="flex" marginLeft={60}>
        <Image src={CardIntroBg} alt="card-intro" />
        <Box pl={16.125}>
          <I18nButton size="large" />
        </Box>
      </FadeIn>
      <Box mt={25}>
        <FadeIn display='flex' alignItems='flex-end' delay={0.5}>
          <Image src={isEn ? CardIntroChatEn : CardIntroChat} alt="chat" />
          <Box pl={15}>
            <Image src={CardBird} alt="bird" />
          </Box>
        </FadeIn>
      </Box>
      <Box flex={1} mt={10} textAlign="center" position="relative">
        <Box position="absolute" left={5} bottom="44%" zIndex={999} onClick={redirectToEsgLoan} minWidth={492}>
          <FadeIn delay={1}>
            <StyledScaleImage src={LeftCard} alt="right-card" />
            <Box mt={7.5} mb={isEn ? 6.25 : 2.5} height={isEn ? 135 : 210} display="flex" justifyContent="center" alignItems="center">
              <Image src={isEn ? LeftContentEn : LeftContent} alt='right-content' />
            </Box>
            <StyledCommonButton>
              <Image src={isEn ? MoreIconEn : MoreIcon} alt='more-icon' />
            </StyledCommonButton>
          </FadeIn>
        </Box>
        <FadeIn delay={0.5}>
          <Image src={Lion} alt="main-visual" />
        </FadeIn>
        <Box position="absolute" right={5} bottom="44%" zIndex={999} onClick={redirectToCardIntro} minWidth={492}>
          <FadeIn delay={1.25}>
            <StyledScaleImage src={RightCard} alt="right-card" />
            <Box mt={7.5} mb={isEn ? 6.25 : 2.5} height={isEn ? 135 : 210} display="flex" justifyContent="center" alignItems="center">
              <Image src={isEn ? RightContentEn : RightContent} alt='right-content' />
            </Box>
            <StyledCommonButton>
              <Image src={isEn ? MoreIconEn : MoreIcon} alt='more-icon' />
            </StyledCommonButton>
          </FadeIn>
        </Box>
      </Box>
    </Box>
  ) : <><Box></Box></>
}

export default Page;
