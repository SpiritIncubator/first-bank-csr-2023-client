'use client'
// MainPage.tsx
import * as React from 'react';
import Link from 'next/link';
import Box from '@mui/material/Box';
import Image from 'next/image';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import BackRightButton from '@/assets/back_right.svg';
import BackRightActiveButton from '@/assets/back_right_active.svg';
import ImageButton from '@/app/_components/ImageButton/ImageButton';
import formatNumberWithCommas from '@/utils/formatNumberWithCommas';
import FadeInHorizontal from '@/app/_components/Transitions/FadeInHorizontal';
import FadeInVertical from '@/app/_components/Transitions/FadeInVertical';
import useFirstBankTranslation from '@/app/_locales/hooks/useFirstBankTranslation';
import { useTranslation } from '@/app/_locales/hooks/useTranslation';
import EsgLoanSection from './_components/EsgLoanSection';
import OldBuildingSection from './_components/OldBuildingSection';
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
  const { lang } = useFirstBankTranslation();

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
                alt="esg-consumer-loans-title"
              />
            </Box>

            <Box fontSize="52px" lineHeight="98.8px" mb="222px">
              {t('esgPage.esgLoanDesc')}
            </Box>
          </FadeInHorizontal>

          {/* // First Section */}
          <EsgLoanSection />
          {/* // Second Section */}
          <OldBuildingSection />

          {/* // lion */}
          <Box position="fixed" bottom="0" right="250px" width="1000px">
            <FadeInVertical direction='up' delay={0.9}  >
              <Box width="720px" height="395px" left="-400px" bottom="343px" position="absolute">
                <Image
                  fill
                  src="/assets/stage2/esg-consumer-loans-lionMessage.svg"
                  alt="lion"
                />
              </Box>

              <Box width="1000px" height="680px" position="absolute" left="0" bottom="0">
                <Image
                  fill
                  src="/assets/stage2/esg_lion.svg"
                  alt="lion"
                />
              </Box>

            </FadeInVertical>
          </Box>
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
