'use client';

import { useEffect } from 'react';
import Box from '@mui/material/Box';
import Image from 'next/image';
import Lottie from 'lottie-react';

import bg from '../../assets/scene2-bg.svg';
import Dialog1BubbleImg from '../../assets/rainRecycle/dialog1-bubble.svg';
import DialogBg from '../../assets/dialogBox.svg'
import lionAnimationData from '../../animationData/leo_2-11_normal_smile1.json';
import { ConversationContext } from '../../layout'
import Dialog1 from '../../assets/rainRecycle/dialog1.svg';
import Dialog2 from '../../assets/rainRecycle/dialog2.svg';

const getCurrentPhaseImg = (currentPhaseInfo: any) => {
  if (currentPhaseInfo.round === 2) {
    return Dialog1;
  }
  if (currentPhaseInfo.round === 3) {
    return Dialog2;
  }
  return Dialog1;

}

const Question = () => {
  const currentPhaseInfo = ConversationContext.useSelector(state => state.context.phase);
  const stateAction = ConversationContext.useActorRef();

  useEffect(() => {
    setTimeout(() => {
      stateAction.send({ type: 'NEXT_TO_DIALOG_2' });
    }, 5000);
  }, [stateAction]);

  return (
    <Box position="relative">
      <Image src={bg} alt="Unresolved Question" />
      <Box sx={{transform: "translateX(-50%)"}} position="absolute" top={0} left="50%">
        <Image src={Dialog1BubbleImg} alt="Dialog1Bubble" />
      </Box>
      <Box position="absolute" top={0} left={0}>
        <Image src={DialogBg} alt="dialog" priority />
        <Box position="absolute" bottom={0}>
          <Image src={getCurrentPhaseImg(currentPhaseInfo)} alt="dialog1" />
        </Box>
      </Box>
      <Box position="absolute" right={0} bottom={-200}>
        <Lottie animationData={lionAnimationData} loop />
      </Box>
    </Box>
  )

}

export default Question