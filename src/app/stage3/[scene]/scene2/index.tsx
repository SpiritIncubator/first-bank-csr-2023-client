import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Lottie from 'lottie-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useSubscribe } from '@/app/hooks/useSubscribe';
import { useQuestion } from '@/app/stage3/layout';

import FadeIn from '@/app/_components/Transitions/FadeIn';
import { STAGE3_ROOM } from '@/constants';
import { SOCKET_EVENTS } from '@/app/stage3/constants';

import { ConversationContext } from '../../layout';
import lionAnimationData from '../../animationData/leo_2-11_normal_smile1.json';
import Scene2BgImg from '../../assets/scene2-bg.svg';
import UnResolvedQuestion from '../../assets/unResolvedQuestion.svg';
import DialogBg from '../../assets/dialogBox.svg';

// import Fake1Img from '../../assets/fake1.svg';
// import Fake2Img from '../../assets/fake2.svg';

import rainCycleResolvedImg from '../../assets/question-rainRecycle.svg';
import solarPowerResolvedImg from '../../assets/question-solarpower.svg';
import aquaponicsResolvedImg from '../../assets/question-aquaponics.svg';
import Scene2Introduction1 from '../../assets/scene2-introduction1.svg';
import Scene2Introduction2 from '../../assets/scene2-introduction2.svg';
import ResolveAllQuestion from '../../assets/resolve_all.svg'

const DELAY_SECONDS = 4000;

const Scene2Page = () => {
	const router = useRouter();
	const [hasLoaded, setHasLoaded] = useState(false);
	const currentPhaseInfo = ConversationContext.useSelector(state => state.context.phase);
	const action = ConversationContext.useActorRef();
	const [delayLoaded, setDelayLoaded] = useState(false);
	const { registerRoomHelper } = useSubscribe({ channel: 'subscribeChannel', room: STAGE3_ROOM });
	const { receivedEvent, sendEvent } = registerRoomHelper();
	const { questionStatus, setQuestionStatus } = useQuestion();
	const isScene2InitialPhase =
		currentPhaseInfo.level === 2 && currentPhaseInfo.question === 'initial';
	const isInitialDialog1 = currentPhaseInfo.round === 0 && isScene2InitialPhase;
	const isDialog2 = currentPhaseInfo.round === 1 && isScene2InitialPhase;

	function getDialogImage() {
		if (questionStatus.aquaponics === true && questionStatus.rainRecycle === true && questionStatus.solarPower === true) {
			return ResolveAllQuestion;
		}

		if (isDialog2) {
			return Scene2Introduction2;
		}

		if (isInitialDialog1) {
			return Scene2Introduction1;
		}

		return Scene2Introduction2;
	}

	useEffect(() => {
		let timer: NodeJS.Timeout;

		if (isInitialDialog1) {
			timer = setTimeout(() => {
				action.send({ type: 'NEXT_TO_SCENE2_INTRODUCTION_PART_TWO' });
				sendEvent({ messageType: SOCKET_EVENTS.SCENE2_READY_FOR_QUEST });
			}, DELAY_SECONDS);
		}

		return () => {
			clearTimeout(timer);
		};
	}, [isInitialDialog1, action, sendEvent]);

	useEffect(() => {
		receivedEvent(({ messageType }) => {
			if (messageType === SOCKET_EVENTS.RESTART) {
				setQuestionStatus({
					aquaponics: false,
					rainRecycle: false,
					solarPower: false,
					dashboard: false,
					greenBuilding: false,
					carbonFootprint: false,
				});
				action.send({ type: 'NEXT_TO_INITIAL' });
				router.push('/stage3');
			}
		});
	}, [action, receivedEvent, router, setQuestionStatus]);

	useEffect(() => {
		receivedEvent(({ messageType }) => {
			if (messageType === SOCKET_EVENTS.RAIN_RECYCLE_START) {
				action.send({ type: 'NEXT_TO_SCENE2_RAIN_RECYCLE' });
				router.push('/stage3/scene2/question');
			}
			if (messageType === SOCKET_EVENTS.SOLAR_POWER_START) {
				action.send({ type: 'NEXT_TO_SCENE2_SOLAR_POWER' });
				router.push('/stage3/scene2/question');
			}
			if (messageType === SOCKET_EVENTS.AQUAPONICS_START) {
				action.send({ type: 'NEXT_TO_SCENE2_AQUAONICS' });
				router.push('/stage3/scene2/question');
			}
		});
	}, [action, router, receivedEvent]);

	useEffect(() => {
		let timer: NodeJS.Timeout;

		timer = setTimeout(() => {
			setDelayLoaded(true);
		}, 1500);
	}, []);

	return (
		<Box position="relative" width={2560} height={1440} overflow="hidden">
			{!hasLoaded && (
				<Box width={2560} height={1440} bgcolor="#fff" position="absolute" zIndex={999} left={0} top={0} />
			)}
			{delayLoaded && (
				<FadeIn>
					<Box position="absolute" top={370} left={250}>
						<Image
							src={questionStatus.solarPower ? solarPowerResolvedImg : UnResolvedQuestion}
							alt="unresolved-question"
						/>
					</Box>
					<Box position="absolute" top={800} left={570}>
						<Image
							src={questionStatus.rainRecycle ? rainCycleResolvedImg : UnResolvedQuestion}
							alt="unresolved-question"
						/>
					</Box>
					<Box position="absolute" top={625} right={800}>
						<Image
							src={questionStatus.aquaponics ? aquaponicsResolvedImg : UnResolvedQuestion}
							alt="unresolved-question"
						/>
					</Box>
					<Box position="absolute" top={0} left={0}>
						<Image src={DialogBg} alt="dialog" />
					</Box>
					<Box position="absolute" right={0} bottom={-150}>
						<Lottie animationData={lionAnimationData} loop />
					</Box>
					<Box sx={{ transform: 'translateX(-50%)' }} position="absolute" bottom={0} left="50%">
						<Image src={getDialogImage()} alt="fake1" />
					</Box>
				</FadeIn>
			)}
			<FadeIn>
				<Image src={Scene2BgImg} alt="scene2" priority onLoadingComplete={() => {
					setHasLoaded(true);
				}} />
			</FadeIn>
		</Box>
	);
};

export default Scene2Page;
