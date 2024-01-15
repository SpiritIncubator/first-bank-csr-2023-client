'use client'
import {
  Box,
  Container,
  Typography,
  Paper,
  Grid,
  Modal
} from '@mui/material';
import Image from 'next/image';
import DialogImg from '../_assets/stage4-dialog.svg';
import FadeIn from '@/app/_components/Transitions/FadeIn';
import FadeInOnView from '@/app/_components/Transitions/FadeInOnView';
import NavBar from '../_components/NavBar/NavBar';

const CASE_DATA = [
  {
    title: '綠色產業',
    imageUrl: '',
    "description": `支持能源技術服務產業(Energy Service Companies；簡稱 ESCO產業)發展，節電、節水、節油等工程及設備貸款`
  },
  {
    title: '綠色產業',
    imageUrl: '',
    "description": `支持能源技術服務產業(Energy Service Companies；簡稱 ESCO產業)發展，節電、節水、節油等工程及設備貸款`
  },
  {
    title: '綠色產業',
    imageUrl: '',
    "description": `支持能源技術服務產業(Energy Service Companies；簡稱 ESCO產業)發展，節電、節水、節油等工程及設備貸款`
  }
]

//EsgConsumerLoans
export default function Page1() {

  return (
    <Box px="210px" py="132px" mr="auto" mb="320px">
      <Box maxWidth="2404px">
        <FadeIn>
          <Box width="1342px" height="154px" position="relative" mb="60px" textAlign="left" >
            <Image
              fill
              src="/assets/esg-consumer-loans-title.svg"
              alt="colorPicker_select_color"
            />
          </Box>

          <Box fontSize="52px" lineHeight="98.8px" mb="120px" width="1840px">
            為協助企業降低生產或服務過程中產生之汙染及資源浪費，針對綠色產業及綠色企業提供之優惠貸款。
          </Box>
        </FadeIn>

        <Grid container spacing={2} sx={{ width: '100%', p: 2 }}  >
          {CASE_DATA.map((caseData, index) => {
            const { title, description } = caseData;
            return (<Grid item
              xs={12} sm={4} key={index} display="flex">
              <FadeIn delay={0.3 + index * 0.2}
                display="flex"
                justifyContent="center"
                flexDirection="column"
                alignItems="center">
                <Box
                  display="flex"
                  justifyContent="center"
                  width="100%"
                >
                  <Paper
                    elevation={0}
                    sx={{
                      bgcolor: '#E9E3D8',
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
                    padding: '20px',
                    mb: "40px"
                  }}
                >
                  <Typography variant="body1" color="white">
                    {title}
                  </Typography>
                </Paper>
                <Box sx={{
                  color: "var(--brown4, #594A39)",
                  width: "720px",
                  fontSize: "46px",
                  fontStyle: "normal",
                  fontWeight: 500,
                  lineHeight: "160%",
                  letterSpacing: "3.68px"
                }}>
                  {description}
                </Box>
              </FadeIn>
            </Grid>)
          })}
        </Grid>

        <Box sx={{ mt: '96px' }}>

          <FadeInOnView delay={0.5}>
            <Paper
              sx={{
                bgcolor: 'lightgrey',
                width: "100%",
                height: '1200px',
                mb: "160px"
              }} />
          </FadeInOnView>
          <FadeInOnView delay={0.5}>
            <Paper
              sx={{
                bgcolor: 'lightgrey',
                width: "100%",
                height: '1600px',
                mb: "160px"
              }} />
          </FadeInOnView>
        </Box>

      </Box>

      <NavBar dialogContent={() => <Image src={DialogImg} alt="dialog" />} />
    </Box >
  )
}