'use client'

import React, { useState, useEffect, useRef } from 'react'
import { Box, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

import FadeInHorizontal from '@/app/_components/Transitions/FadeInHorizontal';
import FadeIn from '@/app/_components/Transitions/FadeIn';
import useStore from '@/app/atoms/useStore';
import PrevIcon from '@/app/_assets/images/prevBtn.svg';
import { caveat } from '@/app/layout';
import {useTranslation} from '@/app/_locales/hooks/useTranslation'

import { questionList } from './spec';
import { StyledQuestionButton } from './style';

const MAX_QUESTION_COUNT = questionList.length;
const headLine = ['A', 'B', 'C'];

const QuestionsPage = () => {
  const router = useRouter();
  const { setQuestionAnswer } = useStore();
  const {t} = useTranslation('common');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectAnswer] = useState<any[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const targetQuestion = questionList[currentQuestionIndex];
  const currentQuestionInfo = selectedAnswer[currentQuestionIndex];

  function jumpToPreviousQuestion() {
    setCurrentQuestionIndex(prevStep => prevStep === 0 ? prevStep : prevStep - 1);
  }

  function jumpToNextQuestion() {
    setCurrentQuestionIndex(prevStep => prevStep === MAX_QUESTION_COUNT - 1 ? prevStep : prevStep + 1);
  }

  function toFinalStep(entireSelectedAnswer: any[]) {
    setQuestionAnswer(entireSelectedAnswer);
    router.push('/calculator/result');
  }

  function updateSelectQuestion(order: number) {
    setSelectAnswer(prevState => {
      const newSelectedAnswerList = [...prevState];
      newSelectedAnswerList[currentQuestionIndex] = { index: order, score: targetQuestion.options[order].score };

      if (currentQuestionIndex === MAX_QUESTION_COUNT - 1) {
        toFinalStep(newSelectedAnswerList);
      }

      return newSelectedAnswerList;
    });

    jumpToNextQuestion();
  }

  function checkNumberOfQuestion() {
    if (currentQuestionIndex === 0) {
      router.push('/calculator');

      return;
    }

    jumpToPreviousQuestion();
  }

  useEffect(() => {
    if (currentQuestionIndex === MAX_QUESTION_COUNT) {
      setQuestionAnswer(selectedAnswer);
      router.push('/calculator/result');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentQuestionIndex, selectedAnswer]);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTo(0, 0);
    }
  }, [currentQuestionIndex]);

  //  position="sticky" top={0} pb={6}
  return (
    <Box width="100%" display="flex" flexDirection="column" alignItems="center" height="120vh" ref={containerRef}>
      <Box width="100%" px={2.5} py={3} display="flex" alignItems="center" justifyContent="flex-start" >
        <Box mr={1} display="flex" alignItems="center" style={{cursor: 'pointer'}}>
          <Image src={PrevIcon} alt="prev" onClick={checkNumberOfQuestion} />
        </Box>
        <Box display="flex" alignItems="center" position="relative">
          <Typography className={caveat.className} display="inline-block" fontSize={40} mr={1} color="#7DBD36" fontWeight={900}>
            {String(currentQuestionIndex + 1).padStart(2, '0')}
          </Typography>
          <Typography className={caveat.className} color="#948775" position="relative" fontSize={20} top={8} right={2}>
            {` / ${String(MAX_QUESTION_COUNT).padStart(2, '0')}`}
          </Typography>
        </Box>
      </Box>
      <Box mb={5} width="85%" maxWidth={324}>
        <FadeIn display='flex' justifyContent='center' flexDirection='column' alignItems='center'>
          <Box width={160} height={160} bgcolor="#E9E3D8" mt={2.5}>
          </Box>
          <Box mt={4} lineHeight={2} fontWeight={700} fontSize={20} letterSpacing={2} color="#594A39" minHeight={76}>
            {t(targetQuestion.description)}
          </Box>
        </FadeIn>
      </Box>
      <Box width="90%" maxWidth={396} display="flex" flexDirection="column" alignItems="center">
        {targetQuestion.options.map((option, index) => {
          return (
            <FadeInHorizontal key={index} delay={index+1 * 0.3} direction='rtl' minHeight={104}>
              <StyledQuestionButton $isActive={index === currentQuestionInfo?.index} onClick={() => updateSelectQuestion(index)}>
                <Box width={36} height={36} bgcolor="#BBC318" fontWeight={600} color="#fff" borderRadius={100} textAlign="center" lineHeight={2.2} mr={1.75}>{headLine[index]}</Box>
                <Box width={260}>
                  <Typography lineHeight={2} fontSize={16} color="#594A39" letterSpacing={2}>{t(option.content)}</Typography>
                </Box>
              </StyledQuestionButton>
            </FadeInHorizontal>
          )
        })}
      </Box>
    </Box>
  )
}

export default QuestionsPage