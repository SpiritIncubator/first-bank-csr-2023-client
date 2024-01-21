'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import {
  Box,
  Container,
  Typography,
  Paper,
  Grid,
  Modal,
  Fade
} from '@mui/material';
import BackRightButton from '@/assets/back_right.svg';
import BackRightActiveButton from '@/assets/back_right_active.svg';
import ImageButton from '@/app/_components/ImageButton/ImageButton';
import FadeInHorizontal from '@/app/_components/Transitions/FadeInHorizontal';
import FadeIn from '@/app/_components/Transitions/FadeIn';
import ZoomBounce from '@/app/_components/Transitions/ZoomBounce';
import { useTranslation } from '@/app/_locales/hooks/useTranslation';

const CASE_DATA = [
  {
    title: 'Title 1',
    imageUrl: '',
    titleImageUrl: '/assets/oldBuilding-feature1-title-zh.svg',
    "description": `1999年921大地震，臺北市仁愛路跟光復南路口「尚華仁愛大樓」，其混凝土壓力測試達不到標準，由黃單被改貼為紅單，住戶只能決定重建。第一銀行陪同住戶一起走過三年半的整合過程，秉持善盡社會責任之理念，減輕受災戶的財務負擔，以在信託與融資的專業，加上東亞建築經理股份有限公司（第一銀行轉投資關係企業，下稱東亞建經）在營建、建築法規、都更法規的協助整合，突破傳統授信觀念，排除各項困難，為住戶量身定作融資架構，提供100％的融資額度協助重建。`
  },
  {
    title: 'Title 2',
    imageUrl: '',
    titleImageUrl: '/assets/oldBuilding-feature2-title-zh.svg',
    "description": `1999年921大地震，臺北市仁愛路跟光復南路口「尚華仁愛大樓」，其混凝土壓力測試達不到標準，由黃單被改貼為紅單，住戶只能決定重建。第一銀行陪同住戶一起走過三年半的整合過程，秉持善盡社會責任之理念，減輕受災戶的財務負擔，以在信託與融資的專業，加上東亞建築經理股份有限公司（第一銀行轉投資關係企業，下稱東亞建經）在營建、建築法規、都更法規的協助整合，突破傳統授信觀念，排除各項困難，為住戶量身定作融資架構，提供100％的融資額度協助重建。`
  },
  {
    title: 'Title 3',
    imageUrl: '',
    titleImageUrl: '/assets/oldBuilding-feature3-title-zh.svg',
    "description": `1999年921大地震，臺北市仁愛路跟光復南路口「尚華仁愛大樓」，其混凝土壓力測試達不到標準，由黃單被改貼為紅單，住戶只能決定重建。第一銀行陪同住戶一起走過三年半的整合過程，秉持善盡社會責任之理念，減輕受災戶的財務負擔，以在信託與融資的專業，加上東亞建築經理股份有限公司（第一銀行轉投資關係企業，下稱東亞建經）在營建、建築法規、都更法規的協助整合，突破傳統授信觀念，排除各項困難，為住戶量身定作融資架構，提供100％的融資額度協助重建。`
  }
]


const modalStyle = {
  width: '1580px',
  minHeight: '2000px',
  borderRadius: "100px",
  overflow: 'hidden',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: '140px',
  pb: "180px"
};

const OldBuilding: React.FC = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [selectedCase, setSelectedCase] = useState<any>(null);
  const router = useRouter();
  const { t } = useTranslation('stage2');

  const handleOpenModal = (caseData: typeof CASE_DATA[0]) => () => {
    console.log('caseData :', caseData);
    setSelectedCase(caseData);
    setOpenModal(true);
  };

  const handleCloseModal = () => setOpenModal(false);

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

      <FadeInHorizontal direction="ltr"
        flexDirection='column'
        display='flex'
        alignItems="center" >

        <Box width="500px" height="500px" position="relative" mb="80px">
          <Image
            fill
            src="/assets/oldBuilding-icon.svg"
            alt="oldBuilding-icon"
          />
        </Box>


        <Box
          display="flex"
          mb="60px"
          width="1340px" height="114px" position="relative"
        >
          <Image
            fill
            src="/assets/oldBuilding-title-zh.svg"
            alt="oldBuilding-title-zh"
          />
        </Box>

        <Box
          fontSize="52px"
          lineHeight="98.8px"
          mb="60px"
          width="1514px">
          {t('oldBuilding.desc')}
        </Box>
      </FadeInHorizontal>



      <FadeIn delay={0.6}>

        <Box
          sx={{
            width: '1700px',
            height: '700px',
            bgcolor: 'grey.300',
            mb: '120px',
          }}
        >
          {/* Third image */}
        </Box>
      </FadeIn>
      <FadeIn delay={1} width="100%">
        {/* 3 column layout */}
        <Grid container spacing="20px" sx={{ width: '100%', }} justifyContent="center">
          {CASE_DATA.map((caseData, index) => {
            const { title, titleImageUrl } = caseData;
            return (<Grid item
              onClick={handleOpenModal(caseData)}
              xs={12}
              sm={4} key={index} display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center">
              <Box
                display="flex"
                justifyContent="center"
                width="100%"
              >
                <Paper
                  elevation={0}
                  sx={{
                    bgcolor: 'lightgrey',
                    height: '420px',
                    width: '420px',
                    mb: '40px',
                  }} />

              </Box>
              <Box
                width="500px"
                height="500px"
                position="relative"
                mb="80px">
                <Image
                  fill
                  src={titleImageUrl}
                  alt="titleImage"
                />
              </Box>
            </Grid>)
          })}
        </Grid>
      </FadeIn>
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal--title"
        aria-describedby="modal-modal-description"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <ZoomBounce trigger={openModal} width="100%" display="flex" justifyContent='center'>
          <Box position="relative">
            <Box width="180px"
              height="180px"
              onClick={handleCloseModal}
              style={{
                position: 'absolute',
                top: '-90px',
                right: '-90px',
                cursor: 'pointer'
              }} >
              <Image
                src="/assets/modal_close.svg"
                alt="modal_close"
                objectFit='contain'
                fill
              />
            </Box>
            <Box sx={modalStyle}>
              <Box
                sx={{
                  width: '100%',
                  height: '900px',
                  bgcolor: 'grey.300',
                  mb: '80px',
                }}
              >
                {/* First Image*/}
              </Box>
              <Typography
                width="886px"
                height="256px"
                mb="30px"
                id="modal-modal-title" variant="h6" component="h2"
                bgcolor="grey.300"
              >
                {selectedCase?.title}
              </Typography>
              <Typography
                id="modal-modal-description" sx={{
                  color: 'var(--brown4, #594A39)',
                  fontSize: '52px',
                  fontStyle: 'normal',
                  fontWeight: 500,
                  lineHeight: '190%',
                  letterSpacing: '4.16px'
                }}>
                {selectedCase?.description}
              </Typography>
            </Box>
          </Box>
        </ZoomBounce>
      </Modal>
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
    </Container >
  );
};

export default OldBuilding;
