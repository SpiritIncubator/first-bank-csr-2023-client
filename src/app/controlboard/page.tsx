'use client'
import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import { useSubscribe } from '@/hooks/useSubscribe';

type SubscribeType = {
  message: 'L' | 'R';
}

const ControlBoard = () => {
  const { registerRoomHelper } = useSubscribe<SubscribeType>({channel: 'subscribeChannel', room: 'controlBoard'});
  const { sendEvent } = registerRoomHelper();
  
  return (
    <Box>
      <h1>Control board</h1>
      <Box display="flex">
        <Button onClick={() => sendEvent({message: 'L'})}>Left</Button>
        <Button onClick={() => sendEvent({message: 'R'})}>Right</Button>
      </Box>
    </Box>
  )
}

export default ControlBoard