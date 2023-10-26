'use client'
import React, { useEffect } from 'react';
import Box from '@mui/material/Box';

import Button from '@mui/material/Button';
import 'src/app/globals.css'


const Game: React.FC = () => {


  useEffect(() => {
    if (!window || typeof window === 'undefined') return;

    (async () => {
      const Phaser = await import('phaser')
      const SceneModule = await import('./Scene');
      const Scene = SceneModule.default;

      const config: Phaser.Types.Core.GameConfig = {
        type: Phaser.AUTO,
        width: "100%",
        height: 600,
        scale: {
          mode: Phaser.Scale.WIDTH_CONTROLS_HEIGHT,
          parent: 'scene',
          // width: '800px',
          // height: '600px',
        },
        scene: [Scene],
        physics: {
          default: "arcade",
        },
      };

      new Phaser.Game(config)
    })()
  }, []);


  return <>

    <Box sx={{
      padding: "0 20px",

      margin: "0"
    }}>

      <div id="scene"></div>
    </Box>
    <Box sx={{
      display: 'flex',
      justifyContent: 'space-between',
    }} position="fixed" bottom="0" left="0" right="0">
      <Button id="leftArrow" sx={{ background: "white" }}> Left </Button>
      <Button id="rightArrow" sx={{ background: "white" }}> Right </Button>
    </Box>

    <div id="share"></div>
  </>

};

export default Game;
