'use client';

import Box from '@mui/material/Box';
import { useParams } from 'next/navigation';

import Scene1Question from './components/Scene1';
import Scene2Question from './components/Scene2';

const Question = () => {
  const params = useParams<{scene: string}>();
  const { scene } = params;

  return (
    <Box position="relative" display="flex" justifyContent="center">
      {scene === 'scene1' && <Scene1Question />}
      {scene === 'scene2' && <Scene2Question />}
    </Box>
  )

}

export default Question