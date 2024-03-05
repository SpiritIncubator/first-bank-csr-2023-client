'use client'

import { useEffect } from 'react';
import Box from '@mui/material/Box';
import Image from 'next/image';
import { useParams } from 'next/navigation';

import Scene1Page from './scene1';
import Scene2Page from './scene2';
import Scene1Bg from '../assets/stage3-bg.svg';
import DialogBorder from '../assets/scene1-border.svg';
import DialogBg from '../assets/scene1-bg.svg';
import { ConversationContext } from '../layout';

const ScenePage = () => {
  const conversationState = ConversationContext.useSelector(state => state.value.root ?? {});
  const params = useParams<Record<'scene', keyof typeof conversationState>>()
  const { scene } = params;

  return (
    <Box position="relative" width="100%" height="100%">
      {scene === 'scene1' && <Scene1Page />}
      {scene === 'scene2' && <Scene2Page />}
    </Box>
  )
}

export default ScenePage;