'use client'
// MainPage.tsx
import * as React from 'react';
import Link from 'next/link';
import Box from '@mui/material/Box';
import Image from 'next/image';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import BackRightButton from '@/assets/back_right.svg';
import BackRightActiveButton from '@/assets/back_right_active.svg';
import ImageButton from '@/app/_components/ImageButton/ImageButton';
import formatNumberWithCommas from '@/utils/formatNumberWithCommas';
import FadeInHorizontal from '@/app/_components/Transitions/FadeInHorizontal';
import FadeInVertical from '@/app/_components/Transitions/FadeInVertical';
import { useTranslation } from '@/app/_locales/hooks/useTranslation';
// Create a theme to apply consistent styling
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Define the custom theme
const theme = createTheme({

  breakpoints: {
    values: {
      xs: 0, // small phone
      sm: 600, // phone
      md: 900, // tablet
      lg: 1200, // small laptop
      xl: 1536, // desktop

    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          lineHeight: 1.2,
        },
      },
    },
  },
});

const MainPage = () => {
  const { t } = useTranslation('stage2');
  return (
    <ThemeProvider theme={theme}>
      <Box overflow="scroll" width="100vw" height="100vh">
        <Container
          disableGutters
          maxWidth={false}
          sx={{

            maxWidth: 2160,
            minHeight: 3840,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
            p: {
              xl: '150px', // padding for width 1536px to 1880px
              lg: '100px', // padding for width 1200px to 1536px
              md: '75px', // padding for width 900px to 1200px
              sm: '50px', // padding for width 600px to 900px
              xs: '25px', // padding for width 0px to 600px
            },
            bgcolor: 'background.paper',
          }}
        >
          <FadeInHorizontal direction='ltr' >
            <Box width="1246px" height="154px" position="relative" mb="64px" >
              <Image
                fill
                src="/assets/esg-consumer-loans-title.svg"
                alt="colorPicker_select_color"
              />
            </Box>

            <Box fontSize="52px" lineHeight="98.8px" mb="222px">
              {t('esgLoanDesc')}
            </Box>
          </FadeInHorizontal>
          <FadeInHorizontal direction='ltr' delay={0.3} >
            <Box display="flex" gap="40px" mb="64px">
              <Box
                display="flex"
                width="697px" height="87" position="relative"
              >
                <Image
                  fill
                  src="/assets/greenConsumerLoan-title-zh.svg"
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
                    src="/assets/seeMore-zh.svg"
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
              {t('greenConsumerLoanDesc')}
            </Box>

            <Box mb="246px" gap="80px" display="flex" width="100%"
              justifyContent="space-between"
              alignItems="center">

              <Box width="500px" height="500px" position="relative" >
                <Link href='/stage2/esg-consumer-loans/loan'>
                  <Image
                    fill
                    src="/assets/greenConsumerLoan-Badges.svg"
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
                      formatNumberWithCommas(122)
                    }
                  </Box>
                </Box>
              </Box>
              <Box flex="1" position="relative"
                width="623px"
                height="556px">
                <Image
                  fill
                  src="/assets/2022-score.svg"
                  alt="2022 score"
                />
              </Box>
            </Box>
          </FadeInHorizontal>
          <FadeInHorizontal direction='ltr' delay={0.5} >
            <Paper
              elevation={0}
              sx={{
                width: 1200,
                height: 220,
                bgcolor: 'grey.300',
                mb: "18px",
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                letterSpacing: "4.16px"
              }}
            >
              {/* Placeholder for the first image */}
            </Paper>
            <Box sx={{ width: '100%' }}
              fontSize="46px"
              lineHeight="98.8px"
              letterSpacing="3.68px"
              mb="85px"
            >
              支持能源技術服務產業(Energy Service Companies；簡稱 ESCO產 <br />業)發展，節電、節水、節油等工程及設備貸款
            </Box>

            <Box mb="246px" gap="40px" display="flex" width="100%" justifyContent="space-between">
              <Link href='/stage2/esg-consumer-loans/old-building'>
                <Paper
                  elevation={0}
                  sx={{
                    height: 500,
                    minWidth: 500,
                    flex: 0,
                    bgcolor: 'grey.300',
                    mb: 4,
                  }}
                >
                </Paper>
              </Link>
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
                        受益家戶數 <Box component="span" fontSize="42px">(戶)</Box>
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
                          自力更新型  <Box component="span" fontSize="42px">(億元)</Box>
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
                            formatNumberWithCommas(124.09)
                          }
                          <Box
                            component="span"
                            ml="20px"
                            fontSize="54px"
                            fontWeight="700"
                            letterSpacing='4.32px'
                            color="#594A39"> /38件</Box>
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
                          建商整合型  <Box component="span" fontSize="42px">(億元)</Box>
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
                            formatNumberWithCommas(1350.5)
                          }
                          <Box component="span"
                            fontSize="54px"
                            ml="20px"
                            fontWeight="700"
                            letterSpacing='4.32px'
                            color="#594A39"> /165件</Box>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </FadeInHorizontal>
          {/* // lion */}
          <FadeInVertical direction='up' delay={0.9} position="fixed" bottom="0" left="250px" height="680px" width="100%">
            <Box >
              <Image
                fill
                src="/assets/esg_lion.svg"
                alt="lion"
              />
            </Box>
          </FadeInVertical>
          <ImageButton
            onClick={() => location.href = '/stage2'}
            src={BackRightButton}
            activeImageSrc={BackRightActiveButton}
            position="fixed"
            right="0"
            width="143px"
            height="283px"
            top="45%"
          />
        </Container>
      </Box >


    </ThemeProvider >
  );
};

export default MainPage;
