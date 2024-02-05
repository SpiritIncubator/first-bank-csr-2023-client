'use client'
import { Box } from '@mui/material';
import Button from '@/app/_components/Button/Button';
import { useSubscribe } from '@/app/hooks/useSubscribe';
import Image from 'next/image';



export default function Start({ onClickStart }: { onClickStart: () => void }) {
  return <Box boxSizing="border-box" width="2732px" minHeight="2048px" position="relative" >

    <Image
      src="/assets/stage3/stage3_control_start.svg"
      alt="stage3_control_start"
      fill />
    <Box position="absolute"
      width="1600px"
      height="510px"
      top="55%"
      left="50%"
      sx={{
        cursor: "pointer",
        transform: 'translate(-50%, -50%)',
        opacity: 0
      }}

      onClick={onClickStart}
    />
  </Box >
} 