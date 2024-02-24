'use client';
import { Box } from '@mui/material';
import Image from 'next/image';
import LookAtScreenFullSize from '@/app/stage3/assets/controlBoard/stage3_look_at_screen_full_size.svg';
import { MAX_WIDTH, MAX_HEIGHT } from '@/app/stage3/controlBoard/constants';

export default function Start() {
	return (
		<Box
			boxSizing="border-box"
			width={`${MAX_WIDTH}px`}
			height={`${MAX_HEIGHT}px`}
			position="relative">
			<Image src={LookAtScreenFullSize} alt="stage3_look_at_screen_full" fill />
		</Box>
	);
}
