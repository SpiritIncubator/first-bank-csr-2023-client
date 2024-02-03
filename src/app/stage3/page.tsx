'use client';

import React, {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import {useMachine} from '@xstate/react';
import {useLottie} from 'lottie-react';

import { conversationMachine } from './xstate/conversationMachine';
import initialAnimation from './animationData/full_3-1_loop.json';
import progressingAnimation from './animationData/full_3-2_start.json';

type AnimationOptions = {
  animationData: any;
  loop: boolean;
  autoplay: boolean;
};

const DEFAULT_SECOND = 4000;

const ConversationPage = () => {
  const [snapshot, send] = useMachine(conversationMachine);
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
      send({ type: 'START_TO_STEP2' });
    }, 3000);
  }, [send]);

  useEffect(() => {
    if (snapshot.matches('step2')) {
      setOptions(prevState => ({...prevState, animationData: progressingAnimation}))
    }
  }, [snapshot]);

  useEffect(() => {
    // if step was reached to 2, and 
    let timeoutId: NodeJS.Timeout;
    if (snapshot.matches('step2') && isOverLimitation) {
      timeoutId = setTimeout(() => {
        // send('OVER_LIMITATION');        
      }, isOverLimitation ? DEFAULT_SECOND : videoDuration);
    }

    return () => {
      clearTimeout(timeoutId);
    }
  }, [isOverLimitation, videoDuration, snapshot]);

  return (
    <Box width="100%" height="100%">
      {View}
    </Box>
  )
}

export default ConversationPage