'use client'

import React, { useState, useEffect } from 'react'
import { Box, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

import useStore from '@/app/atoms/useStore';
import PrevIcon from '@/app/_assets/images/prevBtn.svg';
import { caveat } from '@/app/layout';;
import { questionList } from './spec';

const MAX_QUESTION_COUNT = questionList.length;
const headLine = ['A', 'B', 'C'];

const QuestionsPage = () => {
  const router = useRouter();
  const { setQuestionAnswer } = useStore();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectAnswer] = useState<any[]>([]);
  const targetQuestion = questionList[currentQuestionIndex];

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


  return (
    <Box width="100%" height="100%" display="flex" flexDirection="column" alignItems="center">
      <Box width="100%" px={2.5} py={3} display="flex" alignItems="center" justifyContent="flex-start">
        <Box mr={1} display="flex" alignItems="center">
          <Image src={PrevIcon} alt="prev" onClick={checkNumberOfQuestion} />
        </Box>
        <Box display="flex" alignItems="center" position="relative">
          <Typography className={caveat.className} display="inline-block" fontSize={40} mr={1} color="#7DBD36" fontWeight={900}>
            {String(currentQuestionIndex + 1).padStart(2, '0')}
          </Typography>
          <Typography className={caveat.className} color="#948775" position="relative" top={8} right={2}>
            {` / ${MAX_QUESTION_COUNT}`}
          </Typography>
        </Box>
      </Box>
      <Box mb={5} display="flex" flexDirection="column" alignItems="center" width="85%" maxWidth={324}>
        <Box width={160} height={160} bgcolor="#E9E3D8" mt={2.5}>
        </Box>
        <Box mt={4} lineHeight={2} fontWeight={700} fontSize={20} letterSpacing={1} color="#594A39">
          {targetQuestion.description}
        </Box>
      </Box>
      <Box width="90%" maxWidth={396} display="flex" flexDirection="column" alignItems="center">
        {targetQuestion.options.map((option, index) => {
          return (
            <Box key={index} display="flex" alignItems="center" bgcolor="#F9F8F3" maxWidth={342} mb={2.5} py={2.5} pl={1} pr={2.5} borderRadius={5} style={{ cursor: 'pointer' }} onClick={() => updateSelectQuestion(index)}>
              <Box width={36} height={36} bgcolor="#BBC318" color="#fff" borderRadius={100} textAlign="center" lineHeight={2.25} mr={1.75}>{headLine[index]}</Box>
              <Box width={260}>
                <Typography lineHeight={2} fontSize={16} color="#594A39">{option.content}</Typography>
              </Box>
            </Box>
          )
        })}
      </Box>
    </Box>
  )
}

export default QuestionsPage