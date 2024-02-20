'use client';

import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import Rating from '@/app/_components/Rating/Rating';
import useStore from '@/app/atoms/useStore';
import { useTranslation } from '@/app/_locales/hooks/useTranslation';
import FadeIn from '@/app/_components/Transitions/FadeIn';
import FadeInOnView from '@/app/_components/Transitions/FadeInOnView';
import StyleButton from '@/app/_components/Button/Button';

import BarZh from '@/app/_assets/images/bar-zh.svg';
import BarEn from '@/app/_assets/images/bar-en.svg';
import animationData from '../assets/animation/bird_1-3_side_loop.json';
import resultDataOne from '../assets/animation/leo_2-1_shake_item.json';
import resultDataTwo from '../assets/animation/leo_2-2_write_note.json';
import resultDataThree from '../assets/animation/leo_2-3_bottle.json';
import ResultPageTitle from '@/app/_assets/images/bar.svg'
import ResultFunnyIcon from '@/app/_assets/images/resultFunny.svg';
import GoLook from '@/app/_assets/images/go-look.svg';
import DiviDer from '@/app/_assets/images/divider.svg'
import Loading from '@/app/_assets/images/loading.svg'
import { answerList, answerDescription } from './spec';
import { caveat } from '@/app/layout';

const LOADING_DELAY_TIME = 2000;


function getStar(score: number) {
  if (score > 10) return 3;
  if (score > 5) return 2;

  return 1;
}

function getAnimationData(numberOfStar: number) {
  if (numberOfStar === 1) return resultDataOne;
  if (numberOfStar === 2) return resultDataTwo;
  if (numberOfStar === 3) return resultDataThree;
}

const ResultPage = () => {
  const [delayLoading, setDelayLoading] = useState(true);
  const questionAnswers = useStore(state => state.questionAnswer);
  const { t } = useTranslation('common');
  const { language } = useStore();

  const score = questionAnswers.reduce((acc, cur) => {
    return acc + cur.score;
  }, 0);
  const numberOfStar = getStar(score);
  const description = answerDescription[numberOfStar - 1];
  const hasAnsweredAllQuestions = questionAnswers.length === answerList.length;

  function renderAnswerList() {
    return answerList.map((answer, index) => {
      const questionNumber = index + 1;

      return (
        <FadeInOnView key={`answer-${index}`}>
          <Box bgcolor="#F9F8F3" mt={4} borderRadius={2.5} px={3} pb={3.75}>
            <Box display="flex" flexDirection="column" alignItems="center">
              <Box height={90} textAlign="left" width="100%">
                <Typography height="100%" lineHeight={2} fontSize={45} color="#7DBD36" letterSpacing={8} className={caveat.className}>
                  {String(questionNumber).padStart(2, '0')}
                </Typography>
              </Box>
              <Box mb={2.5}>
                <Image src={answer.imgSrc} alt="result-img" />
              </Box>
              <Box>
                <Typography lineHeight={2} letterSpacing={1.2} color="#594A39">
                  {t(answer.content)}
                </Typography>
              </Box>
            </Box>
          </Box>
        </FadeInOnView>
      )
    });
  }

  useEffect(() => {
    const intervalId = setTimeout(() => {
      setDelayLoading(false);
    }, LOADING_DELAY_TIME);

    return () => {
      clearInterval(intervalId);
    }
  }, []);

  if (delayLoading) {
    return <Box height="100vh" display="flex" justifyContent="center" alignItems="center">
      <FadeIn display='flex' flexDirection='column' position="relative" alignItems="center" marginTop="-100px">
        <Lottie animationData={animationData} loop />
        <Box position="absolute" bottom="10%">
          <Image src={Loading} alt="loading" />
        </Box>
      </FadeIn>
    </Box>
  }

  return (
    <Box pt={4} px={3} height="120vh">
      <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" mt={3}>
        <Image src={language === 'en' ? BarEn : BarZh} alt="bar-text" />
        {language === 'en' && <Image src={ResultPageTitle} alt="bar" />}
      </Box>
      <Box mt={5} display="flex" justifyContent="center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
            scale: {
              type: "spring",
              stiffness: 100,
            }
          }}
        >
          <Lottie animationData={getAnimationData(numberOfStar)} loop />
        </motion.div>
      </Box>
      <Box display="flex" flexDirection="column" alignItems="center">
        <FadeIn delay={1} display='flex' flexDirection='column' alignItems='center'>
          <Box>
            <Image src={description.title} alt="description" />
          </Box>
          <Box mt={1.2} mb={2.5}>
            <Rating rate={numberOfStar} />
          </Box>
        </FadeIn>
        <FadeIn delay={1.5} >
          <Box mb={10.5} maxWidth={342}>
            <Typography lineHeight={2} px={3} color="#594A39">
              {t(description.description)}
            </Typography>
          </Box>
        </FadeIn>
      </Box>
      <Box display="flex" flexDirection="column" alignItems="center" pb={10}>
        <FadeIn delay={2} display='flex' flexDirection='column' alignItems='center'>
          <Box mb={2.5}>
            <Image src={DiviDer} alt="divider" />
          </Box>
          <Typography component="span" fontSize={20} fontWeight={700} className={caveat.className} letterSpacing={1}>
            題目解答
          </Typography>
        </FadeIn>
        <Box maxWidth={342}>
          {renderAnswerList()}
        </Box>
        <Box display="flex" flexDirection="column" alignItems="center" mt={10}>
          <Box>
            <Image src={ResultFunnyIcon} alt="result" />
          </Box>
          <Box my={3.75} px={3}>
            <Typography lineHeight={2} color="#594A39" letterSpacing={2} maxWidth={310}>
              {t('result.link')}
            </Typography>
          </Box>
          <StyleButton component="a" target="_blank">
            <Typography target="_blank" component="a" href="https://www.firstbank.com.tw/sites/fcb/touch/1565687619608" minHeight="42px" display="flex" alignItems="center">
              <Image src={GoLook} alt="go-look" />
            </Typography>
          </StyleButton>
        </Box>
      </Box>
    </Box>
  )
}

export default ResultPage
