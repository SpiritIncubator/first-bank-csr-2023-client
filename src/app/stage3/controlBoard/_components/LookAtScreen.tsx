'use client'
import { Box } from '@mui/material';
import Button from '@/app/_components/Button/Button';
import { useSubscribe } from '@/app/hooks/useSubscribe';
import Image from 'next/image';



export default function Start() {
  return <Box boxSizing="border-box" width="2732px" minHeight="2048px" position="relative">
    <Image
      src="/assets/stage3/stage3_look_at_screen.svg"
      alt="stage3_look_at_screen"
      fill />
  </Box >
} 