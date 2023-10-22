'use client'
import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
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
        scale: {
          mode: Phaser.Scale.WIDTH_CONTROLS_HEIGHT,
          parent: 'scene',
          width: '100%',
          height: '100%',
        },
        scene: [Scene],
      };

      new Phaser.Game(config)
    })()
  }, []);


  return <>
    <Box sx={{
      padding: "0 20px",
      width: "100%",
      margin: "0 auto"
    }}>

      <div id="scene"></div>
    </Box>
    <div id="share"></div>
  </>

};

export default Game;
