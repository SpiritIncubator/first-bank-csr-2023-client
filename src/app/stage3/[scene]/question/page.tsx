'use client';

import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import NextImage from 'next/image';
import Lottie from 'lottie-react';

import type { PhaseValueType } from '../../xstate/conversationMachine';

import FadeIn from '@/app/_components/Transitions/FadeIn';
import bg from '../../assets/scene2-bg-without-border.svg';
import Dialog1BubbleImg from '../../assets/rainRecycle/dialog1-bubble.svg';
import DialogBg from '../../assets/dialogBox.svg'
import lionAnimationData from '../../animationData/leo_2-11_normal_smile1.json';
import { ConversationContext } from '../../layout'
import Dialog1Bg from '../../assets/rainRecycle/rainCycle-bg-1.svg';
import Dialog1 from '../../assets/rainRecycle/dialog1.svg';
import Dialog2Bg from '../../assets/rainRecycle/rainCycle-bg-2.svg';
import Dialog2 from '../../assets/rainRecycle/dialog2.svg';

import Dialog3Animation from '../../animationData/rainCycle3.json'
import Dialog3 from '../../assets/rainRecycle/dialog3.svg';
import Dialog4Animation from '../../animationData/rainCycle4.json'
import Dialog4 from '../../assets/rainRecycle/dialog4.svg';
import Dialog5Animation from '../../animationData/rainCycle5.json'
import Dialog5 from '../../assets/rainRecycle/dialog5.svg';
import Dialog6Animation from '../../animationData/rainCycle6.json'
import Dialog6 from '../../assets/rainRecycle/dialog6.svg';
import Dialog7 from '../../assets/rainRecycle/dialog7.svg';
import Dialog8 from '../../assets/rainRecycle/dialog8.svg';

type PhaseType = {
  dialog: any;
  bg?: any;
  animation?: any;
}

const getCurrentPhaseImg = (currentPhaseInfo: PhaseValueType): PhaseType => {
  if (currentPhaseInfo.question === 'rainRecycle') {
    if (currentPhaseInfo.round === 1) {
      return {
        dialog: Dialog1,
        bg: Dialog1Bg,
      };
    }
    if (currentPhaseInfo.round === 2) {
      return {
        dialog: Dialog2,
        bg: Dialog2Bg,
      };
    }
    if (currentPhaseInfo.round === 3) {
      return {
        dialog: Dialog3,
        animation: Dialog3Animation,
      };
    }
    if (currentPhaseInfo.round === 4) {
      return {
        dialog: Dialog4,
        animation: Dialog3Animation,
      };
    }
    if (currentPhaseInfo.round === 5) {
      return {
        dialog: Dialog5,
        animation: Dialog4Animation,
      };
    }
    if (currentPhaseInfo.round === 6) {
      return {
        dialog: Dialog6,
        animation: Dialog5Animation,
      
      };
    }
    if (currentPhaseInfo.round === 7) {
      return {
        dialog: Dialog7,
        animation: Dialog4Animation,
      
      };
    }
    if (currentPhaseInfo.round === 8) {
      return {
        dialog: Dialog8,
        animation: Dialog6Animation,
      
      };
    }
  }

  if (currentPhaseInfo.question === 'aquaonics') {}
  
  if (currentPhaseInfo.question === 'solarPower') {}

  return {
    dialog: Dialog1,
    bg: Dialog1Bg,
  };
}

const Question = () => {
  const [imgLoaded, setImgLoaded] = useState(false);
  const currentPhaseInfo = ConversationContext.useSelector(state => state.context.phase);
  const stateAction = ConversationContext.useActorRef();

  useEffect(() => {
    setTimeout(() => {
      stateAction.send({ type: 'NEXT_TO_DIALOG_2' });
    }, 5000);

    setTimeout(() => {
      stateAction.send({ type: 'NEXT_TO_DIALOG_3' });
    }, 7000);

    setTimeout(() => {
      stateAction.send({ type: 'NEXT_TO_DIALOG_4' });
    }, 9000);

    setTimeout(() => {
      stateAction.send({ type: 'NEXT_TO_DIALOG_5' });
    }, 11000);

    setTimeout(() => {
      stateAction.send({ type: 'NEXT_TO_DIALOG_6' });
    }, 13000);

    setTimeout(() => {
      stateAction.send({ type: 'NEXT_TO_DIALOG_7' });
    }, 15000);

    setTimeout(() => {
      stateAction.send({ type: 'NEXT_TO_DIALOG_8' });
    }, 17000);
  }, [stateAction]);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    timer = setTimeout(() => {
      setImgLoaded(true);
    }, 1500);

    return () => {
      clearTimeout(timer);
    }
  }, []);

  const phaseParams = getCurrentPhaseImg(currentPhaseInfo);

  return (
    <Box position="relative" display="flex" justifyContent="center">
      <FadeIn>
        <NextImage src={bg} alt="Unresolved Question" priority={true} />
      </FadeIn>
      {imgLoaded && (
        <FadeIn>
          <Box sx={{ transform: "translateX(-50%)" }} position="absolute" top={0} left="50%">
            {phaseParams.animation && (
              <Lottie style={{width: 2560}} animationData={phaseParams.animation} loop />
            )}
            {phaseParams.bg && (
              <NextImage width={2560} src={phaseParams.bg} alt="Dialog1Bubble" priority={false} />
            )}
          </Box>
          <Box position="absolute" top={0} left={0}>
            <NextImage src={DialogBg} alt="dialog" priority={false} />
            <Box position="absolute" bottom={0}>
              <NextImage src={phaseParams.dialog} alt="dialog1" />
            </Box>
          </Box>
          <Box position="absolute" right={0} bottom={-200}>
            <Lottie animationData={lionAnimationData} loop />
          </Box>
        </FadeIn>
      )}
    </Box>
  )

}

export default Question