'use client';

import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import Rating from '@/app/_components/Rating/Rating';
import useStore from '@/app/atoms/useStore';
import { useTranslation } from '@/app/_locales/hooks/useTranslation';
import Button from '@/app/_components/Button/Button';

import AirHintIcon from '@/app/_assets/images/airHint.svg';
import FullStarIcon from '@/app/_assets/images/fullStar.svg';
import SlashIcon from '@/app/_assets/images/slash.svg';
import UnitIcon from '@/app/_assets/images/unit.svg';
import FullStarDescriptionIcon from '@/app/_assets/images/fullStarDescription.svg';
import ResultFunnyIcon from '@/app/_assets/images/resultFunny.svg';
import DiviDer from '@/app/_assets/images/divider.svg'
import Loading from '@/app/_assets/images/questionLoading.svg'
import { answerList } from './spec';
import { caveat } from '@/app/layout';;

const LOADING_DELAY_TIME = 2000;

const ResultPage = () => {
  const [delayLoading, setDelayLoading] = useState(true);
  const questionAnswers = useStore(state => state.questionAnswer);
  const router = useRouter();
  const { t } = useTranslation('common');
  const score = questionAnswers.reduce((acc, cur) => {
    return acc + cur.score;
  }, 0);
  const hasAnsweredAllQuestions = questionAnswers.length === answerList.length;
  function renderAnswerList() {
    return answerList.map((answer, index) => {
      const questionNumber = index + 1;

      return (
        <Box key={`answer-${index}`} bgcolor="#F9F8F3" mt={4} borderRadius={2.5} px={3} pb={3.75}>
          <Box display="flex" flexDirection="column" alignItems="center">
            <Box height={90} textAlign="left" width="100%">
              <Typography height="100%" lineHeight={2} fontSize={45} color="#7DBD36" letterSpacing={8} className={caveat.className}>
                {String(questionNumber).padStart(2, '0')}
              </Typography>
            </Box>
            <Box mb={2.5}>
              <Box width={100} height={100} bgcolor="#E9E3D8" />
            </Box>
            <Box>
              <Typography lineHeight={2} letterSpacing={1.2} color="#594A39">
                {answer.content}
              </Typography>
            </Box>
          </Box>
        </Box>
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

  // if (!hasAnsweredAllQuestions) {
  //   router.push('/calculator');
  // }

  if (delayLoading) {
    return <Box width="100%" height="100%" display="flex" justifyContent="center" alignItems="center">
      <Image src={Loading} alt="loading" />
    </Box>
  }

  return (
    <Box pt={4} px={3}>
      <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
        <Typography fontSize={28} color="#7DBD36" fontWeight={900} className={caveat.className}>
          {t('title')}
        </Typography>
        <Box display="flex" width="100%" height={90} bgcolor="#958B73" borderRadius={5} border="5px solid #F2cD90" alignItems="center" pl={2} mt={1}>
          <Box flex={1}>
            <Image src={AirHintIcon} alt="AirHintIcon" width={75} height={50} />
          </Box>
          <Box width={150} fontWeight={900} textAlign="right">
            <Typography fontSize={45} color="#fff" letterSpacing={10}>
              {Number(score).toFixed(1)}
            </Typography>
          </Box>
          <Box width={84} height="100%" position="relative">
            <Box height="100%" position="absolute" top={5} right={5}>
              <Image src={SlashIcon} alt='slash' />
            </Box>
            <Box position="absolute" height="100%" top={30} right={40}>
              <Image src={UnitIcon} alt="unit" />
            </Box>
          </Box>
        </Box>
        <Box display="flex" justifyContent="center" mt={1.2}>
          <Typography letterSpacing={1} className={caveat.className}>
            CO2排放量以kg計
          </Typography>
        </Box>
      </Box>
      <Box mt={5} display="flex" justifyContent="center">
        <Image src={FullStarIcon} alt="visual" />
      </Box>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Box>
          <Image src={FullStarDescriptionIcon} alt="description" />
        </Box>
        <Box mt={1.2} mb={2.5}>
          <Rating rate={3} />
        </Box>
        <Box mb={10.5} maxWidth={342}>
          <Typography lineHeight={2} px={3} color="#594A39">
            自藝術之美延伸生態、歷史、文化相關創作、展演、娛樂者皆為此類。
          </Typography>
        </Box>
        <Image src={DiviDer} alt="divider" />
      </Box>
      {/* resolution area */}
      <Box pt={2.5} display="flex" flexDirection="column" alignItems="center" pb={10}>
        <Typography component="span" fontSize={20} fontWeight={700} className={caveat.className}>
          題目解答
        </Typography>
        <Box maxWidth={342}>
          {renderAnswerList()}
        </Box>
        <Box display="flex" flexDirection="column" alignItems="center" mt={10}>
          <Box>
            <Image src={ResultFunnyIcon} alt="result" />
          </Box>
          <Box my={3.75} px={3}>
            <Typography lineHeight={2} color="#594A39" letterSpacing={1} maxWidth={310}>
              自藝術之美延伸生態、歷史、文化相關創作、展演、娛樂者皆為此類。
            </Typography>
          </Box>
          <Button text='快去看看' styles={{ backgroundColor: '#BBC318', fontSize: 20, fontWeight: 900, padding: '12px 42px' }} />
        </Box>
      </Box>
    </Box>
  )
}

export default ResultPage
