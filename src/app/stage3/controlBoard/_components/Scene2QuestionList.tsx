import { Box } from '@mui/material';
import { useContext, useEffect } from 'react';
import Image from 'next/image';
import { useState } from 'react';
import { useSubscribe } from '@/app/hooks/useSubscribe';
import { MAX_WIDTH, MAX_HEIGHT } from '@/app/stage3/controlBoard/constants';
import { QuestNames } from '@/app/stage3/controlBoard/constants';
import ImageButton from '@/app/_components/ImageButton/ImageButton';
import Stage3ChooseOne from '@/app/stage3/assets/controlBoard/stage3_choose_one.svg';
import QuestionButton from '@/app/stage3/assets/controlBoard/stage3_question_button.svg';
import { ControlBoardContext } from '@/app/stage3/context/ControlBoardContext';
import QuestionButtonActive from '@/app/stage3/assets/controlBoard/stage3_question_button_active.svg';
import RainCycleOpen from '@/app/stage3/assets/controlBoard/stage3_question_rainRecycle_open.svg';
import AquaponicsOpen from '@/app/stage3/assets/controlBoard/stage3_question_aquaponics_open.svg';
import SolarPowerOpen from '@/app/stage3/assets/controlBoard/stage3_question_solarPower_open.svg';
import RainCycleClose from '@/app/stage3/assets/controlBoard/stage3_question_rainRecycle_close.svg';
import AquaponicsClose from '@/app/stage3/assets/controlBoard/stage3_question_aquaponics_close.svg';
import SolarPowerClose from '@/app/stage3/assets/controlBoard/stage3_question_solarPower_close.svg';
import AquaponicsOpenButton from '@/app/stage3/assets/controlBoard/aquaponics.svg';
import RainWaterRecycleOpenButton from '@/app/stage3/assets/controlBoard/rainwater_recycle.svg';
import SolarPowerOpenButton from '@/app/stage3/assets/controlBoard/solar_power.svg';
import SolveButton from '@/app/stage3/assets/controlBoard/stage3_successfully_solve.svg';
import SolveButtonActive from '@/app/stage3/assets/controlBoard/stage3_successfully_solve_active.svg';
import { ControlBoardQuestStatus } from '@/app/stage3/context/ControlBoardContext';
import { Scene } from '@/app/stage3/controlBoard/constants';
// import DashBoardClose from '@/app/stage3/assets/controlBoard/stage3_question_dashboard_close.svg';
// import CarbonFootprintClose from '@/app/stage3/assets/controlBoard/stage3_question_carbonFootprint_close.svg';
// import greenBuildingClose from '@/app/stage3/assets/controlBoard/stage3_question_greenBuilding_close.svg';

const QUEST_LIST = [
	{
		name: QuestNames.AQUAPONICS,
		thumbnailClose: AquaponicsClose,
		thumbnail: AquaponicsOpen,
		openButton: AquaponicsOpenButton,
	},
	{
		name: QuestNames.SOLAR_POWER,
		thumbnailClose: SolarPowerClose,
		thumbnail: SolarPowerOpen,
		openButton: SolarPowerOpenButton,
	},
	{
		name: QuestNames.RAIN_RECYCLE,
		thumbnailClose: RainCycleClose,
		thumbnail: RainCycleOpen,
		openButton: RainWaterRecycleOpenButton,
	},
];

export default function Scene2QuestionList({
	finishQuest,
	onChoose,
}: {
	finishQuest?: () => void;
	onChoose?: () => void;
}) {
	const { registerRoomHelper } = useSubscribe({
		channel: 'subscribeChannel',
		room: 'stage3_controlBoard',
	});
	const { sendEvent } = registerRoomHelper();

	const { questStatus, setQuestStatus } = useContext(ControlBoardContext);
	const allQuestFinished =
		questStatus[QuestNames.AQUAPONICS] &&
		questStatus[QuestNames.SOLAR_POWER] &&
		questStatus[QuestNames.RAIN_RECYCLE];

	console.log('questStatus :', questStatus);
	const onClickQuestion = (name: QuestNames) => () => {
		onChoose?.();
		sendEvent({ messageType: `${name}:start` });
		setQuestStatus({
			...questStatus,
			currentQuest: name,
		});
	};

	useEffect(() => {
		setQuestStatus(prev => ({
			...prev,
			currentScene: Scene.Scene2,
		}));
	}, [setQuestStatus]);

	const onSuccessfullySolved = () => {
		finishQuest?.();
		setQuestStatus({
			...questStatus,
			SCENE2: true,
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
