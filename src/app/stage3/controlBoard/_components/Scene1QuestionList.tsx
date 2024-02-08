import { Box } from '@mui/material';
import Image from 'next/image';
import { useState } from 'react'

const QUEST_LIST = [
  {
    name: "question1",
    imageUrl: "/assets/stage3/stage3_question_button.svg",
  },
  {
    name: "question2",
    imageUrl: "/assets/stage3/stage3_question_button.svg",
  },
  {
    name: "question3",
    imageUrl: "/assets/stage3/stage3_question_button.svg",
  }
]


export default function Scene1QuestionList() {
  const [answeredQuestionIndex, setAnsweredQuestionIndex] = useState<number[]>([]);
  console.log('answeredQuestionIndex :', answeredQuestionIndex);
  const onClickQuestion = (index: number) => () => {
    setAnsweredQuestionIndex(prev => [...prev, index]);
  }
  return <Box width="2732px" minHeight="2048px" sx={{
    backgroundImage: "url(/assets/stage3/background.svg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    pt: "205px"
  }}>
    <Box mx="auto" mb="160px" position="relative" width="1854px" height="462px" textAlign="center">
      <Image
        src="/assets/stage3/stage3_choose_one.svg"
        alt="stage3_choose_one"
        fill />
    </Box>
    <Box maxWidth="1500px" mx="auto"
      display="flex"
      justifyContent="space-between"
      alignItems="center" height="100%">
      {
        QUEST_LIST.map((question, index) => {
          const isAnswered: boolean = answeredQuestionIndex.includes(index);
          return <Box
            display="flex"
            flexDirection="column"
            key={`${question.name}-${index}`}
            alignItems="center"
            onClick={onClickQuestion(index)}>
            <Box bgcolor={isAnswered ? "yellow" : "gray"} height="400px" minWidth="400px" mb="100px" />
            <Image
              src="/assets/stage3/stage3_question_button.svg"
              alt="question button"
              width="320"
              height="100"
            />
          </Box>
        })
      }
    </Box >
  </Box >
}