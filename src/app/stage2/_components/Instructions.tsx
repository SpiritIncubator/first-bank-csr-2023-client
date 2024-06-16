import React, { useState } from 'react';
import { Box, Typography, Button, Modal } from '@mui/material';

import BackToHome from '@/app/_assets/images/backToHome.svg';
import FootButton from '@/app/_assets/images/FootButton.svg';
import Image from 'next/image';

const Instructions = ({ onClickGoHome }: { onClickGoHome: () => void }) => {
	return (
		<Box
			display="flex"
			flexDirection="column"
			alignItems="center"
			height="100vh"
			width="100vw"
			padding="234px 189px"
			bgcolor="#FDFDFB">
			<Box width="100%" display="flex" justifyContent="flex-end" mb="190px" onClick={onClickGoHome}>
				<Image src={BackToHome} alt="back to home" width={277} height={96} />
			</Box>
			<Box width="1600px" height="2800px" bgcolor="gray">
				Pic
			</Box>
		</Box>
	);
};

export const InstructionButton: React.FC = () => {
	const [open, setOpen] = useState(false);
	console.log('open :', open);

	const toggleOpen = () => setOpen(prev => !prev);

	return (
		<>
			<Box position="fixed" bottom="130px" right="130px">
				<Image
					src={FootButton}
					alt="instruction-button"
					width={140}
					height={175}
					onClick={toggleOpen}
				/>
			</Box>

			<Box
				position="fixed"
				zIndex="9999999"
				bgcolor="white"
				right={open ? '0' : '-100%'}
				top="0"
				display="flex"
				justifyContent="center"
				alignItems="center"
				height="100vh"
				width="100vw"
				boxSizing="border-box"
				// style={{ transition: 'right 0.5s ease-in-out' }}
			>
				<Instructions onClickGoHome={toggleOpen} />
			</Box>
		</>
	);
};
