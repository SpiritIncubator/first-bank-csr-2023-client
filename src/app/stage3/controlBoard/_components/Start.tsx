'use client';
import { Box } from '@mui/material';
import Button from '@/app/_components/Button/Button';
import { useSubscribe } from '@/app/hooks/useSubscribe';
import Image from 'next/image';
import { MAX_WIDTH, MAX_HEIGHT } from '@/app/stage3/controlBoard/constants';

export default function Start({ onClickStart }: { onClickStart: () => void }) {
	return (
		<Box
			boxSizing="border-box"
			width={`${MAX_WIDTH}px`}
			minHeight={`${MAX_HEIGHT}px`}
			position="relative">
			<Image src="/assets/stage3/stage3_control_start.svg" alt="stage3_control_start" fill />
			<Box
				position="absolute"
				width="1600px"
				height="510px"
				top="55%"
				left="50%"
				sx={{
					cursor: 'pointer',
					transform: 'translate(-50%, -50%)',
					opacity: 0,
				}}
				onClick={onClickStart}
			/>
		</Box>
	);
}
