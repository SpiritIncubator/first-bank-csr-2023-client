'use client';
import { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import Start from './_components/Start';
import LookAtScreen from './_components/LookAtScreen';
import { useSubscribe } from '@/app/hooks/useSubscribe';
import Scene1QuestionList from './_components/Scene1QuestionList';
import Scene2QuestionList from './_components/Scene2QuestionList';
import AnswerZone from './_components/AnswerZone';
import {
	SOCKET_EVENTS,
	quizEventAnswerMapping,
	QuizEventAnswerMapping,
} from '@/app/stage3/constants';
import { STAGE3_ROOM } from '@/constants';

enum STEPS {
	START = 'START',
	LOOK_AT_SCREEN = 'LOOK_AT_SCREEN',
	// SCENE1_QUESTION_LIST = "SCENE1_QUESTION_LIST",
	SCENE2_QUESTION_LIST = 'SCENE2_QUESTION_LIST',
	ANSWER_ZONE = 'ANSWER_ZONE',
}

export default function ControlBoard() {
	const [currentStep, setCurrentStep] = useState(STEPS.START);
	const [currentQuizEvent, setCurrentQuizEvent] = useState('');
	const { registerRoomHelper } = useSubscribe({ channel: 'subscribeChannel', room: STAGE3_ROOM });
	const { sendEvent, receivedEvent } = registerRoomHelper();

	const onClickStart = () => {
		sendEvent({ messageType: SOCKET_EVENTS.START });
		setCurrentStep(STEPS.LOOK_AT_SCREEN);
	};

	const onAnswerFinish = () => {
		// todo: add pending state
		setCurrentStep(STEPS.SCENE2_QUESTION_LIST);
	};

	// const clearCurrentQuizEvent = () => {
	// 	setCurrentQuizEvent('');
	// };

	useEffect(() => {
		receivedEvent(({ messageType }) => {
			if (messageType === SOCKET_EVENTS.READY_FOR_QUEST) {
				setCurrentStep(STEPS.SCENE2_QUESTION_LIST);
			}

			if (
				messageType === SOCKET_EVENTS.QUEST_RAINRECYCLE_QUIZ1_START ||
				messageType === SOCKET_EVENTS.QUEST_AQUAPONICS_QUIZ1_START ||
				messageType === SOCKET_EVENTS.QUEST_AQUAPONICS_QUIZ3_START ||
				messageType === SOCKET_EVENTS.QUEST_SOLOARPOWER_QUIZ2_START
			) {
				setCurrentStep(STEPS.ANSWER_ZONE);
				setCurrentQuizEvent(messageType);
			}
		});
	}, [receivedEvent]);

	const screens = {
		[STEPS.START]: <Start onClickStart={onClickStart} />,
		[STEPS.LOOK_AT_SCREEN]: <LookAtScreen />,
		[STEPS.SCENE2_QUESTION_LIST]: <Scene2QuestionList />,
		[STEPS.ANSWER_ZONE]: (
			<AnswerZone currentQuizEvent={currentQuizEvent} onFinish={onAnswerFinish} />
		),
	};
	return (
		<Box boxSizing="border-box" width="2732px" height="2048px" position="relative">
			{screens[currentStep]}
		</Box>
	);
}
