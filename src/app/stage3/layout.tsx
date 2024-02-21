'use client';

import { ReactNode, useState } from 'react';
import Box from '@mui/material/Box';
import { createActorContext } from '@xstate/react';
import { ControlBoardContext } from './context/ControlBoardContext';
import { conversationMachine } from './xstate/conversationMachine';
import { QuestNames } from './constants';
import { ControlBoardQuestStatus } from './context/ControlBoardContext';

type LayoutProps = {
	children: ReactNode;
};

export const ConversationContext = createActorContext(conversationMachine);

const Layout = ({ children }: LayoutProps) => {
	const [questStatus, setQuestStatus] = useState<ControlBoardQuestStatus>({
		SCENE1: false,
		SCENE2: false,
		currentQuiz: '',
		[QuestNames.CARBON_FOOTPRINT]: false,
		[QuestNames.DASHBOARD]: false,
		[QuestNames.GREEN_BUILDING]: false,
		[QuestNames.RAIN_RECYCLE]: false,
		[QuestNames.AQUAPONICS]: false,
		[QuestNames.SOLAR_POWER]: false,
	});

	return (
		<ControlBoardContext.Provider value={{ questStatus, setQuestStatus }}>
			<ConversationContext.Provider>
				<Box>{children}</Box>
			</ConversationContext.Provider>
		</ControlBoardContext.Provider>
	);
};

export default Layout;
