'use client';

import { ReactNode, useState, createContext, useContext, useCallback } from 'react';
import Head from 'next/head';
import Box from '@mui/material/Box';
import { createActorContext } from '@xstate/react';
import { ControlBoardContext } from './context/ControlBoardContext';
import { conversationMachine } from './xstate/conversationMachine';
import { ControlBoardQuestStatus, controlBoardInitialState } from './context/ControlBoardContext';
import { Scene, QuestNames } from '@/app/stage3/controlBoard/constants';
import CrossImage from '@/app/stage3/assets/controlBoard/stage3_cross.svg';

import CircleImage from '@/app/stage3/assets/controlBoard/stage3_circle.svg';

type LayoutProps = {
	children: ReactNode;
};

type QuestionStatusType = {
	rainRecycle: boolean;
	aquaponics: boolean;
	carbonFootprint: boolean;
	dashboard: boolean;
	greenBuilding: boolean;
	solarPower: boolean;
};

type QuestionStatusContextType = {
	questionStatus: QuestionStatusType;
	setQuestionStatus: (status: QuestionStatusType) => void;
};

export const ConversationContext = createActorContext(conversationMachine);
export const QuestionContext = createContext({} as QuestionStatusContextType);

export const useQuestion = () => {
	const context = useContext(QuestionContext);
	if (context === undefined) {
		throw new Error('useQuestion must be used within a QuestionProvider');
	}
	return context;
};

const Layout = ({ children }: LayoutProps) => {
	const [questStatus, setQuestStatus] = useState<ControlBoardQuestStatus>({
		SCENE1: false,
		SCENE2: false,
		currentScene: Scene.Scene1,
		currentQuest: '',
		[QuestNames.RAIN_RECYCLE]: false,
		[QuestNames.AQUAPONICS]: false,
		[QuestNames.CARBON_FOOTPRINT]: false,
		[QuestNames.DASHBOARD]: false,
		[QuestNames.GREEN_BUILDING]: false,
		[QuestNames.SOLAR_POWER]: false,
	});
	console.log('CrossImage :', CrossImage);
	const resetControlBoard = useCallback(() => {
		setQuestStatus(controlBoardInitialState);
	}, []);

	const [questionStatus, setQuestionStatus] = useState<QuestionStatusType>({
		rainRecycle: false,
		aquaponics: false,
		carbonFootprint: false,
		dashboard: false,
		greenBuilding: false,
		solarPower: false,
	});

	return (
		<QuestionContext.Provider value={{ questionStatus, setQuestionStatus }}>
			<ControlBoardContext.Provider value={{ questStatus, setQuestStatus, resetControlBoard }}>
				<ConversationContext.Provider>
					<Head>
						<link rel="preload" href="./assets/scene2-bg-without-border.svg" as="image" />
						<link rel="preload" href={CrossImage} as="image" />
						<link rel="preload" href={CircleImage} as="image" />
					</Head>
					<Box>{children}</Box>
				</ConversationContext.Provider>
			</ControlBoardContext.Provider>
		</QuestionContext.Provider>
	);
};

export default Layout;
