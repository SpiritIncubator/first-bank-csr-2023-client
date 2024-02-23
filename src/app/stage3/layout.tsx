'use client';

import { ReactNode, useState, createContext, useContext } from 'react';
import Box from '@mui/material/Box';
import { createActorContext } from '@xstate/react';
import { ControlBoardContext } from './context/ControlBoardContext';
import { conversationMachine } from './xstate/conversationMachine';
import { ControlBoardQuestStatus } from './context/ControlBoardContext';
import { Scene, QuestNames } from '@/app/stage3/controlBoard/constants';

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
			<ControlBoardContext.Provider value={{ questStatus, setQuestStatus }}>
				<ConversationContext.Provider>
					<Box>{children}</Box>
				</ConversationContext.Provider>
			</ControlBoardContext.Provider>
		</QuestionContext.Provider>
	);
};

export default Layout;
