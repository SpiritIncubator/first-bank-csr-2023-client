'use client';

import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import NextImage from 'next/image';
import Lottie from 'lottie-react';

import FadeIn from '@/app/_components/Transitions/FadeIn';
import bg from '../../assets/scene2-bg-without-border.svg';
import Dialog1BubbleImg from '../../assets/rainRecycle/dialog1-bubble.svg';
import DialogBg from '../../assets/dialogBox.svg'
import lionAnimationData from '../../animationData/leo_2-11_normal_smile1.json';
import { ConversationContext } from '../../layout'
import Dialog1 from '../../assets/rainRecycle/dialog1.svg';
import Dialog2 from '../../assets/rainRecycle/dialog2.svg';
import Dialog3 from '../../assets/rainRecycle/dialog3.svg';
import Dialog4 from '../../assets/rainRecycle/dialog4.svg';
import Dialog5 from '../../assets/rainRecycle/dialog5.svg';
import Dialog6 from '../../assets/rainRecycle/dialog6.svg';
import Dialog7 from '../../assets/rainRecycle/dialog7.svg';
import Dialog8 from '../../assets/rainRecycle/dialog8.svg';

const getCurrentPhaseImg = (currentPhaseInfo: any) => {
  if (currentPhaseInfo.round === 2) {
    return Dialog1;
  }
  if (currentPhaseInfo.round === 3) {
    return Dialog2;
  }
  if (currentPhaseInfo.round === 4) {
    return Dialog3;
  }
  if (currentPhaseInfo.round === 5) {
    return Dialog4;
  }
  if (currentPhaseInfo.round === 6) {
    return Dialog5;
  }
  if (currentPhaseInfo.round === 7) {
    return Dialog6;
  }
  if (currentPhaseInfo.round === 8) {
    return Dialog7;
  }
  if (currentPhaseInfo.round === 9) {
    return Dialog8;
  }
  return Dialog1;

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

  return (
    <Box position="relative" display="flex" justifyContent="center">
      <FadeIn>
        <NextImage src={bg} alt="Unresolved Question" priority={true} />
      </FadeIn>
      {imgLoaded && (
        <FadeIn>
          <Box sx={{ transform: "translateX(-50%)" }} position="absolute" top={0} left="50%">
            
            <NextImage src={Dialog1BubbleImg} alt="Dialog1Bubble" priority={false} />
          </Box>
          <Box position="absolute" top={0} left={0}>
            <NextImage src={DialogBg} alt="dialog" priority={false} />
            <Box position="absolute" bottom={0}>
              <NextImage src={getCurrentPhaseImg(currentPhaseInfo)} alt="dialog1" />
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