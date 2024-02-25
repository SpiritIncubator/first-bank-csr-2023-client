import { Box } from '@mui/material';
import { useContext, useEffect } from 'react';
import Image from 'next/image';
import { useSubscribe } from '@/app/hooks/useSubscribe';
import { MAX_WIDTH, MAX_HEIGHT } from '@/app/stage3/controlBoard/constants';
import { QuestNames } from '@/app/stage3/controlBoard/constants';
import ImageButton from '@/app/_components/ImageButton/ImageButton';
import Stage3ChooseOne from '@/app/stage3/assets/controlBoard/stage3_choose_one.svg';
import { ControlBoardContext } from '@/app/stage3/context/ControlBoardContext';

import QuestionButton from '@/app/stage3/assets/controlBoard/stage3_question_button.svg';
import QuestionButtonActive from '@/app/stage3/assets/controlBoard/stage3_question_button_active.svg';

import GreenBuildingOpen from '@/app/stage3/assets/controlBoard/stage3_question_greenBuilding_open.svg';
import GreenBuildingClose from '@/app/stage3/assets/controlBoard/stage3_question_greenBuilding_close.svg';
import CarbonFootprintOpen from '@/app/stage3/assets/controlBoard/stage3_question_carbonFootprint_open.svg';
import CarbonFootprintClose from '@/app/stage3/assets/controlBoard/stage3_question_carbonFootprint_close.svg';
import DashBoardOpen from '@/app/stage3/assets/controlBoard/stage3_question_dashboard_open.svg';
import DashBoardClose from '@/app/stage3/assets/controlBoard/stage3_question_dashboard_close.svg';

import GreenBuildingOpenButton from '@/app/stage3/assets/controlBoard/green_building.svg';
import CarbonFootprintOpenButton from '@/app/stage3/assets/controlBoard/carbon_footprint.svg';
import DashBoardOpenButton from '@/app/stage3/assets/controlBoard/dashboard.svg';

import SolveButton from '@/app/stage3/assets/controlBoard/stage3_successfully_solve.svg';
import SolveButtonActive from '@/app/stage3/assets/controlBoard/stage3_successfully_solve_active.svg';
import { Scene } from '@/app/stage3/controlBoard/constants';

const QUEST_LIST = [
	{
		name: QuestNames.GREEN_BUILDING,
		thumbnailClose: GreenBuildingClose,
		thumbnail: GreenBuildingOpen,
		openButton: GreenBuildingOpenButton,
	},
	{
		name: QuestNames.CARBON_FOOTPRINT,
		thumbnailClose: CarbonFootprintClose,
		thumbnail: CarbonFootprintOpen,
		openButton: CarbonFootprintOpenButton,
	},
	{
		name: QuestNames.DASHBOARD,
		thumbnailClose: DashBoardClose,
		thumbnail: DashBoardOpen,
		openButton: DashBoardOpenButton,
	},
];

export default function Scene1QuestionList({ finishQuest }: { finishQuest?: () => void }) {
	const { registerRoomHelper } = useSubscribe({
		channel: 'subscribeChannel',
		room: 'stage3_controlBoard',
	});
	const { sendEvent } = registerRoomHelper();

	const { questStatus, setQuestStatus } = useContext(ControlBoardContext);
	const allQuestFinished =
		questStatus[QuestNames.CARBON_FOOTPRINT] &&
		questStatus[QuestNames.GREEN_BUILDING] &&
		questStatus[QuestNames.DASHBOARD];

	const onClickQuestion = (name: QuestNames) => () => {
		sendEvent({ messageType: `${name}:start` });
		setQuestStatus({
			...questStatus,
			currentQuest: name,
		});
	};

	useEffect(() => {
		setQuestStatus(prev => ({
			...prev,
			currentScene: Scene.Scene1,
		}));
	}, [setQuestStatus]);

	const onSuccessfullySolved = () => {
		finishQuest?.();
		setQuestStatus({
			...questStatus,
			SCENE1: true,
		});
	};

	return (
		<Box
			width={`${MAX_WIDTH}px`}
			minHeight={`${MAX_HEIGHT}px`}
			sx={{
				backgroundImage: 'url(/assets/stage3/background.svg)',
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				pt: '205px',
			}}>
			<Box
				mx="auto"
				mb="120px"
				position="relative"
				width="1854px"
				height="462px"
				textAlign="center">
				<Image src={Stage3ChooseOne} alt="stage3_choose_one" fill />
			</Box>
			<Box
				maxWidth="2118px"
				mx="auto"
				display="flex"
				justifyContent="space-between"
				alignItems="center"
				gap="180px"
				height="100%">
				{QUEST_LIST.map((question, index) => {
					const isAnswered = questStatus[question.name];
					return (
						<Box
							display="flex"
							flexDirection="column"
							key={`${question.name}-${index}`}
							alignItems="center"
							onClick={onClickQuestion(question.name)}>
							<Box mb="100px">
								<Image
									src={isAnswered ? question.thumbnail : question.thumbnailClose}
									alt="question button"
									width="586"
									height="400"
								/>
							</Box>

							{isAnswered ? (
								<Box position="relative" height="181px" width="100%">
									<Image src={question.openButton} fill alt="open button" />
								</Box>
							) : (
								<ImageButton
									width="100%"
									height="200px"
									src={QuestionButton}
									activeImageSrc={QuestionButtonActive}
								/>
							)}
						</Box>
					);
				})}
			</Box>
			<Box>
				{allQuestFinished && (
					<Box
						position="relative"
						height="207px"
						width="670px"
						mx="auto"
						mt="150px"
						onClick={onSuccessfullySolved}>
						<ImageButton
							width="100%"
							height="200px"
							src={SolveButton}
							activeImageSrc={SolveButtonActive}
						/>
					</Box>
				)}
			</Box>
		</Box>
	);
}
