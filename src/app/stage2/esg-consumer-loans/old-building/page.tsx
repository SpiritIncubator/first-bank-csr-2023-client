'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import {
  Box,
  Container,
  Typography,
  Paper,
  Grid,
  Modal
} from '@mui/material';


const CASE_DATA = [
  {
    title: 'Title 1',
    imageUrl: '',
    "description": `1999年921大地震，臺北市仁愛路跟光復南路口「尚華仁愛大樓」，其混凝土壓力測試達不到標準，由黃單被改貼為紅單，住戶只能決定重建。第一銀行陪同住戶一起走過三年半的整合過程，秉持善盡社會責任之理念，減輕受災戶的財務負擔，以在信託與融資的專業，加上東亞建築經理股份有限公司（第一銀行轉投資關係企業，下稱東亞建經）在營建、建築法規、都更法規的協助整合，突破傳統授信觀念，排除各項困難，為住戶量身定作融資架構，提供100％的融資額度協助重建。`
  },
  {
    title: 'Title 2',
    imageUrl: '',
    "description": `1999年921大地震，臺北市仁愛路跟光復南路口「尚華仁愛大樓」，其混凝土壓力測試達不到標準，由黃單被改貼為紅單，住戶只能決定重建。第一銀行陪同住戶一起走過三年半的整合過程，秉持善盡社會責任之理念，減輕受災戶的財務負擔，以在信託與融資的專業，加上東亞建築經理股份有限公司（第一銀行轉投資關係企業，下稱東亞建經）在營建、建築法規、都更法規的協助整合，突破傳統授信觀念，排除各項困難，為住戶量身定作融資架構，提供100％的融資額度協助重建。`
  },
  {
    title: 'Title 3',
    imageUrl: '',
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
        只要係屬都更危老重建需求者等，均可向第一銀行各營業單位申請貸款。如是地主自建，比照自力更新最高提供全額融資協助；另若是建商與地主合建，則提供土融最高八五成、建融最高七成，優於一般土建融開發案之融資成數，也提供權變費用、拆遷、租金補助及相關保證金的週轉融資額度。
      </Box>

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

      {/* 3 column layout */}
      <Grid container spacing={2} sx={{ width: '100%', p: 2 }}  >
        {CASE_DATA.map((caseData, index) => {
          const { title } = caseData;
          return (<Grid item
            onClick={handleOpenModal(caseData)}
            xs={12} sm={4} key={index} display="flex"
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
            <Paper
              elevation={0}
              sx={{
                bgcolor: 'darkgrey',
                width: "500px",
                height: '160px',
                padding: '20px'
              }}
            >
              <Typography variant="body1" color="white">
                {title}
              </Typography>
            </Paper>
          </Grid>)
        })}
      </Grid>
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >

        <Box sx={{
          position: 'absolute',
          top: '45%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}>
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
      </Modal>
    </Container >
  );
};

export default OldBuilding;
