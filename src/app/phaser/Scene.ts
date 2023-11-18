'use client'
import Phaser from 'phaser';
import shareCanvas from './shareCanvas';

export default class Scene extends Phaser.Scene {
  constructor() {
    super('hello-world');
  }
  car: Phaser.Physics.Arcade.Sprite | undefined;
  cursors: Phaser.Types.Input.Keyboard.CursorKeys | undefined;
  leftArrow: HTMLButtonElement | undefined;
  rightArrow: HTMLButtonElement | undefined;
  moveLeft = false;
  moveRight = false;

  preload() {
    this.load.setBaseURL('/');
    // this.load.spritesheet('car', 'assets/car.png', {
    //   frameWidth: 256,
    //   frameHeight: 100,
    // });
    this.load.image('car', 'assets/car.png');
    this.load.image('grass', 'assets/grass.png');
    this.leftArrow = document.getElementById('leftArrow') as HTMLButtonElement;
    this.rightArrow = document.getElementById('rightArrow') as HTMLButtonElement;


  }

  create() {
    this.add.image(0, 0, 'grass');
    this.car = this.physics.add.sprite(50, 10, 'car');
    this.car.scale = 0.1;


    this.leftArrow?.addEventListener('mousedown', () => {
      this.moveLeft = true;
      console.log('this.moveLeft :', this.moveLeft);
    })

    this.rightArrow?.addEventListener('mousedown', () => {
      this.moveRight = true;
      console.log('this.moveRight :', this.moveRight);
    })

    this.leftArrow?.addEventListener('mouseup', () => {
      this.moveLeft = false;
      console.log('this.moveLeft :', this.moveLeft);
    })

    this.rightArrow?.addEventListener('mouseup', () => {
      this.moveRight = false;
      console.log('this.moveRight :', this.moveRight);
    })

    // const config = {
    // key: 'idle',
    // frames: this.anims.generateFrameNumbers('pet', {
    //   frames: [0, 10, 11],
    // }),
    // frameRate: 8,
    // repeat: -1,
    // yoyo: true,
    // repeatDelay: 1000,
    // };

    // this.anims.create(config);

    // try to control sprite by keyboard

    this.cursors = this.input.keyboard?.createCursorKeys();

    document.getElementById('share')?.addEventListener('click', () => {
      this.game.renderer.snapshot(shareCanvas);
    });


  }

  update() {

    if (this.moveLeft) {
      this.car?.setVelocityX(-100);
    }
    else if (this.moveRight) {
      this.car?.setVelocityX(100);
    } else {
      this.car?.setVelocityX(0);
      // this.car?.anims.play('turn');
    }

  }
}