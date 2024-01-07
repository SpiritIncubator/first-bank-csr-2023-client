import {
  Box,
  Typography,
  Paper,
  Grid,
} from '@mui/material';
import Link from 'next/link';
import LionImage from '@/app/stage4/_assets/stage4-lion.svg';
import BirdImage from '@/app/stage4/_assets/stage4-bird.svg';
import Image from 'next/image';
import TITLE_IMAGE from './_assets/stage4-home-title.svg';
import PAGE1_IMAGE from './_assets/stage4-page1.svg';
import PAGE2_IMAGE from './_assets/stage4-page2.svg';
import PAGE3_IMAGE from './_assets/stage4-page3.svg';
import PAGE4_IMAGE from './_assets/stage4-page4.svg';

const PAGE_DATA = [
  {
    title: 'title_page1',
    imageUrl: PAGE1_IMAGE,
    "description": `支持能源技術服務產業簡稱發展，節電、節水。`,
    link: "/stage4/page1"
  },
  {
    title: 'title_page2',
    imageUrl: PAGE2_IMAGE,
    "description": `支持能源技術服務產業簡稱發展，節電、節水。`,
    link: "/stage4/page2"
  },
  {
    title: 'title_page3',
    imageUrl: PAGE3_IMAGE,
    "description": `支持能源技術服務產業簡稱發展，節電、節水。`,
    link: "/stage4/page3"
  },
  {
    title: 'title_page4',
    imageUrl: PAGE4_IMAGE,
    "description": `支持能源技術服務產業簡稱發展，節電、節水。`,
    link: "/stage4/page4"
  },
]

export default function Stage4() {
  return <Box py="150px" px="230px">
    <Box mb="87px">
      <Image src={TITLE_IMAGE} alt="title" width="1441" height="283" />
    </Box>
    <Box mb="130px" fontSize="52px" lineHeight="98.8px" width="1840px">
      第一銀行持續透過依公益/綠色信用卡刷卡金額固定比率提撥之刷卡金推動環保及公益活動，並啟動「減碳標籤」認證專案。
    </Box>

    <Grid container spacing="120px" sx={{ width: "100%", maxWidth: '2536px', p: 2 }}  >
      {PAGE_DATA.map((pageData, index) => {
        const { title, description, imageUrl, link } = pageData;
        return (<Grid
          item
          xs={12}
          sm={3}
          key={index}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center">
          <Link href={link} >
            <Box
              display="flex"
              justifyContent="center"
              width="100%"
              mb="40px"
            >
              <Image src={imageUrl} width="420" height="420" alt="page image" />
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
              width: "500px",
              fontSize: "46px",
              fontStyle: "normal",
              fontWeight: 500,
              lineHeight: "160%",
              letterSpacing: "3.68px"
            }}>
              {description}
            </Box>
          </Link>
        </Grid>
        )
      })}
    </Grid>
    <Box position="absolute" right={100} bottom="0">
      <Image src={LionImage} alt="Lion" width={880} height={1100} />
    </Box>
    <Box position="absolute" top={230} right={894} sx={{ transform: "rotate(-10deg)" }}>
      <Image src={BirdImage} alt="Bird" width={377} height={308} />
    </Box>
  </Box >
}