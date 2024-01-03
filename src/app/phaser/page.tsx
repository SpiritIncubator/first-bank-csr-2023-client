// /** @format */

// 'use client';
// import React, { useEffect } from 'react';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import { useSubscribe } from '@/app/hooks/useSubscribe';
// import dynamic from 'next/dynamic';

// import 'src/app/globals.css';

// const Game: React.FC = () => {
// 	const { registerRoomHelper } = useSubscribe({
// 		channel: 'subscribeChannel',
// 		room: 'controlBoard',
// 	});
// 	const { receivedEvent, leaveRoomEvent } = registerRoomHelper();

// 	useEffect(() => {
// 		receivedEvent((msg) => console.log(msg, 'client'));

// 		return () => leaveRoomEvent();
// 		// eslint-disable-next-line react-hooks/exhaustive-deps
// 	}, []);

// 	useEffect(() => {
// 		if (!window || typeof window === 'undefined') return;

// 		(async () => {
// 			const Phaser = (await import('phaser')).default;
// 			const SceneModule = (await import('./Scene')).default;
// 			const Scene = SceneModule;

// 			const config: Phaser.Types.Core.GameConfig = {
// 				type: Phaser.AUTO,
// 				width: '100%',
// 				height: 600,
// 				scale: {
// 					mode: Phaser.Scale.WIDTH_CONTROLS_HEIGHT,
// 					parent: 'scene',
// 					// width: '800px',
// 					// height: '600px',
// 				},
// 				scene: [Scene],
// 				physics: {
// 					default: 'arcade',
// 				},
// 			};

// 			new Phaser.Game(config);
// 		})();
// 	}, []);

// 	return (
// 		<>
// 			<Box
// 				sx={{
// 					padding: '0 20px',

// 					margin: '0',
// 				}}>
// 				<div id='scene'></div>
// 			</Box>
// 			<Box
// 				sx={{
// 					display: 'flex',
// 					justifyContent: 'space-between',
// 				}}
// 				position='fixed'
// 				bottom='0'
// 				left='0'
// 				right='0'>
// 				<Button id='leftArrow' sx={{ background: 'white' }}>
// 					{' '}
// 					Left{' '}
// 				</Button>
// 				<Button id='rightArrow' sx={{ background: 'white' }}>
// 					{' '}
// 					Right{' '}
// 				</Button>
// 			</Box>

// 			<div id='share'></div>
// 		</>
// 	);
// };

// export default Game;

import React from 'react'

const page = () => {
  return (
    <div>page</div>
  )
}

export default page