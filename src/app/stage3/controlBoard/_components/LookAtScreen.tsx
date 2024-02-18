'use client'
import { Box } from '@mui/material';
import Image from 'next/image';
import LookAtScreenFullSize from '@/app/stage3/assets/controlBoard/stage3_look_at_screen_full_size.svg';



export default function Start() {
  return <Box boxSizing="border-box" width="2732px" minHeight="2048px" position="relative">
    <Image
      src={LookAtScreenFullSize}
      alt="stage3_look_at_screen_full"
      fill />
  </Box>
} 