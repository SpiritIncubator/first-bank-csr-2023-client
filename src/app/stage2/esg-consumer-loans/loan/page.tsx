'use client'
import { useRouter } from 'next/navigation';
import BackRightButton from '@/assets/back_right.svg';
import BackRightActiveButton from '@/assets/back_right_active.svg';
import ImageButton from '@/app/_components/ImageButton/ImageButton';
import React from 'react';
import {
  Box,
  Container,
} from '@mui/material';
import BulletPointList from '@/components/LoanBulletPointList';


const PageLayout: React.FC = () => {
  const router = useRouter();
  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{
        width: '2160px',
        height: '3840px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        p: '260px 230px',
        bgcolor: 'background.paper',
      }}
    >
      <Box
        sx={{
          width: '500px',
          height: '500px',
          bgcolor: 'grey.300',
          mb: '80px',
        }}
      >
        {/* First Image*/}
      </Box>

      <Box
        sx={{
          width: '1200px',
          height: '360px',
          bgcolor: 'grey.500',
          mb: '60px',
        }}
      >
        {/* Second image */}
      </Box>

      <Box
        fontSize="52px"
        lineHeight="98.8px"
        mb="60px"
        width="1514px">
        為鼓勵支持ESG綠色消費，凡購置有「綠建築」標章不動產、「節能標章」之家電產品、電動汽機車、修繕房屋使用綠建材等，提供貸款優惠。
      </Box>

      <Box
        sx={{
          width: '1700px',
          height: '700px',
          bgcolor: 'grey.300',
          mb: '60px',
        }}
      >
        {/* Third image */}
      </Box>

      <BulletPointList />
      <ImageButton
        onClick={() => router.back()}
        src={BackRightButton}
        activeImageSrc={BackRightActiveButton}
        position="fixed"
        right="0"
        width="143px"
        height="283px"
        top="45%"
      />

    </Container>
  );
};

export default PageLayout;
