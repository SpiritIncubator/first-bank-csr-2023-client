'use client'
// MainPage.tsx
import * as React from 'react';
import Link from 'next/link';
import Box from '@mui/material/Box';
import Image from 'next/image';
import Typography from '@mui/material/Typography';
import { useTranslation } from '@/app/_locales/hooks/useTranslation';
import formatNumberWithCommas from '@/utils/formatNumberWithCommas';
import useFirstBankTranslation from '@/app/_locales/hooks/useFirstBankTranslation';
import FadeInHorizontal from '@/app/_components/Transitions/FadeInHorizontal';


export default function OldBuildingSection() {
  const { t } = useTranslation('stage2');
  const { lang } = useFirstBankTranslation();

  return (
    <FadeInHorizontal direction='ltr' delay={0.5} >
      <Box display="flex" gap="40px" mb="64px">
        <Box
          display="flex"
          width="1006px" height="87" position="relative"
        >
          <Image
            fill
            src="/assets/stage2/oldBuilding-title-zh.svg"
            alt="oldBuilding"
          />

        </Box>
        <Link href='/stage2/esg-consumer-loans/old-building'>
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
        {t('esgPage.oldBuildingDesc')}
      </Box>

      <Box mb="246px" gap="40px" display="flex" width="100%" justifyContent="space-between">
        <Box width="500px" height="500px" position="relative" >
          <Link href='/stage2/esg-consumer-loans/old-building'>
            <Image
              fill
              src="/assets/stage2/oldBuilding-icon.svg"
              alt="oldBuilding-icon"
            />
          </Link>
        </Box>
        <Box flex="2">
          <Box display="flex" flexDirection="column">
            <Box ml="100px">
              <Box>
                <Typography
                  variant="h4"
                  component="div"
                  gutterBottom
                  lineHeight="102.6px"
                  fontSize="54px"
                  fontWeight={500}
                >
                  {t('benefitedHouseholds')} <Box component="span" fontSize="42px">{t('houseHolds')}</Box>
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
                    formatNumberWithCommas(3157)
                  }
                </Box>
              </Box>
              <Box display="flex" >
                <Box>
                  <Typography
                    variant="h4"
                    component="div"
                    gutterBottom
                    lineHeight="102.6px"
                    fontSize="54px"
                    fontWeight={500}
                  >
                    {t('independentUpdateType')} <Box component="span" fontSize="42px">{t('billion')}</Box>
                  </Typography>
                  <Box sx={{
                    color: '#B8C318',
                    fontSize: '100px',
                    fontWeight: 900,
                    lineHeight: '160%',
                    letterSpacing: '6',
                    marginTop: '-60px'
                  }}>
                    {
                      formatNumberWithCommas(124)
                    }
                    <Box
                      component="span"
                      ml="20px"
                      fontSize="54px"
                      fontWeight="700"
                      letterSpacing='4.32px'
                      color="#594A39"> /38{t('pieces')}</Box>
                  </Box>
                </Box>
                <Box ml="60px">
                  <Typography
                    variant="h4"
                    component="div"
                    gutterBottom
                    lineHeight="102.6px"
                    fontSize="54px"
                    fontWeight={500}
                  >
                    {t('builderIntegratedType')}  <Box component="span" fontSize="42px">{t('billion')}</Box>
                  </Typography>
                  <Box sx={{
                    color: '#B8C318',
                    fontSize: '100px',
                    fontWeight: 900,
                    lineHeight: '160%',
                    letterSpacing: '6',
                    marginTop: '-60px'
                  }}>
                    {
                      formatNumberWithCommas(1351)
                    }
                    <Box component="span"
                      fontSize="54px"
                      ml="20px"
                      fontWeight="700"
                      letterSpacing='4.32px'
                      color="#594A39"> /165{t('pieces')}</Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </FadeInHorizontal>
  )
}