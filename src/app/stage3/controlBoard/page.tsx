'use client';
import { useContext, useEffect, useState } from 'react';
import { Box } from '@mui/material';
import Start from './_components/Start';
import LookAtScreen from './_components/LookAtScreen';
import { useSubscribe } from '@/app/hooks/useSubscribe';
import Scene1QuestionList from './_components/Scene1QuestionList';
import Scene2QuestionList from './_components/Scene2QuestionList';
import QuestFinalPage from './_components/QuestFinalPage';
import AnswerZone from './_components/AnswerZone';
import { ControlBoardContext } from '@/app/stage3/context/ControlBoardContext';

import {
	SOCKET_EVENTS,
	quizEventAnswerMapping,
	QuizEventAnswerMapping,
} from '@/app/stage3/constants';
import { QuestNames } from '@/app/stage3/controlBoard/constants';
import { STAGE3_ROOM } from '@/constants';

enum STEPS {
	START = 'START',
	LOOK_AT_SCREEN = 'LOOK_AT_SCREEN',
	// SCENE1_QUESTION_LIST = "SCENE1_QUESTION_LIST",
	SCENE2_QUESTION_LIST = 'SCENE2_QUESTION_LIST',
	ANSWER_ZONE = 'ANSWER_ZONE',
	FINAL = 'FINAL',
}

export default function ControlBoard() {
	const { questStatus, setQuestStatus } = useContext(ControlBoardContext);
	const [currentStep, setCurrentStep] = useState(STEPS.START);
	const [currentQuizStartEvent, setCurrentQuizStartEvent] = useState('');
	const [currentQuestEndEvent, setCurrentQuestEndEvent] = useState('');
	const { registerRoomHelper } = useSubscribe({ channel: 'subscribeChannel', room: STAGE3_ROOM });
	const { sendEvent, receivedEvent } = registerRoomHelper();

	const onClickStart = () => {
		sendEvent({ messageType: SOCKET_EVENTS.START });
		setCurrentStep(STEPS.LOOK_AT_SCREEN);
	};

	const onAnswerFinish = () => {
		setCurrentStep(STEPS.LOOK_AT_SCREEN);
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
				setCurrentQuizStartEvent(messageType);
			}

			if (
				messageType === `${QuestNames.RAIN_RECYCLE}:end` ||
				messageType === `${QuestNames.AQUAPONICS}:end` ||
				messageType === `${QuestNames.SOLAR_POWER}:end` ||
				messageType === `${QuestNames.CARBON_FOOTPRINT}:end` ||
				messageType === `${QuestNames.GREEN_BUILDING}:end` ||
				messageType === `${QuestNames.DASHBOARD}:end`
			) {
				setCurrentStep(STEPS.FINAL);
				setCurrentQuestEndEvent(messageType);
			}
		});
	}, [receivedEvent]);

	const screens = {
		[STEPS.START]: <Start onClickStart={onClickStart} />,
		[STEPS.LOOK_AT_SCREEN]: <LookAtScreen />,
		[STEPS.SCENE2_QUESTION_LIST]: <Scene2QuestionList />,
		[STEPS.ANSWER_ZONE]: (
			<AnswerZone currentQuizEvent={currentQuizStartEvent} onFinish={onAnswerFinish} />
		),
		[STEPS.FINAL]: <QuestFinalPage currentQuestEndEvent={currentQuestEndEvent} />,
	};
	return (
		<Box boxSizing="border-box" width="1366px" height="1024px" position="relative">
			{screens[currentStep]}
		</Box>
	);
}
