'use client'
import { Box } from '@mui/material';
import { useState } from 'react';
import Button from '@/app/_components/Button/Button';
import { useSubscribe } from '@/app/hooks/useSubscribe';
import Start from './_components/Start'
import LookAtScreen from './_components/LookAtScreen'
import { STAGE3_ROOM } from '@/constants'

enum STEPS {
  START = "START",
  LOOK_AT_SCREEN = "LOOK_AT_SCREEN",

}

export default function ControlBoard() {
  const [currentStep, setCurrentStep] = useState(STEPS.START);
  const { registerRoomHelper } = useSubscribe({ channel: 'subscribeChannel', room: 'stage3_controlBoard' });
  const { sendEvent } = registerRoomHelper();

  const onClickStart = () => {
    sendEvent({ messageType: 'start' });
    setCurrentStep(STEPS.LOOK_AT_SCREEN);
    console.log('start')
  }

  const screens = {
    [STEPS.START]: <Start onClickStart={onClickStart} />,
    [STEPS.LOOK_AT_SCREEN]: <LookAtScreen />
  }
  return (
    <Box boxSizing="border-box" width="2732px" height="2048px" position="relative" >
      {screens[currentStep]}
    </Box>
  )
}