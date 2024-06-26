import React, { useState } from 'react';
import { Box, Typography, Button, Modal } from '@mui/material';
import Image from 'next/image';

import BackToHome from '@/app/_assets/images/backToHome.svg';
import FootButton from '@/app/_assets/images/FootButton.svg';
import NextButton from '@/assets/back_right.svg';
import NextActiveButton from '@/assets/back_right_active.svg';
import PreviousButton from '@/assets/back_left.svg';
import PreviousActiveButton from '@/assets/back_left_active.svg';
import ImageButton from '@/app/_components/ImageButton/ImageButton';
import FadeInHorizontal from '@/app/_components/Transitions/FadeInHorizontal';
import QA1Img from '@/assets/1.svg';
import QA2Img from '@/assets/2.svg';
import QA3Img from '@/assets/3.svg';
import QA4Img from '@/assets/4.svg';
import QA5Img from '@/assets/5.svg';
import QA6Img from '@/assets/6.svg';

type PageType = {
	title: string;
	imgPath: string;
};

const IntroductionPages: PageType[] = [
	{
		title: 'Introduction1',
		imgPath: QA1Img
	},
	{
		title: 'Introduction2',
		imgPath: QA2Img
	},
	{
		title: 'Introduction3',
		imgPath: QA3Img
	},
	{
		title: 'Introduction4',
		imgPath: QA4Img
	},
	{
		title: 'Introduction5',
		imgPath: QA5Img
	},
	{
		title: 'Introduction6',
		imgPath: QA6Img
	},
];

const Instructions = ({ onClickGoHome, title, imgPath }: { onClickGoHome: () => void, } & PageType) => {
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
			<Image priority={true} width={1600} height={2800} src={imgPath} alt={title} />
		</Box>
	);
};

export const InstructionButton: React.FC = () => {
	const [open, setOpen] = useState(false);
	const [pages, setPages] = useState(0);
	const page = IntroductionPages[pages];
	const hasPreviousButton = pages !== 0;
	const hasNextButton = pages !== IntroductionPages.length - 1;

	const toggleOpen = () => setOpen(prev => !prev);

	function jumpToNextPage() {
		if (hasNextButton) {
			setPages(prev => prev + 1);
		}
	}

	function jumpToPreviousPage() {
		if (hasPreviousButton) {
			setPages(prev => prev - 1);
		}
	}

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
				zIndex="1000"
				bgcolor="white"
				right={open ? '0' : '-100%'}
				top="0"
				display="flex"
				justifyContent="center"
				alignItems="center"
				height="100vh"
				width="100vw"
				boxSizing="border-box"
				style={{ transition: 'right 0.5s ease-in-out' }}
			>
				<Box zIndex={9999} height="100%" display="flex" position="absolute" left={0} alignItems="center">
					{hasPreviousButton && (
						<ImageButton
							width="143px"
							height="283px"
							src={PreviousButton}
							activeImageSrc={PreviousActiveButton}
							onClick={jumpToPreviousPage}
						/>
					)}
				</Box>
				<FadeInHorizontal delay={0.5} direction='rtl' key={`${pages}/description`}>
					<Instructions onClickGoHome={toggleOpen} {...page} />
				</FadeInHorizontal>
				{hasNextButton && (
					<Box zIndex={9999} height="100%" display="flex" position="absolute" right={0} alignItems="center">
						<ImageButton
							width="143px"
							height="283px"
							src={NextButton}
							activeImageSrc={NextActiveButton}
							onClick={jumpToNextPage}
						/>
					</Box>
				)}
			</Box>
		</>
	);
};
