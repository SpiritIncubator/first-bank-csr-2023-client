import { Box } from '@mui/material';
import SuccessfullySolvedOne from '@/app/stage3/assets/controlBoard/stage3_lion_successfully_solve_one.svg';
import Image from 'next/image';
import { SOCKET_EVENTS } from '../../constants';
import iSeeImage from '@/app/stage3/assets/controlBoard/stage3_i_see.svg';
import iSeeImageActive from '@/app/stage3/assets/controlBoard/stage3_i_see_active.svg';
import RestartQuest from '@/app/stage3/assets/controlBoard/stage3_restart_quest.svg';
import { useSubscribe } from '@/app/hooks/useSubscribe';
import { STAGE3_ROOM } from '@/constants';

import ImageButton from '@/app/_components/ImageButton/ImageButton';

import RainCycleOpen from '@/app/stage3/assets/controlBoard/stage3_question_rainRecycle_open.svg';
import AquaponicsOpen from '@/app/stage3/assets/controlBoard/stage3_question_aquaponics_open.svg';
import SolarPowerOpen from '@/app/stage3/assets/controlBoard/stage3_question_solarPower_open.svg';

const endEventImageMapping = {
	[SOCKET_EVENTS.RAIN_RECYCLE_END]: RainCycleOpen,
	[SOCKET_EVENTS.AQUAPONICS_END]: AquaponicsOpen,
	[SOCKET_EVENTS.SOLAR_POWER_END]: SolarPowerOpen,
};

const endEventFinishMapping = {
	[SOCKET_EVENTS.RAIN_RECYCLE_END]: SOCKET_EVENTS.RAIN_RECYCLE_FINISH,
	[SOCKET_EVENTS.AQUAPONICS_END]: SOCKET_EVENTS.AQUAPONICS_FINISH,
	[SOCKET_EVENTS.SOLAR_POWER_END]: SOCKET_EVENTS.SOLAR_POWER_FINISH,
};
const restartEventFinishMapping = {
	[SOCKET_EVENTS.RAIN_RECYCLE_END]: SOCKET_EVENTS.RAIN_RECYCLE_RESTART,
	[SOCKET_EVENTS.AQUAPONICS_END]: SOCKET_EVENTS.AQUAPONICS_RESTART,
	[SOCKET_EVENTS.SOLAR_POWER_END]: SOCKET_EVENTS.SOLAR_POWER_RESTART,
};

export default function QuestFinalPage({ currentQuestEndEvent }: { currentQuestEndEvent: string }) {
	console.log('currentQuestEndEvent :', currentQuestEndEvent);

	const { registerRoomHelper } = useSubscribe({ channel: 'subscribeChannel', room: STAGE3_ROOM });
	const { sendEvent } = registerRoomHelper();

	const onClickISee = () => {
		sendEvent({ messageType: endEventFinishMapping[currentQuestEndEvent] });
	};
	const onClickRestart = () => {
		sendEvent({ messageType: restartEventFinishMapping[currentQuestEndEvent] });
	};
	return (
		<Box
			width="2732px"
			minHeight="2048px"
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
				<Image src={SuccessfullySolvedOne} alt="stage3_lion_look_at_screen" fill />
			</Box>

			<Box width="866px" height="650px" mb="100px" position="relative">
				{endEventImageMapping[currentQuestEndEvent] && (
					<Image src={endEventImageMapping[currentQuestEndEvent]} alt="question" fill />
				)}
			</Box>

			<Box display="flex" justifyContent="center" alignItems="center">
				<ImageButton
					onClick={onClickISee}
					src={iSeeImage}
					activeImageSrc={iSeeImageActive}
					width="670px"
					height="207px"
					margin="0 auto"
				/>

				<Box position="relative" width="207px" height="207px" ml="100px">
					<Image src={RestartQuest} fill alt="restart quest" onClick={onClickRestart} />
				</Box>
			</Box>
		</Box>
	);
}
