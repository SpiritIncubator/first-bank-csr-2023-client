'use client'
import { Box } from '@mui/material';
import Button from '@/app/_components/Button/Button';
import { useSubscribe } from '@/app/hooks/useSubscribe';
import Image from 'next/image';
import { STAGE3_ROOM } from '@/constants'

export default function ControlBoard() {
  const { registerRoomHelper } = useSubscribe({ channel: 'subscribeChannel', room: 'stage3_controlBoard' });
  const { sendEvent } = registerRoomHelper();

  const onClickStart = () => {
    sendEvent({ messageType: 'start' });
    console.log('start')
  }
  return (
    <Box boxSizing="border-box" width="1366px" height="1024px" position="relative" >

      <Image
        src="/assets/stage3/stage3_control_start.svg"
        alt="stage3_control_start"
        fill />
      <Box position="absolute"
        width="800px"
        height="255px"
        top="55%"
        left="50%"
        sx={{
          cursor: "pointer",
          transform: 'translate(-50%, -50%)',
          opacity: 0
        }}

        onClick={onClickStart}
      />
    </Box>
  )
}