import { Box } from '@mui/material';
import { useState } from 'react';
import Image from 'next/image';
import CLICK_BUTTON_BELOW from '@/app/stage3/assets/controlBoard/stage3_click_button_below.svg';
import {
	quizEventAnswerMapping,
	QuizEventAnswerMapping,
	SOCKET_EVENTS,
} from '@/app/stage3/constants';
import ImageButton from '@/app/_components/ImageButton/ImageButton';
import { useSubscribe } from '@/app/hooks/useSubscribe';
import { STAGE3_ROOM } from '@/constants';
import CrossImage from '@/app/stage3/assets/controlBoard/stage3_cross.svg';
import CircleImage from '@/app/stage3/assets/controlBoard/stage3_circle.svg';
import { MAX_WIDTH, MAX_HEIGHT } from '@/app/stage3/controlBoard/constants';

enum Answer {
	Right = 0,
	Wrong = 1,
	Empty = 2,
}

export default function AnswerZone({
	currentQuizEvent,
	onFinish,
}: {
	currentQuizEvent: keyof QuizEventAnswerMapping;
	onFinish?: () => void;
}) {
	console.log('currentQuizEvent :', currentQuizEvent);
	const {
		answer,
		finishEvent,
		optionLeftImage,
		optionLeftImageActive,
		optionRightImage,
		optionRightImageActive,
		mainImage,
	} = quizEventAnswerMapping[currentQuizEvent as string];
	const [answerResult, setAnswerResult] = useState(Answer.Empty);
	console.log('answerResult :', answerResult);
	const { registerRoomHelper } = useSubscribe({ channel: 'subscribeChannel', room: STAGE3_ROOM });
	const { sendEvent } = registerRoomHelper();
	if (!currentQuizEvent) return null;

	const postAnswer = (finishEvent: string) => {
		setAnswerResult(Answer.Empty);
		onFinish && onFinish();
		sendEvent({ messageType: finishEvent });
	};

	const onClickAnswer = (userAnswer: number) => () => {
		console.log('userAnswer :', userAnswer);
		if (answer === userAnswer) {
			setAnswerResult(Answer.Right);
			setTimeout(() => {
				finishEvent && postAnswer(finishEvent);
			}, 2000);
		} else {
			//@set wrong answer state
			setAnswerResult(Answer.Wrong);
			setTimeout(() => {
				setAnswerResult(Answer.Empty);
			}, 2000);
		}
	};

	return (
		<Box
			width={`${MAX_WIDTH}px`}
			minHeight={`${MAX_HEIGHT}px`}
			sx={{
				backgroundImage: 'url(/assets/stage3/background.svg)',
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				pt: '205px',
			}}>
			<Box mx="auto" mb="75px" position="relative" width="1854px" height="462px" textAlign="center">
				<Image src={CLICK_BUTTON_BELOW} alt="stage3_lion_look_at_screen" fill />
			</Box>

			<Box width="866px" height="650px" mb="100px" position="relative">
				<Image src={mainImage} alt="question" fill />
			</Box>

			<Box display="flex" gap="100px">
				<ImageButton
					onClick={onClickAnswer(0)}
					src={optionLeftImage}
					activeImageSrc={optionLeftImageActive}
					width="900px"
					height="250px"
					margin="0 auto"
				/>
				<ImageButton
					onClick={onClickAnswer(1)}
					src={optionRightImage}
					activeImageSrc={optionRightImageActive}
					width="900px"
					height="250px"
					margin="0 auto"
				/>
			</Box>

			{answerResult !== Answer.Empty && (
				<Box
					position="fixed"
					top="0"
					left="0"
					right="0"
					bottom="0"
					// 200vw/vh is a workaround because of  transform scale
					width="200vw"
					height="200vh"
					display="flex"
					justifyContent="center"
					alignItems="center"
					sx={{ backdropFilter: 'blur(10px)' }}>
					{answerResult === Answer.Right && <Image src={CircleImage} alt="circle" />}
					{answerResult === Answer.Wrong && <Image src={CrossImage} alt="cross" />}
				</Box>
			)}
		</Box>
	);
}
