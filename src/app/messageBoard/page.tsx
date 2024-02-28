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
import LionWriteAnimation from '@/lottieAnimations/stage5-lion-write.json';
import LionBirdIn from '@/lottieAnimations/stage5-lion-bird-in.json';
import Lottie from 'lottie-react';

const StyledBox = styled(Box)`
	::-webkit-scrollbar {
		display: none;
	}
`;

const Page = () => {
	const [currentAnimation, setCurrentAnimation] = useState<any>(LionWriteAnimation);
	const [isInitialLoad, setIsInitialLoad] = useState(true);
	const { messages, loaded } = useMessageBoard();
	const messageLength = useRef(messages.length);

	const { containerRef, value, handleChangeBarOfValue } = useScrollBar({ loaded });

	useEffect(() => {
		if (isInitialLoad) {
			setIsInitialLoad(false);
		} else if (messages.length > messageLength.current) {
			setCurrentAnimation(LionBirdIn);
		}
		messageLength.current = messages.length;
	}, [messages.length, isInitialLoad]);

	const handleAnimationComplete = () => {
		setCurrentAnimation(LionWriteAnimation);
	};

	return (
		<Box
			display="flex"
			flexDirection="column"
			alignItems="center"
			px={23.75}
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
