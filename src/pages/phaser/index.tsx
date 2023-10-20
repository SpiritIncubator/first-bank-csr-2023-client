'use client'
import React, { useEffect } from 'react';;


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
          width: 100,
          height: 132,
        },
        scene: [Scene],
        pixelArt: true,
      };

      new Phaser.Game(config)
    })()
  }, []);


  return <>
    <div id="scene"></div>
    <div id="share"></div>
  </>

};

export default Game;
