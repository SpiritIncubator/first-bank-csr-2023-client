'use client';

import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import styled from '@mui/material/styles/styled';
import CircularProgress from '@mui/material/CircularProgress';
import ScrollBar, { useScrollBar } from '../_components/ScrollBar';
import useMessageBoard from './hooks';
import MessageCard from './components/MessageCard/MessageCard';
import BgIcon from './assets/bg.svg';
import title from './assets/title.svg';
import colors from '@/constants/colors';
import CardQueueAnimation from '../_components/Transitions/CardQueued';
import { MessageCardType } from '@/app/messageBoard/hooks';

import LionBirdInBlue from '@/lottieAnimations/stage5-lion-bird-in-Blue.json';
import LionBirdInGreen from '@/lottieAnimations/stage5-lion-bird-in-Green.json';
import LionBirdInPink from '@/lottieAnimations/stage5-lion-bird-in-Pink.json';
import LionBirdInYellow from '@/lottieAnimations/stage5-lion-bird-in-Yellow.json';

import LionWriteBlue from '@/lottieAnimations/stage5-lion-write-Blue.json';
import LionWritePink from '@/lottieAnimations/stage5-lion-write-Pink.json';
import LionWriteYellow from '@/lottieAnimations/stage5-lion-write-Yellow.json';
import LionWriteGreen from '@/lottieAnimations/stage5-lion-write-Green.json';
import Lottie from 'lottie-react';
import { NoteColor } from '@/types/index';

const StyledBox = styled(Box)`
	::-webkit-scrollbar {
		display: none;
	}
`;

const lionBirdInColorMapping = {
	[NoteColor.YELLOW]: LionBirdInYellow,
	[NoteColor.PINK]: LionBirdInPink,
	[NoteColor.BLUE]: LionBirdInBlue,
	[NoteColor.GREEN]: LionBirdInGreen,
};

const lionWriteColorMapping = {
	[NoteColor.YELLOW]: LionWriteYellow,
	[NoteColor.PINK]: LionWritePink,
	[NoteColor.BLUE]: LionWriteBlue,
	[NoteColor.GREEN]: LionWriteGreen,
};

const Page = () => {
	const [currentNoteColor, setCurrentNoteColor] = useState<NoteColor>(NoteColor.YELLOW);
	const [currentAnimation, setCurrentAnimation] = useState<any>(LionWriteYellow);
	const [isInitialLoad, setIsInitialLoad] = useState(true);
	const { messages, loaded, nonKeepMessages } = useMessageBoard();
	const messageLength = useRef(messages.length);

	const { containerRef, value, handleChangeBarOfValue } = useScrollBar({ loaded });

	useEffect(() => {
		if (isInitialLoad) {
			setIsInitialLoad(false);
		} else if (messages.length > messageLength.current) {
			const latestMessageColor = nonKeepMessages[0];
			setCurrentNoteColor(latestMessageColor.color as NoteColor);
			setCurrentAnimation(
				lionBirdInColorMapping[latestMessageColor.color as NoteColor] || LionBirdInYellow,
			);
		}
		messageLength.current = messages.length;
	}, [messages.length, isInitialLoad]);

	const handleAnimationComplete = () => {
		setCurrentAnimation((lionWriteColorMapping[currentNoteColor] as any) || LionWriteYellow);
	};

	return (
		<Box
			display="flex"
			flexDirection="column"
			alignItems="center"
			px="150px"
			pt={15}
			bgcolor={colors.ivory}>
			<Box width={1539} height={1000} overflow="hidden" position="relative">
				<Box position="absolute" top="50%" left="50%" sx={{ transform: 'translate(-50%, -50%)' }}>
					<Lottie
						animationData={currentAnimation}
						style={{ width: '1739px', height: 'auto' }}
						onLoopComplete={handleAnimationComplete}
					/>
				</Box>
			</Box>
			<Box mt={9} mb="60px">
				<Image src={title} alt="title" />
			</Box>
			<Box position="relative" width="100%">
				<StyledBox
					display="flex"
					flexWrap="wrap"
					justifyContent="center"
					gap={7.5}
					mt={5}
					pb="100px"
					maxHeight={2240}
					overflow="auto"
					ref={containerRef}>
					{!loaded ? (
						<Box
							height="2000px"
							sx={{
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								width: '100%',
							}}>
							<CircularProgress size="100px" color="inherit" />
						</Box>
					) : (
						<CardQueueAnimation<MessageCardType>
							items={messages}
							keyExtractor={(item, index) => index + item.name}
							renderItem={(item, index) => (
								<MessageCard
									key={index}
									bgColor={item.color}
									isTop={item.keepTop}
									content={item.message}
									name={item.name}
								/>
							)}
						/>
					)}
				</StyledBox>
				<Box position="absolute" right={-100} top={150} height={600}>
					<ScrollBar value={value} onHandleScrollBar={handleChangeBarOfValue} />
				</Box>
			</Box>
		</Box>
	);
};

export default Page;
