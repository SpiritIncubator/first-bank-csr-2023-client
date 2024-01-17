'use client'
import { Grid, Box, Typography, Paper } from '@mui/material';
import Image from 'next/image';
import Year2022Image from '@/app/stage4/page2/_assets/2022.svg';
import SixPointDividerImage from '@/app/stage4/page2/_assets/six-point-divider.svg';
import BirdImage from './_assets/page2_bird.svg';
import Industry1Image from './_assets/industry1.svg';
import Industry2Image from './_assets/industry2.svg';
import Industry3Image from './_assets/industry3.svg';
import Industry4Image from './_assets/industry4.svg';
import Industry5Image from './_assets/industry5.svg';
import Industry6Image from './_assets/industry6.svg';
import Industry1TitleImage from './_assets/industry_title1.svg';
import Industry2TitleImage from './_assets/industry_title2.svg';
import Industry3TitleImage from './_assets/industry_title3.svg';
import Industry4TitleImage from './_assets/industry_title4.svg';
import Industry5TitleImage from './_assets/industry_title5.svg';
import Industry6TitleImage from './_assets/industry_title6.svg';
import DialogImg from '../_assets/stage4-dialog.svg';
import formatNumberWithCommas from '@/utils/formatNumberWithCommas';
import NavBar from '../_components/NavBar/NavBar';
import FadeIn from '@/app/_components/Transitions/FadeIn';
import FadeInOnView from '@/app/_components/Transitions/FadeInOnView';
import ScrollBar, {useScrollBar} from '@/app/_components/ScrollBar';

interface GridItemData {
  value: string;
  description: string;
  imageUrl: string;
  titleImageUrl: string;
}

const GridItem: React.FC<{ data: GridItemData }> = ({ data }) => {

  return (
    <Box
      style={{
        padding: 20,
        textAlign: 'center',
        marginBottom: 8, // Add margin if needed for spacing between items
      }}
    >
      <Box
        style={{
          marginBottom: 16, // Spacing between icon and text
        }}
      >
        <Image src={data.imageUrl} alt="industry image" width={420} height={420} />
      </Box>
      <Typography
        variant="h4"
        component="div"
        sx={{
          color: '#B8C318',
          fontSize: '120px',
          fontStyle: 'normal',
          fontWeight: 900,
          lineHeight: '160%',
          letterSpacing: '7.2px',
          mb: '22px'
        }}>
        {data.value}
      </Typography>
      <Box
        style={{
          marginBottom: "42px",
        }}
      >
        <Image src={data.titleImageUrl} alt="industry image" width={280} height={166} />
      </Box>
      <Typography component="div" style={{
        color: 'var(--brown4, #594A39)',
        fontSize: '46px',
        fontStyle: 'normal',
        fontWeight: 500,
        lineHeight: '160%', // 73.6px
        letterSpacing: '3.68px',
      }} dangerouslySetInnerHTML={{ __html: data.description }} />
    </Box >
  );
};

const gridData: GridItemData[] = [
  {
    value: '1,741.94',
    description: '電腦及其零組件、AI、物聯網 <br/> 影音製作、傳播及資通訊服務業',
    imageUrl: Industry1Image,
    titleImageUrl: Industry1TitleImage
  },
  {
    value: '686.82',
    description: '半導體、AI、5G',
    imageUrl: Industry2Image,
    titleImageUrl: Industry2TitleImage
  },
  {
    value: '250.7',
    description: '保健營養食品、藥品 <br/> 醫院/診所、照護服務',
    imageUrl: Industry3Image,
    titleImageUrl: Industry3TitleImage
  },
  {
    value: '3,128.65',
    description: '航空、船艦、太空',
    imageUrl: Industry4Image,
    titleImageUrl: Industry4TitleImage
  },
  {
    value: '1,831.85',
    description: '太陽光電、燃料電池<br/>風力發電、生質燃料',
    imageUrl: Industry5Image,
    titleImageUrl: Industry5TitleImage
  },
  {
    value: '2,644.09',
    description: '能源、民生用品、醫療、糧食 <br/> 救災資源、砂石水泥',
    imageUrl: Industry6Image,
    titleImageUrl: Industry6TitleImage
  },
]

export default function Page2() {
  const { value, handleChangeBarOfValue, containerRef } = useScrollBar({});
  return (
    <Box px="210px" py="151px" mr="auto" mb="320px" height={2160} overflow="scroll" ref={containerRef} position="relative">
      <Box maxWidth="2404px">
        <FadeIn>
          <Box width="1342px" height="154px" position="relative" mb="60px" textAlign="left" >
            <Image
              fill
              src="/assets/esg-consumer-loans-title.svg"
              alt="colorPicker_select_color"
            />
          </Box>

          <Box fontSize="52px"
            fontWeight="500"
            lineHeight="98.8px"
            mb="120px"
            width="1840px"
            letterSpacing="4.16px">
            為支持國家重點政策及產業發展需要，落實行政院「六大核心戰略產業推動方案」，第一銀行2022年起開辦「六大核心戰略產業優惠貸款專案」，提供以下六大核心戰略產業相關客戶日常營業活動、研發、擴廠及轉型等各營運階段所需之資金需求。
          </Box>
        </FadeIn>

        <FadeIn delay={0.3}>
          <Box display="flex" mb="120px" justifyContent="center">
            <Box
              sx={{
                transform: "rotate(10deg)",
                mr: "109px"
              }}>
              <Image src={BirdImage} alt="Bird" width={479} height={364} />
            </Box>
            <Box>
              <Box>
                <Image src={Year2022Image} alt="Year2022" width={286} height={168} />
                <Typography
                  style={{
                    color: '#594A39',
                    fontFamily: 'jf-jinxuanlatte-2.1',
                    fontSize: '70px',
                    fontStyle: 'normal',
                    fontWeight: 700,
                    lineHeight: 1.9,
                    letterSpacing: '4px'
                  }}
                >
                  融資總額 <Box component="span" fontWeight="500" fontSize="50px">(億元)</Box>
                </Typography>
              </Box>
            </Box>
            <Box sx={{
              color: '#B8C318',
              fontSize: '170px',
              fontWeight: 900,
              lineHeight: '160%',
              letterSpacing: '8.4px',
              ml: "40px"
            }}>
              {
                formatNumberWithCommas(5407.38)
              }
            </Box>
          </Box >
        </FadeIn>

        <FadeIn delay={0.7}>
          <Box mb="120px" width="100%" px="142px" textAlign="center">
            <Image
              src={SixPointDividerImage}
              alt="SixPointDivider" width={2120} height={140}
              style={{ display: "inline-block" }}
            />
          </Box>
        </FadeIn>

        <Grid container sx={{ rowGap: '200px', columnGap: '0px' }}>
          {gridData.map((data, index) => (

            <Grid item xs={12} sm={4} key={index}  >
              <FadeInOnView delay={index > 2 ? 0.2 : 0.9} >
                <GridItem data={data} />
              </FadeInOnView>
            </Grid>

          ))}
        </Grid>

      </Box>
      <NavBar dialogContent={() => <Image src={DialogImg} alt="dialog" />} />
      <Box position="fixed" right={163} top={378} height={600}>
        <ScrollBar value={value} onHandleScrollBar={handleChangeBarOfValue} />
      </Box>
    </Box >
  )
}