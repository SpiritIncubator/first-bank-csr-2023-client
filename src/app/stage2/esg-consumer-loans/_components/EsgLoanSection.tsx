'use client'
import * as React from 'react';
import Link from 'next/link';
import Box from '@mui/material/Box';
import Image from 'next/image';
import Typography from '@mui/material/Typography';
import formatNumberWithCommas from '@/utils/formatNumberWithCommas';
import FadeInHorizontal from '@/app/_components/Transitions/FadeInHorizontal';
import { useTranslation } from '@/app/_locales/hooks/useTranslation';
import useFirstBankTranslation from '@/app/_locales/hooks/useFirstBankTranslation';

export default function EsgLoanSection() {
  const { t } = useTranslation('stage2');
  const { lang } = useFirstBankTranslation();

  return (
    <FadeInHorizontal direction='ltr' delay={0.3} >
      <Box display="flex" gap="40px" mb="64px">
        <Box
          display="flex"
          width="697px" height="87" position="relative"
        >
          <Image
            fill
            src="/assets/stage2/greenConsumerLoan-title-zh.svg"
            alt="greenConsumerLoan"
          />

        </Box>
        <Link href='/stage2/esg-consumer-loans/loan'>
          <Box
            display="flex"
            width="260px" height="87px" position="relative"
          >
            <Image
              fill
              src="/assets/stage2/seeMore-zh.svg"
              alt="see more "
            />
          </Box>
        </Link>
      </Box>

      <Box sx={{ width: '100%' }}
        fontSize="46px"
        lineHeight="73.6px"
        letterSpacing="3.68px"
        mb="70px"
        maxWidth="1530px">
        {t('esgPage.greenConsumerLoanDesc')}
      </Box>

      <Box mb="246px" gap="80px" display="flex" width="100%"
        justifyContent="space-between"
        alignItems="center">

        <Box width="500px" height="500px" position="relative" >
          <Link href='/stage2/esg-consumer-loans/loan'>
            <Image
              fill
              src="/assets/stage2/greenConsumerLoan-Badges.svg"
              alt="greenConsumerLoan-Badges"
            />
          </Link>
        </Box>
        <Box flex="1">
          <Box>
            <Typography
              variant="h4"
              component="div"
              gutterBottom
              lineHeight="102.6px"
              fontSize="54px"
              fontWeight={500}
            >
              {t('applyHouseHolds')} <Box component="span" fontSize="42px">{t('houseHolds')}</Box>
            </Typography>
            <Box sx={{
              color: '#B8C318',
              fontSize: '140px',
              fontWeight: 900,
              lineHeight: '160%',
              letterSpacing: '8.4px',
              marginTop: '-60px'
            }}>
              {
                formatNumberWithCommas(1010)
              }
            </Box>
            <Typography
              variant="h4"
              component="div"
              gutterBottom
              lineHeight="102.6px"
              fontSize="54px"
              fontWeight={500}
            >
              {t('balance')} <Box component="span" fontSize="42px">{t('billion')}</Box>
            </Typography>
            <Box sx={{
              color: '#B8C318',
              fontSize: '140px',
              fontWeight: 900,
              lineHeight: '160%',
              letterSpacing: '8.4px',
              marginTop: '-60px'
            }}>
              {
                formatNumberWithCommas(82)
              }
            </Box>
          </Box>
        </Box>
        <Box flex="1" position="relative"
          width="623px"
          height="556px">
          <Image
            fill
            src="/assets/stage2/2022-score.svg"
            alt="2022 score"
          />
        </Box>
      </Box>
    </FadeInHorizontal>
  ) 
}