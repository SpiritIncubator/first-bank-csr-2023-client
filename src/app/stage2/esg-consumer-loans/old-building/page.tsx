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
import useFirstBankTranslation from '@/app/_locales/hooks';
import { LANGUAGE_TYPE } from '@/types';

enum CASE_NAME {
  CASE1 = 'CASE1',
  CASE2 = 'CASE2',
  CASE3 = 'CASE3'
}


const CASE_DATA_ZH = [
  {
    name: CASE_NAME.CASE1,
    imageUrl: '/assets/oldBuilding-feature1-thumbnail.png',
    titleImageUrl: '/assets/oldBuilding-feature1-title-zh.svg',
    description: `1999年921大地震，臺北市仁愛路跟光復南路口「尚華仁愛大樓」，其混凝土壓力測試達不到標準，由黃單被改貼為紅單，住戶只能決定重建。第一銀行陪同住戶一起走過三年半的整合過程，秉持善盡社會責任之理念，減輕受災戶的財務負擔，以在信託與融資的專業，加上東亞建築經理股份有限公司（第一銀行轉投資關係企業，下稱東亞建經）在營建、建築法規、都更法規的協助整合，突破傳統授信觀念，排除各項困難，為住戶量身定作融資架構，提供100％的融資額度協助重建。`,
    detailTitleImageUrl: '/assets/oldBuilding-feature1-inner-title-zh.svg',
    detailImageUrl: '/assets/oldBuilding-feature1-inner-image.png',
    detailTitleWidth: 874,
    detailTitleHeight: 205,
    detailDescription: `1999年921大地震，臺北市仁愛路跟光復南路口「尚華仁愛大樓」，其混凝土壓力測試達不到標準，由黃單被改貼為紅單，住戶只能決定重建。

    第一銀行陪同住戶一起走過三年半的整合過程，秉持善盡社會責任之理念，減輕受災戶的財務負擔，以在信託與融資的專業，加上東亞建築經理股份有限公司（第一銀行轉投資關係企業，下稱東亞建經）在營建、建築法規、都更法規的協助整合，突破傳統授信觀念，排除各項困難，為住戶量身定作融資架構，提供100％的融資額度協助重建。`
  },
  {
    name: CASE_NAME.CASE2,
    imageUrl: '/assets/oldBuilding-feature2-thumbnail.png',
    titleImageUrl: '/assets/oldBuilding-feature2-title-zh.svg',
    "description": `1999年921大地震，臺北市仁愛路跟光復南路口「尚華仁愛大樓」，其混凝土壓力測試達不到標準，由黃單被改貼為紅單，住戶只能決定重建。第一銀行陪同住戶一起走過三年半的整合過程，秉持善盡社會責任之理念，減輕受災戶的財務負擔，以在信託與融資的專業，加上東亞建築經理股份有限公司（第一銀行轉投資關係企業，下稱東亞建經）在營建、建築法規、都更法規的協助整合，突破傳統授信觀念，排除各項困難，為住戶量身定作融資架構，提供100％的融資額度協助重建。`,
    detailTitleWidth: 1258,
    detailTitleHeight: 205,
    detailTitleImageUrl: '/assets/oldBuilding-feature2-inner-title-zh.svg',
    detailImageUrl: '/assets/oldBuilding-feature2-inner-image.png',
    detailDescription: `921大地震受災戶的「埔里中華商場」，在經過第一銀行都更團隊詳細說明都市更新整體融資架構及內容後，終於取得更新會及住戶認同，接受全盤風險考量的更新規劃。第一銀行繼「尚華仁愛大樓都市更新自建融資案」後，再次以提供100％的全額融資方式協助「埔里鎮中華商場都市更新自建」，重現埔里中華商場嶄新風貌。`
  },
  {
    name: CASE_NAME.CASE3,
    imageUrl: '/assets/oldBuilding-feature3-thumbnail.png',
    titleImageUrl: '/assets/oldBuilding-feature3-title-zh.svg',
    "description": `1999年921大地震，臺北市仁愛路跟光復南路口「尚華仁愛大樓」，其混凝土壓力測試達不到標準，由黃單被改貼為紅單，住戶只能決定重建。第一銀行陪同住戶一起走過三年半的整合過程，秉持善盡社會責任之理念，減輕受災戶的財務負擔，以在信託與融資的專業，加上東亞建築經理股份有限公司（第一銀行轉投資關係企業，下稱東亞建經）在營建、建築法規、都更法規的協助整合，突破傳統授信觀念，排除各項困難，為住戶量身定作融資架構，提供100％的融資額度協助重建。`,
    detailTitleWidth: 1085,
    detailTitleHeight: 332,
    detailTitleImageUrl: '/assets/oldBuilding-feature3-inner-title-zh.svg',
    detailImageUrl: '/assets/oldBuilding-feature3-inner-image.png',
    detailDescription: `水源路四、五期整宅為當初臺北市政府為安置公共工程拆遷戶而興建的整建住宅，其屋齡都已超過50年，住戶卻都還住在裡面。

    更新前每戶不足10坪的居住環境、無停車位，生活空間狹小窳陋，更有漏水、治安、牆壁損毀及消防安全等嚴重問題而自願更新重建。該案原地主超過170人，人數眾多、土地產權複雜，更增添整合與融資難度。歷經近 12 個寒暑，第一銀行從整合、規劃、都更核定、融資核定到完工交屋，終於在2018年讓水源路四、五期整宅都更案原地主順利搬回新家。`
  }
]


const CASE_DATA_EN = [
  {
    imageUrl: '',
    name: CASE_NAME.CASE1,
    titleImageUrl: '/assets/oldBuilding-feature1-title-zh.svg',
    "description": `1999年921大地震，臺北市仁愛路跟光復南路口「尚華仁愛大樓」，其混凝土壓力測試達不到標準，由黃單被改貼為紅單，住戶只能決定重建。第一銀行陪同住戶一起走過三年半的整合過程，秉持善盡社會責任之理念，減輕受災戶的財務負擔，以在信託與融資的專業，加上東亞建築經理股份有限公司（第一銀行轉投資關係企業，下稱東亞建經）在營建、建築法規、都更法規的協助整合，突破傳統授信觀念，排除各項困難，為住戶量身定作融資架構，提供100％的融資額度協助重建。`,
    detailTitleWidth: 874,
    detailTitleHeight: 205,
    detailImageUrl: "",
    "detailTitleImageUrl": "",
    "detailDescription": "",
  },
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
  const { lang } = useFirstBankTranslation()
  console.log('lang :', lang);


  const caseDataMapping = {
    [LANGUAGE_TYPE.ZH]: CASE_DATA_ZH,
    [LANGUAGE_TYPE.EN]: CASE_DATA_EN
  }

  const mappedCaseData = caseDataMapping[lang]

  const handleOpenModal = (caseData: typeof CASE_DATA_ZH[0]) => () => {
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
          display="flex"
          mb="120px"
          width='1700px'
          height='900px'
          position="relative"
        >
          <Image
            fill
            src="/assets/oldBuilding-chart.svg"
            alt="oldBuilding-chart"
          />
        </Box>
      </FadeIn>

      <FadeIn delay={1} width="100%">
        {/* 3 column layout */}
        <Grid container spacing="20px" sx={{ width: '100%', }} justifyContent="center">
          {mappedCaseData.map((caseData, index) => {
            const { imageUrl, titleImageUrl } = caseData;
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
                width="440px"
                height="375px"
                position="relative"
                mb="45px"
              >
                <Image
                  fill
                  src={imageUrl}
                  alt="imageUrl"
                />
              </Box>
              <Box
                width="500px"
                height="180px"
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
                  width: "1300px",
                  height: "916px",
                  mb: '100px',
                  position: 'relative'
                }}
              >
                <Image
                  fill
                  src={selectedCase?.detailImageUrl}
                  alt="detailImageUrl"
                />
              </Box>
              <Box
                mb="60px"
              >
                <Image
                  src={selectedCase?.detailTitleImageUrl}
                  alt="titleImageUrl"
                  width={selectedCase?.detailTitleWidth}
                  height={selectedCase?.detailTitleHeight}
                />
              </Box>
              <Typography
                id="modal-modal-description" sx={{
                  color: 'var(--brown4, #594A39)',
                  fontSize: '52px',
                  fontStyle: 'normal',
                  fontWeight: 500,
                  lineHeight: '190%',
                  letterSpacing: '4.16px',
                  whiteSpace: 'pre-line'

                }}>
                {selectedCase?.detailDescription}
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
