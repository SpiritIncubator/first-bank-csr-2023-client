'use client'

import React, {useState} from 'react';
import { Box, Typography, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import Image from 'next/image';
import CountUp from 'react-countup';
import { useRouter } from 'next/navigation';

import useMount from '@/app/hooks/useMount';
import ImageButton from '@/app/_components/ImageButton/ImageButton';
import FadeIn from '@/app/_components/Transitions/FadeIn';
import BackLeftButton from '@/assets/back_left.svg';
import BackLeftActiveButton from '@/assets/back_left_active.svg';
import {useTranslation} from '@/app/_locales/hooks/useTranslation';
import useStore from '@/app/atoms/useStore';

import { creditCardInfos, CreditCardInfoType } from './spec';
import SymbolWithYears from './assets/symbol-years.svg';
import SymbolWithYearsEn from './assets/symbol-en.svg'
import LastSymbolWithYears from './assets/world-card-bird.svg';
import LastSymbolWithYearsEn from './assets/last-symbol-en.svg';
import Rotate from './assets/cards/card-rotate.svg';

type PageProps = {
  params: {
    category: string;
  }
}

const Page = ({ params }: PageProps) => {
  const router = useRouter();
  const [isFront, setFront] = useState(true);
  const { t } = useTranslation('stage2');
  const detail = creditCardInfos[Number(params.category) - 1];
  const isLastCard = Number(params.category) === creditCardInfos.length;
  const categoryColor = isLastCard ? 'rgba(238, 182, 144, 1)' : '#BBC318';
  const { language } = useStore();
  const { isMounted } = useMount();
  const isEn = language === 'en';
  const imgSrc = isMounted ? detail.imgSrc[language] : { titleImg: '', cardNameImg: '', releaseDateImg: '', src: '' };
  const symbolImg = isLastCard ?
    (isEn) ? LastSymbolWithYearsEn : LastSymbolWithYears
    : (isEn) ? SymbolWithYearsEn : SymbolWithYears;
  
  function renderCardDetail(description: string, index: number) {
    const isHeadRecord = index === 0;
    return (
      <FadeIn delay={(index + 1) * 0.3 + 0.5}>
        <ListItem sx={{ marginTop: isHeadRecord ? 0 : 20 }}>
          <ListItemIcon sx={{ marginRight: 10 }}>
            <Typography width={70} height={70} borderRadius={35} bgcolor={categoryColor} />
          </ListItemIcon>
          <ListItemText primaryTypographyProps={{ fontSize: 60, width: 1558, lineHeight: isEn ? 1.5 : 2, letterSpacing: 6 }} primary={t(description)} />
        </ListItem>
      </FadeIn>
    )
  }

  function backToPreviousPage() {
    router.back();
  }

  function rotateCard() {
    setFront(front => !front);
  }

  if (!detail) {
    return null;
  }

  return (
    <Box
      pt={16.25}
      height="100%"
      display="flex"
      flexDirection="column"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
    >
      {isMounted && (
        <Box display="flex" flexDirection="column" alignItems="center" position="relative">
          <Box height={266} display="flex" alignItems="center">
            <Image src={imgSrc.titleImg} alt="title" /> 
          </Box>
          <Box mt={10}>
            <Image src={isFront ? detail.src : detail.srcBack} alt="card" />
          </Box>
          <Box mt={12.5}>
            <Image src={imgSrc.cardNameImg} alt="card-name" />
          </Box>
          <Box mt={5.5}>
            <Image src={imgSrc.releaseDateImg} alt="release-date" />
          </Box>
        </Box>
      )}
      <Box height={624} width="100%" display="flex" mt={23}>
        <FadeIn delay={0.5} flex={1} display='flex'>
          <Box flex={1} textAlign="right" pr={16.25}>
            {isMounted && <Image src={symbolImg} alt="years" />}
          </Box>
          <Box flex={1}>
            <Box>
              <Box display="flex" alignItems="flex-end">
                <Typography fontWeight={700} fontSize={isEn ? 38 : 54} letterSpacing={2}>
                  {t('card.detail.cards')}
                </Typography>
                {isMounted && !isEn && <Typography fontSize={42} mb={0.5}>(張)</Typography>}
              </Box>
              <Typography fontSize={160} fontWeight={900} color={categoryColor}>
                <CountUp style={{letterSpacing: 20}} start={0} end={detail.circulationAmount} duration={3} />
              </Typography>
            </Box>
            <Box display="flex" alignItems="flex-end">
              <Typography fontSize={isEn ? 38 : 54} fontWeight={700} letterSpacing={2}>
                {t('card.detail.accumulateAmount')}
              </Typography>
              <Typography ml={1} fontSize={isEn ? 38 : 42} mb={0.5}>{isEn ? '(NTD)' : '(元)'}</Typography>
            </Box>
            <Typography letterSpacing={15} fontSize={120} fontWeight={900} color={categoryColor}>{new Intl.NumberFormat('en').format(detail.accumulateAmount)}</Typography>
          </Box>
        </FadeIn>
      </Box>
      <Box flex={1} pt={18.5}>
        <List>
          {detail.descriptions.map(renderCardDetail)}
        </List>
      </Box>
      <ImageButton
        onClick={() => router.back()}
        src={BackLeftButton}
        activeImageSrc={BackLeftActiveButton}
        width="143px"
        height="283px"
        position="absolute"
        left={0}
        top={1678}
      />
      <Box position="absolute" left={450} top={650} onClick={rotateCard}>
        <Image src={Rotate} alt="rotate" />
      </Box>
      <Box position="absolute" right={370} top={850}>
        <Image src={detail.code} alt="link" />
      </Box>
    </Box>
  )
}

export default Page