'use client'

import { useEffect } from 'react';
import Box from '@mui/material/Box';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import useSoundEffect from '../hooks/useSoundEffects';

import Scene1Page from './scene1';
import Scene2Page from './scene2';
import Scene1Bg from '../assets/stage3-bg.svg';
import DialogBorder from '../assets/scene1-border.svg';
import DialogBg from '../assets/scene1-bg.svg';
import { ConversationContext } from '../layout';

const ScenePage = () => {
  const conversationState = ConversationContext.useSelector(state => state.value.root ?? {});
  const params = useParams<Record<'scene', keyof typeof conversationState>>()
  const { loopPlayBackgroundScene1, loopPlayBackgroundScene2, stop } = useSoundEffect();
  const { scene } = params;

  useEffect(() => {
    if (scene === 'scene1') {
      loopPlayBackgroundScene1();
    }

    if (scene === 'scene2') {
      loopPlayBackgroundScene2();
    }

    return () => {
      stop();
    }
  }, [scene]);

  return (
    <Box position="relative" width="100%" height="100%">
      {scene === 'scene1' && <Scene1Page />}
      {scene === 'scene2' && <Scene2Page />}
    </Box>
  )
}

export default ScenePage;