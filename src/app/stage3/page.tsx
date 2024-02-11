'use client';

import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { useRouter } from 'next/navigation';
import { useLottie } from 'lottie-react';

import { ConversationContext } from './layout';
import initialAnimation from './animationData/full_3-1_loop.json';
import progressingAnimation from './animationData/full_3-2_start.json';

type AnimationOptions = {
  animationData: any;
  loop: boolean;
  autoplay: boolean;
};

const DEFAULT_SECOND = 4000;

const ConversationPage = () => {
  const currentPhaseInfo = ConversationContext.useSelector(state => state.context.phase);
  const stateAction = ConversationContext.useActorRef();
  const router = useRouter();
  const [options, setOptions] = useState<AnimationOptions>({
    animationData: initialAnimation,
    loop: true,
    autoplay: true,
  })
  const { View, getDuration, } = useLottie(options);
  const videoDuration = getDuration() ?? 0;


  useEffect(() => {
    // received from socket event
    setTimeout(() => {
      stateAction.send({ type: 'NEXT_TO_START_STAGE2' });
    }, 3000);
  }, [stateAction]);

  useEffect(() => {
    if (currentPhaseInfo.level === 0 && currentPhaseInfo.round === 2) {
      setOptions(prevState => ({ ...prevState, animationData: progressingAnimation }))
    }
  }, [currentPhaseInfo.level, currentPhaseInfo.round]);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (currentPhaseInfo.round === 2 && currentPhaseInfo.level === 0) {
      const isOverLimitation = videoDuration > 4;
      const transformToMillisecond = videoDuration * 1000

      timeoutId = setTimeout(() => {
        stateAction.send({ type: 'NEXT_TO_SCENE1_INTRODUCTION' });
        router.push('/stage3/scene1');
      }, isOverLimitation ? transformToMillisecond : DEFAULT_SECOND);
    }

    return () => clearTimeout(timeoutId);
  }, [router, stateAction, currentPhaseInfo.round, currentPhaseInfo.level, videoDuration]);

  return (
    <Box width="100%" height="100%" maxWidth={2560} maxHeight={1440}>
      {View}
    </Box>
  )
}

export default ConversationPage