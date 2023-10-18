'use client'
import Phaser from 'phaser';
import shareCanvas from './shareCanvas';

export default class RoomScene extends Phaser.Scene {
  constructor() {
    super('hello-world');
  }

  preload() {
    this.load.setBaseURL('/');
    this.load.spritesheet('pet', 'assets/car.png', {
      frameWidth: 17,
      frameHeight: 22,
    });
    this.load.image('floor', 'assets/grass.png');

    console.log(' : preload');
  }

  create() {
    this.add.image(50, 50, 'floor');
    const config = {
      key: 'idle',
      frames: this.anims.generateFrameNumbers('pet', {
        frames: [0, 10, 11],
      }),
      frameRate: 8,
      repeat: -1,
      yoyo: true,
      repeatDelay: 1000,
    };

    this.anims.create(config);
    this.add.sprite(50, 50, 'pet').play('idle');

    document.getElementById('share')?.addEventListener('click', () => {
      this.game.renderer.snapshot(shareCanvas);
    });
  }
}