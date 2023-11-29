'use client'

import React, { useState } from 'react'
import { Box, Typography, Button } from '@mui/material';
import { useRouter } from 'next/navigation';

import useStore from '@/app/atoms/useStore';
import { questionList } from './spec';

const MAX_QUESTION_COUNT = questionList.length;
const headLine = ['A', 'B', 'C', 'D'];

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
          <Box key={index} display="flex" alignItems="center" bgcolor="#F9F8F3" mb={2.5} py={2.5} pl={3.5} pr={4.5} borderRadius={5} style={{ cursor: 'pointer'}} onClick={() => updateSelectQuestion(index)}>
            <Box width={36} height={36} bgcolor="#BBC318" color="#fff" borderRadius={100} textAlign="center" lineHeight={2} mr={3.5}>{headLine[index]}</Box>
            <Box width={260}>
              <Typography lineHeight={2}>{option.content}</Typography>
            </Box>
          </Box>
        )
      })}
    </Box>
  )
}

export default QuestionsPage