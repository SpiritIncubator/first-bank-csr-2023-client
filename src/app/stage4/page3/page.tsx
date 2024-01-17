'use client'

import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Image from 'next/image';

import ScrollBar, { useScrollBar } from '@/app/_components/ScrollBar';

import DialogImg from '../_assets/stage4-dialog.svg';
import Header from '../_components/Header';
import NavBar from '../_components/NavBar/NavBar'
import FadeIn from '@/app/_components/Transitions/FadeIn';

const subtitle = '資金用途不限於特定目的。透過長期監控ESG指標，將企業授信戶對溫室氣體排放量、電力、能源及廢棄物總量管控等永續績效與貸款利率定價連結，若達成相關ESG績效指標即可降低融資成本，鼓勵企業授信戶積極管理其低碳轉型風險，並以此議合方式支持落實ESG治理之企業授信戶'


const Page = () => {
  const { containerRef, value, handleChangeBarOfValue } = useScrollBar({ loaded: true })

  return (
    <Box px="210px" py="151px" mr="auto" mb="320px" position="relative" ref={containerRef} height={2160} overflow="scroll">
      <Box maxWidth="2404px">
        <Box pt={16.75} pl={26.25} pr={20.375}>
          <Box position="relative">
            <FadeIn>
              <Header subTitle={subtitle} />
            </FadeIn>
            <FadeIn delay={0.3}>
              <Box ref={containerRef} width={2404} height={1200} bgcolor=" rgba(233, 227, 216, 1)" mt={15} />
            </FadeIn>
          </Box>
          <Box position="fixed" top={200} right={183} height={600}>
            <ScrollBar value={value} onHandleScrollBar={handleChangeBarOfValue} />
          </Box>
          <NavBar dialogContent={() => <Image src={DialogImg} alt="dialog" />} />
        </Box>
      </Box>
    </Box>
  )
}

export default Page