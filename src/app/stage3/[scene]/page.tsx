'use client'

import { useEffect } from 'react';
import Box from '@mui/material/Box';
import Image from 'next/image';
import { useParams } from 'next/navigation';

import Scene1Bg from '../assets/stage3-bg.svg';
import DialogBorder from '../assets/scene1-border.svg';
import DialogBg from '../assets/scene1-bg.svg';
import { ConversationContext } from '../layout';

const Scene1Page = () => {
  const conversationState = ConversationContext.useSelector(state => {
    console.log(state, 'state')
    return state.value.root ?? {};
  });
  console.log(conversationState, 'conversationState')
  // const params = useParams<Record<'scene', keyof typeof conversationState>>();
  // console.log(conversationState, 'conversationState')
  // const innerState = conversationState[params.scene];
  // const stateAction = ConversationContext.useActorRef();

  // useEffect(() => {
  //   if (innerState!.introduction === 'stage1') {
  //     setTimeout(() => {
  //       stateAction.send({type: 'NEXT_TO_SCENE1_INTRODUCTION_PART_TWO'})
  //     }, 2000)
  //   }
  // }, [innerState, stateAction]);

  return (
    <Box position="relative" width="100%" height="100%">
      <Image src={Scene1Bg} alt="scene1" />
      <Box position="absolute" bottom={60} left="50%" sx={{transform: 'translateX(-50%)'}}>
        <Image src={DialogBorder} alt="dialog" />
      </Box>
      <Box position="absolute" bottom={75} left="50%" sx={{ transform: 'translateX(-50%)' }}>
        <Image src={DialogBg} alt="dialog-bg" />
      </Box>
      <Box position="absolute" bottom={75} left="50%" sx={{ transform: 'translateX(-50%)' }}>
        {/* <Box fontSize={100}>{innerState!.introduction === 'stage1' ? 'Cool1' : 'Cool2'}</Box> */}
      </Box>
    </Box>
  )
}

export default Scene1Page;