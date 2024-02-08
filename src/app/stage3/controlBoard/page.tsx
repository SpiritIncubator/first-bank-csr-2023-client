'use client'
import { useState } from 'react'
import { Box } from '@mui/material';
import Start from './_components/Start';
import LookAtScreen from './_components/LookAtScreen';
import { useSubscribe } from '@/app/hooks/useSubscribe';
import Scene1QuestionList from './_components/Scene1QuestionList';
import Image from 'next/image';
import { STAGE3_ROOM } from '@/constants'

enum STEPS {
  START = "START",
  LOOK_AT_SCREEN = "LOOK_AT_SCREEN",
  SCENE1_QUESTION_LIST = "SCENE1_QUESTION_LIST",
}

export default function ControlBoard() {
  const [currentStep, setCurrentStep] = useState(STEPS.SCENE1_QUESTION_LIST);
  const { registerRoomHelper } = useSubscribe({ channel: 'subscribeChannel', room: 'stage3_controlBoard' });
  const { sendEvent } = registerRoomHelper();

  const onClickStart = () => {
    sendEvent({ messageType: 'start' });
    setCurrentStep(STEPS.LOOK_AT_SCREEN);
    console.log('start')
  }

  const screens = {
    [STEPS.START]: <Start onClickStart={onClickStart} />,
    [STEPS.LOOK_AT_SCREEN]: <LookAtScreen />,
    [STEPS.SCENE1_QUESTION_LIST]: <Scene1QuestionList />
  }
  return (
    <Box boxSizing="border-box" width="2732px" height="2048px" position="relative" >
      {screens[currentStep]}
    </Box>
  )
}