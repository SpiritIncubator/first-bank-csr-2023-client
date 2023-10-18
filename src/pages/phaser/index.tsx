'use client'
import React, { useEffect } from 'react';
import Phaser from 'phaser';
import Scene from './Scene';

const Game: React.FC = () => {


  useEffect(() => {
    const config: Phaser.Types.Core.GameConfig = {
      type: Phaser.AUTO,
      scale: {
        mode: Phaser.Scale.WIDTH_CONTROLS_HEIGHT,
        parent: 'scene',
        width: 100,
        height: 132,
      },
      scene: [Scene],
      pixelArt: true,
    };

    new Phaser.Game(config)
  }, []);
  return <>
    <div id="scene"></div>
    <div id="share"></div>
  </>

};

export default Game;
