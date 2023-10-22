'use client'
import Phaser from 'phaser';
import shareCanvas from './shareCanvas';

export default class Scene extends Phaser.Scene {
  constructor() {
    super('hello-world');
  }
  car: Phaser.GameObjects.Sprite | undefined;
  cursors: Phaser.Types.Input.Keyboard.CursorKeys | undefined;


  preload() {
    this.load.setBaseURL('/');
    this.load.spritesheet('car', 'assets/car.png', {
      frameWidth: 256,
      frameHeight: 100,
    });
    this.load.image('grass', 'assets/grass.png');

    console.log(' : preload');
  }

  create() {
    this.add.image(200, 500, 'grass');

    const config = {
      key: 'idle',
      // frames: this.anims.generateFrameNumbers('pet', {
      //   frames: [0, 10, 11],
      // }),
      // frameRate: 8,
      // repeat: -1,
      // yoyo: true,
      // repeatDelay: 1000,
    };

    // this.anims.create(config);

    // try to control sprite by keyboard
    this.car = this.add.sprite(200, 200, 'car').play('idle');
    this.cursors = this.input.keyboard?.createCursorKeys();

    document.getElementById('share')?.addEventListener('click', () => {
      this.game.renderer.snapshot(shareCanvas);
    });


  }

  update() {

    // encounter type error here

    // this.car?.body.setZeroVelocity();
    // if (this.cursors?.up.isDown) {
    //   this.car?.animations.play('walk', 10, true);
    //   this.car?.body.moveUp(100)
    // }
    // else if (this.cursors?.down.isDown) {
    //   this.car?.animations.play('walk', 10, true);
    //   this.car?.body.moveDown(100);
    // }

  }
}