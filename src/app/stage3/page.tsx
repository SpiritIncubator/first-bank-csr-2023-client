'use client';

import React, {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import { useRouter } from 'next/navigation';
import {useLottie} from 'lottie-react';

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
  const conversationState = ConversationContext.useSelector(state => state.value.root ?? {});
  const stateAction = ConversationContext.useActorRef();
  const router = useRouter();
  const [outerStateKey] = Object.keys(conversationState) as Array<keyof typeof conversationState> ?? [];
  const innerState = conversationState[outerStateKey];
  const [options, setOptions] = useState<AnimationOptions>({
    animationData: initialAnimation,
    loop: true,
    autoplay: true,
  })
  const { View, getDuration, } = useLottie(options);
  const videoDuration = getDuration() ?? 0;
  const isOverLimitation = videoDuration > 4;

  useEffect(() => {
    setTimeout(() => {
      stateAction.send({ type: 'NEXT_TO_START_STAGE2' });
    }, 3000);
  }, [stateAction]);

  useEffect(() => {
    if (innerState === 'stage2') {
      setOptions(prevState => ({...prevState, animationData: progressingAnimation}))
    }
  }, [innerState]);

  // useEffect(() => {
  //   let timeoutId: NodeJS.Timeout;
  //   if (innerState === 'stage2' && isOverLimitation) {
  //     timeoutId = setTimeout(() => {
  //     }, isOverLimitation ? DEFAULT_SECOND : videoDuration);
  //   }

  //   return () => {
  //     clearTimeout(timeoutId);
  //   }
  // }, [isOverLimitation, videoDuration, innerState]);

  useEffect(() => {
    if (innerState === 'stage2') {
      setTimeout(() => {
        stateAction.send({ type: 'NEXT_TO_SCENE1_INTRODUCTION' });
        router.push('/stage3/scene1');
      }, 10000);
    }
  }, [innerState, router, stateAction]);

  return (
    <Box width="100%" height="100%">
      {View}
    </Box>
  )
}

export default ConversationPage