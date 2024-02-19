import { Box } from '@mui/material';
import { useContext } from 'react';
import Image from 'next/image';
import { useState } from 'react'
import { useSubscribe } from '@/app/hooks/useSubscribe';
import { QuestNames } from '@/app/stage3/constants';
import ImageButton from '@/app/_components/ImageButton/ImageButton';
import Stage3ChooseOne from '@/app/stage3/assets/controlBoard/stage3_choose_one.svg';
import QuestionButton from '@/app/stage3/assets/controlBoard/stage3_question_button.svg';
import { ControlBoardContext } from '@/app/stage3/context/ControlBoardContext';
import QuestionButtonActive from '@/app/stage3/assets/controlBoard/stage3_question_button_active.svg';

const QUEST_LIST = [
  {
    name: QuestNames.RAIN_RECYCLE,
    imageUrl: QuestionButton,
  },
  {
    name: QuestNames.AQUAPONICS,
    imageUrl: QuestionButton,
  },
  {
    name: QuestNames.SOLAR_POWER,
    imageUrl: QuestionButton,
  }
]


export default function Scene2QuestionList() {
  const { registerRoomHelper } = useSubscribe({ channel: 'subscribeChannel', room: 'stage3_controlBoard' });
  const { sendEvent } = registerRoomHelper();

  const { questStatus } = useContext(ControlBoardContext);
  console.log('questStatus :', questStatus);
  const [answeredQuestionIndex, setAnsweredQuestionIndex] = useState<number[]>([]);
  const onClickQuestion = (name: QuestNames) => () => {
    console.log('name :', name);
    sendEvent({ messageType: `${name}:start` });
  }

  return <Box width="2732px" minHeight="2048px" sx={{
    backgroundImage: "url(/assets/stage3/background.svg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    pt: "205px"
  }}>
    <Box mx="auto" mb="120px" position="relative" width="1854px" height="462px" textAlign="center">
      <Image
        src={Stage3ChooseOne}
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
            onClick={onClickQuestion(question.name)}>
            <Box bgcolor={isAnswered ? "yellow" : "gray"} height="400px" minWidth="400px" mb="100px" />
            <ImageButton
              width="100%"
              height="200px"
              src={QuestionButton}
              activeImageSrc={QuestionButtonActive}
            />

          </Box>
        })
      }
    </Box >
  </Box >
}