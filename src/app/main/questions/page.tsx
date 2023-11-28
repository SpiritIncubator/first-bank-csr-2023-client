'use client'

import React, { useState } from 'react'
import { Box, Typography, Button } from '@mui/material';
import { useRouter } from 'next/navigation';

import useStore from '@/app/atoms/useStore';
import { questionList } from './spec';

const MAX_QUESTION_COUNT = questionList.length;

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

  function updateSelectQuestion(order: number) {
    setSelectAnswer(prevState => {
      const newSelectedAnswerList = [...prevState];
      newSelectedAnswerList[currentQuestionIndex] = { index: order, score: targetQuestion.options[order].score };
      return newSelectedAnswerList;
    });

    if (currentQuestionIndex === MAX_QUESTION_COUNT - 1) {
      setQuestionAnswer(selectedAnswer);
      router.push('/main/result');

      return;
    }

    jumpToNextQuestion();
  }


  return (
    <Box width="100%" height="100%" display="flex" flexDirection="column" alignItems="center">
      <Box>
        <Button onClick={jumpToPreviousQuestion}>previous page</Button>
        {currentQuestionIndex}
      </Box>
      <Box height="50%" display="flex" flexDirection="column" width="90%">
        <Box flex={1}>
          image
        </Box>
        <Box flex={1}>
          {targetQuestion.description}
        </Box>
      </Box>

      {targetQuestion.options.map((option, index) => {
        return (
          <Box key={index} onClick={() => updateSelectQuestion(index)}>
            <Typography>{option.content}</Typography>
          </Box>
        )
      })}
    </Box>
  )
}

export default QuestionsPage