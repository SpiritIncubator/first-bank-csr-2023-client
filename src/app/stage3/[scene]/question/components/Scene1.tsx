'use client';

import { useEffect, useState, useMemo } from 'react';
import Box from '@mui/material/Box';
import NextImage from 'next/image';
import Lottie, { useLottie } from 'lottie-react';
import { useRouter } from 'next/navigation';

import type { PhaseValueType } from '@/app/stage3/xstate/conversationMachine';
import { ConversationContext } from '@/app/stage3/layout';
import FadeIn from '@/app/_components/Transitions/FadeIn';
import bg from '@/app/stage3/assets/scene1-background.svg'
import DialogBg from '@/app/stage3/assets/dialogBox.svg';
import lionAnimationData from '@/app/stage3/animationData/leo_2-11_normal_smile1.json';
import { STAGE3_ROOM } from '@/constants';
import { SOCKET_EVENTS } from '@/app/stage3/constants';
import { useQuestion } from '@/app/stage3/layout';
import { useSubscribe } from '@/app/hooks/useSubscribe';
import FadeInImage from '@/app/_components/Transitions/FadeInImage';
import { pickLionType } from '@/app/stage3/utils/pick-lion';
import useSoundEffect from '@/app/stage3/hooks/useSoundEffects';

// carbonFootprint
import carbonFootprintDialog1 from '@/app/stage3/assets/carbonFootprint/carbonFooterprint-dialog1.svg';
import carbonFootprintDialog2 from '@/app/stage3/assets/carbonFootprint/carbonFooterprint-dialog2.svg';
import carbonFootprintDialog3 from '@/app/stage3/assets/carbonFootprint/carbonFooterprint-dialog3.svg';
import carbonFootprintDialog4 from '@/app/stage3/assets/carbonFootprint/carbonFooterprint-dialog4.svg';
import carbonFootprintDialog5 from '@/app/stage3/assets/carbonFootprint/carbonFooterprint-dialog5.svg';
import carbonFootprintDialog5_2 from '@/app/stage3/assets/carbonFootprint/carbonFooterprint-dialog5-2.svg';
import carbonFootprintDialog7 from '@/app/stage3/assets/carbonFootprint/carbonFooterprint-dialog7.svg';
import carbonFootprintDialog7_2 from '@/app/stage3/assets/carbonFootprint/carbonFooterprint-dialog7-2.svg';
import carbonFootprintDialog9 from '@/app/stage3/assets/carbonFootprint/carbonFooterprint-dialog9.svg';
import carbonFootprintDialog10 from '@/app/stage3/assets/carbonFootprint/carbonFooterprint-dialog10.svg';

import carbonFootprintBubble1 from '@/app/stage3/assets/carbonFootprint/carbonFoorprint-bubble1.svg';
import carbonFootprintBubble2Animation from '@/app/stage3/animationData/carbonFootprint/carbonFootprint-bubble2.json';
import carbonFootprintBubble3 from '@/app/stage3/assets/carbonFootprint/carbonFoorprint-bubble3.svg';
import carbonFootprintBubble4 from '@/app/stage3/assets/carbonFootprint/carbonFoorprint-bubble4.svg';
import carbonFootprintBubble5 from '@/app/stage3/assets/carbonFootprint/carbonFoorprint-bubble5.svg';
import carbonFootprintBubble6 from '@/app/stage3/assets/carbonFootprint/carbonFoorprint-bubble6.svg';

// dashboard
import dashboardDialog1 from '@/app/stage3/assets/dashboard/dashboard-dialog1.svg';
import dashboardDialog2 from '@/app/stage3/assets/dashboard/dashboard-dialog2.svg';
import dashboardDialog3 from '@/app/stage3/assets/dashboard/dashboard-dialog3.svg';
import dashboardDialog4 from '@/app/stage3/assets/dashboard/dashboard-dialog4.svg';
import dashboardDialog5 from '@/app/stage3/assets/dashboard/dashboard-dialog5.svg';
import dashboardDialog6 from '@/app/stage3/assets/dashboard/dashboard-dialog6.svg';
import dashboardDialog7 from '@/app/stage3/assets/dashboard/dashboard-dialog7.svg';
import dashboardDialog8 from '@/app/stage3/assets/dashboard/dashboard-dialog8.svg';
import dashboardDialog9 from '@/app/stage3/assets/dashboard/dashboard-dialog9.svg';

import dashboardDialog1Bubble from '@/app/stage3/assets/dashboard/dashboard-bubble1.svg';
import dashboardDialog2Bubble from '@/app/stage3/assets/dashboard/dashboard-bubble2.svg';
import dashboardDialog3BubbleAnimation from '@/app/stage3/animationData/dashboard/dashboard-bubble3.json';
import dashboardDialog4Bubble from '@/app/stage3/assets/dashboard/dashboard-bubble4.svg';
import dashboardDialog5Bubble from '@/app/stage3/assets/dashboard/dashboard-bubble5.svg';
import dashboardDialog6BubbleAnimation from '@/app/stage3/animationData/dashboard/dashboard-bubble6.json';

// greenBuilding
import greenBuildingDialog1 from '@/app/stage3/assets/greenBuilding/greenBuilding-dialog1.svg';
import greenBuildingDialog2 from '@/app/stage3/assets/greenBuilding/greenBuilding-dialog2.svg';
import greenBuildingDialog3 from '@/app/stage3/assets/greenBuilding/greenBuilding-dialog3.svg';
import greenBuildingDialog4 from '@/app/stage3/assets/greenBuilding/greenBuilding-dialog4.svg';
import greenBuildingDialog5 from '@/app/stage3/assets/greenBuilding/greenBuilding-dialog5.svg';
import greenBuildingDialog6 from '@/app/stage3/assets/greenBuilding/greenBuilding-dialog6.svg';
import greenBuildingDialog7 from '@/app/stage3/assets/greenBuilding/greenBuilding-dialog7.svg';
import greenBuildingDialog8 from '@/app/stage3/assets/greenBuilding/greenBuilding-dialog8.svg';
import greenBuildingDialog9 from '@/app/stage3/assets/greenBuilding/greenBuilding-dialog9.svg';
import greenBuildingDialog10 from '@/app/stage3/assets/greenBuilding/greenBuilding-dialog10.svg';

import greenBuildingBubble1Animation from '@/app/stage3/animationData/greenBuilding/greenBuilding-bubble1.json';
import greenBuildingBubble2 from '@/app/stage3/assets/greenBuilding/greenBuilding-bubble2.svg';
import greenBuildingBubble3 from '@/app/stage3/assets/greenBuilding/greenBuilding-bubble3.png';
import greenBuildingBubble4 from '@/app/stage3/assets/greenBuilding/greenBuilding-bubble4.png';
import greenBuildingBubble5Animation from '@/app/stage3/animationData/greenBuilding/greenBuilding-bubble5.json';
import greenBuildingBubble6Animation from '@/app/stage3/animationData/greenBuilding/greenBuilding-bubble6.json';

type PhaseType = {
	dialog: any;
	bg?: any;
	animation?: any;
};

type AnimationOptions = {
	animationData: any;
	loop: boolean;
	autoplay: boolean;
};

enum SCENE1SITUATION {
	GREEN_BUILDING = 'greenBuilding',
	DASHBOARD = 'dashboard',
	CARBON_FOOTPRINT = 'carbonFootprint',
}

const DELAY_TIME = 4000;

export const animationItemsByCategories: Record<Partial<PhaseValueType['question']>, any> = {
	rainRecycle: {},
	aquaponics: {},
	solarPower: {},
	greenBuilding: {
		1: greenBuildingBubble1Animation,
		2: greenBuildingBubble1Animation,
		7: greenBuildingBubble5Animation,
		8: greenBuildingBubble5Animation,
		9: greenBuildingBubble6Animation,
		10: greenBuildingBubble6Animation,
	},
	dashboard: {
		4: dashboardDialog3BubbleAnimation,
		5: dashboardDialog3BubbleAnimation,
		8: dashboardDialog6BubbleAnimation,
		9: dashboardDialog6BubbleAnimation,
	},
	carbonFootprint: {
		2: carbonFootprintBubble2Animation,
	},
	initial: {},
};

const getCurrentPhaseImg = (currentPhaseInfo: PhaseValueType): PhaseType => {
	if (currentPhaseInfo.question === 'carbonFootprint') {
		if (currentPhaseInfo.round === 1) {
			return {
				dialog: carbonFootprintDialog1,
				bg: carbonFootprintBubble1,
			};
		}

		if (currentPhaseInfo.round === 2) {
			return {
				dialog: carbonFootprintDialog2,
				animation: carbonFootprintBubble2Animation,
			};
		}

		if (currentPhaseInfo.round === 3) {
			return {
				dialog: carbonFootprintDialog3,
				bg: carbonFootprintBubble3,
			};
		}

		if (currentPhaseInfo.round === 4) {
			return {
				dialog: carbonFootprintDialog4,
				bg: carbonFootprintBubble3,
			};
		}

		if (currentPhaseInfo.round === 5) {
			return {
				dialog: carbonFootprintDialog5,
				bg: carbonFootprintBubble4,
			};
		}

		if (currentPhaseInfo.round === 6) {
			return {
				dialog: carbonFootprintDialog5_2,
				bg: carbonFootprintBubble4,
			};
		}

		if (currentPhaseInfo.round === 7) {
			return {
				dialog: carbonFootprintDialog7,
				bg: carbonFootprintBubble5,
			};
		}

		if (currentPhaseInfo.round === 8) {
			return {
				dialog: carbonFootprintDialog7_2,
				bg: carbonFootprintBubble5,
			};
		}

		if (currentPhaseInfo.round === 9) {
			return {
				dialog: carbonFootprintDialog9,
				bg: carbonFootprintBubble6,
			};
		}

		if (currentPhaseInfo.round === 10) {
			return {
				dialog: carbonFootprintDialog10,
				bg: carbonFootprintBubble6,
			};
		}
	}

	if (currentPhaseInfo.question === 'dashboard') {
		if (currentPhaseInfo.round === 1) {
			return {
				dialog: dashboardDialog1,
				bg: dashboardDialog1Bubble,
			};
		}

		if (currentPhaseInfo.round === 2) {
			return {
				dialog: dashboardDialog2,
				bg: dashboardDialog1Bubble,
			};
		}

		if (currentPhaseInfo.round === 3) {
			return {
				dialog: dashboardDialog3,
				bg: dashboardDialog2Bubble,
			};
		}

		if (currentPhaseInfo.round === 4) {
			return {
				dialog: dashboardDialog4,
				animation: dashboardDialog3BubbleAnimation,
			};
		}

		if (currentPhaseInfo.round === 5) {
			return {
				dialog: dashboardDialog5,
				animation: dashboardDialog3BubbleAnimation,
			};
		}

		if (currentPhaseInfo.round === 6) {
			return {
				dialog: dashboardDialog6,
				bg: dashboardDialog4Bubble,
			};
		}

		if (currentPhaseInfo.round === 7) {
			return {
				dialog: dashboardDialog7,
				bg: dashboardDialog5Bubble,
			};
		}

		if (currentPhaseInfo.round === 8) {
			return {
				dialog: dashboardDialog8,
				animation: dashboardDialog6BubbleAnimation,
			};
		}

		if (currentPhaseInfo.round === 9) {
			return {
				dialog: dashboardDialog9,
				animation: dashboardDialog6BubbleAnimation,
			};
		}
	}

	if (currentPhaseInfo.question === 'greenBuilding') {
		if (currentPhaseInfo.round === 1) {
			return {
				dialog: greenBuildingDialog1,
				animation: greenBuildingBubble1Animation,
			};
		}

		if (currentPhaseInfo.round === 2) {
			return {
				dialog: greenBuildingDialog2,
				animation: greenBuildingBubble1Animation,
			};
		}

		if (currentPhaseInfo.round === 3) {
			return {
				dialog: greenBuildingDialog3,
				bg: greenBuildingBubble2,
			};
		}

		if (currentPhaseInfo.round === 4) {
			return {
				dialog: greenBuildingDialog4,
				bg: greenBuildingBubble2,
			};
		}

		if (currentPhaseInfo.round === 5) {
			return {
				dialog: greenBuildingDialog5,
				bg: greenBuildingBubble3,
			};
		}

		if (currentPhaseInfo.round === 6) {
			return {
				dialog: greenBuildingDialog6,
				bg: greenBuildingBubble4,
			};
		}

		if (currentPhaseInfo.round === 7) {
			return {
				dialog: greenBuildingDialog7,
				animation: greenBuildingBubble5Animation,
			};
		}

		if (currentPhaseInfo.round === 8) {
			return {
				dialog: greenBuildingDialog8,
				animation: greenBuildingBubble5Animation,
			};
		}

		if (currentPhaseInfo.round === 9) {
			return {
				dialog: greenBuildingDialog9,
				animation: greenBuildingBubble6Animation,
			};
		}

		if (currentPhaseInfo.round === 10) {
			return {
				dialog: greenBuildingDialog10,
				animation: greenBuildingBubble6Animation,
			};
		}
	}

	return {} as PhaseType;
};

const Scene1Question = () => {
	const currentPhaseInfo = ConversationContext.useSelector(state => state.context.phase);
	const stateAction = ConversationContext.useActorRef();
	const { registerRoomHelper } = useSubscribe({ channel: 'subscribeChannel', room: STAGE3_ROOM });
	const { sendEvent, receivedEvent } = registerRoomHelper();
	const animation = useMemo(() => {
		return animationItemsByCategories[currentPhaseInfo.question][currentPhaseInfo.round];
	}, [currentPhaseInfo.question, currentPhaseInfo.round]);
	const [options, setOptions] = useState<AnimationOptions>({
		animationData: animation,
		loop: true,
		autoplay: true,
	});
	const {loopCommentary, stop} = useSoundEffect();
	const { View, getDuration } = useLottie(options, { width: 2560 });
	const videoDurationWithSecond = getDuration() ?? 0;
	const videoDuration = videoDurationWithSecond >= 4 ? videoDurationWithSecond * 1000 : DELAY_TIME;
	const { questionStatus, setQuestionStatus } = useQuestion();
	const router = useRouter();
	const pickLionAnimation = pickLionType(currentPhaseInfo);

	useEffect(() => {
		loopCommentary();

		return () => {
			stop()
		}
	}, []);

	useEffect(() => {
		setOptions(prevState => ({...prevState, animationData: animation}));
	}, [animation]);

	// question group is ended
	useEffect(() => {
		if (currentPhaseInfo.question === SCENE1SITUATION.DASHBOARD && currentPhaseInfo.round === 9 && !questionStatus.dashboard) {
			sendEvent({ messageType: SOCKET_EVENTS.DASHBOARD_END });
		}

		if (currentPhaseInfo.question === SCENE1SITUATION.GREEN_BUILDING && currentPhaseInfo.round === 10 && !questionStatus.greenBuilding) {
			sendEvent({ messageType: SOCKET_EVENTS.GREEN_BUILDING_END });
		}

		if (currentPhaseInfo.question === SCENE1SITUATION.CARBON_FOOTPRINT && currentPhaseInfo.round === 10 && !questionStatus.carbonFootprint) {
			sendEvent({ messageType: SOCKET_EVENTS.CARBON_FOOTPRINT_END });
		}
	}, [currentPhaseInfo.question, currentPhaseInfo.round, questionStatus, sendEvent]);

	// In part of question is finished
	useEffect(() => {
		receivedEvent(({ messageType }) => {
			if (messageType === SOCKET_EVENTS.DASHBOARD_FINISH) {
				setQuestionStatus({ ...questionStatus, dashboard: true })
				stateAction.send({ type: 'RESTART_SCENE1'})
				router.push('/stage3/scene1');
			}

			if (messageType === SOCKET_EVENTS.GREEN_BUILDING_FINISH) {
				setQuestionStatus({ ...questionStatus, greenBuilding: true })
				stateAction.send({ type: 'RESTART_SCENE1' })
				router.push('/stage3/scene1');
			}

			if (messageType === SOCKET_EVENTS.CARBON_FOOTPRINT_FINISH) {
				setQuestionStatus({ ...questionStatus, carbonFootprint: true })
				stateAction.send({ type: 'RESTART_SCENE1' })
				router.push('/stage3/scene1');
			}
		})
	}, [currentPhaseInfo, questionStatus, receivedEvent, router, setQuestionStatus, stateAction])

	useEffect(() => {
		if (currentPhaseInfo.question === SCENE1SITUATION.GREEN_BUILDING) {
			if (currentPhaseInfo.round === 1) {
				sendEvent({ messageType: SOCKET_EVENTS.QUEST_GREENBUILDING_QUIZ1_START });
			}
			if (currentPhaseInfo.round === 4) {
				sendEvent({ messageType: SOCKET_EVENTS.QUEST_GREENBUILDING_QUIZ4_START });
			}
		}
		if (currentPhaseInfo.question === SCENE1SITUATION.DASHBOARD) {
			if (currentPhaseInfo.round === 2) {
				sendEvent({ messageType: SOCKET_EVENTS.QUEST_DASHBOARD_QUIZ2_START });
			}
		}
		if (currentPhaseInfo.question === SCENE1SITUATION.CARBON_FOOTPRINT) {
			if (currentPhaseInfo.round === 1) {
				sendEvent({ messageType: SOCKET_EVENTS.QUEST_CARBONFOOTPRINT_QUIZ1_START });
			}
		}
	}, [currentPhaseInfo.question, currentPhaseInfo.round, sendEvent]);

	useEffect(() => {
		receivedEvent(({ messageType }) => {
			if (messageType === SOCKET_EVENTS.QUEST_GREENBUILDING_QUIZ1_END) {
				stateAction.send({ type: 'NEXT_TO_DIALOG_2' });
			}

			if (messageType === SOCKET_EVENTS.QUEST_GREENBUILDING_QUIZ4_END) {
				stateAction.send({ type: 'NEXT_TO_DIALOG_5' });
			}

			if (messageType === SOCKET_EVENTS.QUEST_DASHBOARD_QUIZ2_END) {
				stateAction.send({ type: 'NEXT_TO_DIALOG_3' });
			}

			if (messageType === SOCKET_EVENTS.QUEST_CARBONFOOTPRINT_QUIZ1_END) {
				stateAction.send({ type: 'NEXT_TO_DIALOG_2' });
			}
		});
	}, [receivedEvent, stateAction]);

	useEffect(() => {
		let timerId: NodeJS.Timeout;
		// MARK: - if I have to refactor 
		// that and I will extra code block as function to reuse it
		if (currentPhaseInfo.question === SCENE1SITUATION.GREEN_BUILDING) {
			// animation
			if (currentPhaseInfo.round === 2) {
				timerId = setTimeout(() => {
					stateAction.send({ type: 'NEXT_TO_DIALOG_3' });
				}, videoDuration);
			}
			if (currentPhaseInfo.round === 3) {
				timerId = setTimeout(() => {
					stateAction.send({ type: 'NEXT_TO_DIALOG_4' });
				}, DELAY_TIME);
			}
			if (currentPhaseInfo.round === 5) {
				timerId = setTimeout(() => {
					stateAction.send({ type: 'NEXT_TO_DIALOG_6' });
				}, DELAY_TIME);
			}
			if (currentPhaseInfo.round === 6) {
				timerId = setTimeout(() => {
					stateAction.send({ type: 'NEXT_TO_DIALOG_7' });
				}, DELAY_TIME);
			}
			// animation
			if (currentPhaseInfo.round === 7) {
				timerId = setTimeout(() => {
					stateAction.send({ type: 'NEXT_TO_DIALOG_8' });
				}, videoDuration);
			}
			// animation
			if (currentPhaseInfo.round === 8) {
				timerId = setTimeout(() => {
					stateAction.send({ type: 'NEXT_TO_DIALOG_9' });					
				}, 6500);
			}
			// animation
			if (currentPhaseInfo.round === 9) {
				timerId = setTimeout(() => {
					stateAction.send({ type: 'NEXT_TO_DIALOG_10' });
				}, DELAY_TIME);
			}
		}
		if (currentPhaseInfo.question === SCENE1SITUATION.DASHBOARD) {
			if (currentPhaseInfo.round === 1) {
				timerId = setTimeout(() => {
					stateAction.send({ type: 'NEXT_TO_DIALOG_2' });
				}, DELAY_TIME);
			}

			if (currentPhaseInfo.round === 3) {
				timerId = setTimeout(() => {
					stateAction.send({ type: 'NEXT_TO_DIALOG_4' });
				}, DELAY_TIME);
			}
			// animation
			if (currentPhaseInfo.round === 4) {
				timerId = setTimeout(() => {
					stateAction.send({ type: 'NEXT_TO_DIALOG_5' });
				}, videoDuration);
			}
			// animation
			if (currentPhaseInfo.round === 5) {
				timerId = setTimeout(() => {
					stateAction.send({ type: 'NEXT_TO_DIALOG_6' });
				}, videoDuration);
			}

			if (currentPhaseInfo.round === 6) {
				timerId = setTimeout(() => {
					stateAction.send({ type: 'NEXT_TO_DIALOG_7' });
				}, DELAY_TIME);
			}

			if (currentPhaseInfo.round === 7) {
				timerId = setTimeout(() => {
					stateAction.send({ type: 'NEXT_TO_DIALOG_8' });
				}, DELAY_TIME);
			}
			// animation
			if (currentPhaseInfo.round === 8) {
				timerId = setTimeout(() => {
					stateAction.send({ type: 'NEXT_TO_DIALOG_9' });
				}, videoDuration);
			}
		}
		if (currentPhaseInfo.question === SCENE1SITUATION.CARBON_FOOTPRINT) {
			// animation
			if (currentPhaseInfo.round === 2) {
				timerId = setTimeout(() => {
					stateAction.send({ type: 'NEXT_TO_DIALOG_3' });
				}, videoDuration);
			}

			if (currentPhaseInfo.round === 3) {
				timerId = setTimeout(() => {
					stateAction.send({ type: 'NEXT_TO_DIALOG_4' });
				}, DELAY_TIME);
			}

			if (currentPhaseInfo.round === 4) {
				timerId = setTimeout(() => {
					stateAction.send({ type: 'NEXT_TO_DIALOG_5' });
				}, DELAY_TIME);
			}

			if (currentPhaseInfo.round === 5) {
				timerId = setTimeout(() => {
					stateAction.send({ type: 'NEXT_TO_DIALOG_6' });
				}, DELAY_TIME);
			}

			if (currentPhaseInfo.round === 6) {
				timerId = setTimeout(() => {
					stateAction.send({ type: 'NEXT_TO_DIALOG_7' });
				}, DELAY_TIME);
			}

			if (currentPhaseInfo.round === 7) {
				timerId = setTimeout(() => {
					stateAction.send({ type: 'NEXT_TO_DIALOG_8' });
				}, DELAY_TIME);
			}

			if (currentPhaseInfo.round === 8) {
				timerId = setTimeout(() => {
					stateAction.send({ type: 'NEXT_TO_DIALOG_9' });
				}, DELAY_TIME);
			}

			if (currentPhaseInfo.round === 9) {
				timerId = setTimeout(() => {
					stateAction.send({ type: 'NEXT_TO_DIALOG_10' });
				}, DELAY_TIME);
			}
		}

		return () => {
			if (timerId) clearTimeout(timerId);
		}
	}, [currentPhaseInfo.question, currentPhaseInfo.round, stateAction, videoDuration, animation]);

	// next to scene2
	useEffect(() => {
		receivedEvent(({ messageType }) => {
			if (messageType === SOCKET_EVENTS.GO_TO_SCENE2) {
				stateAction.send({ type: 'NEXT_TO_SCENE2_INTRODUCTION' });
				router.push('/stage3/scene2');
			}
		});
	}, [receivedEvent, router, stateAction]);
	// here we go
	useEffect(() => {
		receivedEvent(({ messageType }) => {
			if (messageType === SOCKET_EVENTS.DASHBOARD_START) {
				stateAction.send({ type: 'NEXT_TO_SCENE1_DASHBOARD' });
			}

			if (messageType === SOCKET_EVENTS.GREEN_BUILDING_START) {
				stateAction.send({ type: 'NEXT_TO_SCENE1_GREEN_BUILDING' });
			}

			if (messageType === SOCKET_EVENTS.CARBON_FOOTPRINT_START) {
				stateAction.send({ type: 'NEXT_TO_SCENE1_CARBON_FOOTPRINT' });
			}
		});
	}, [receivedEvent, stateAction]);

	useEffect(() => {
		receivedEvent(({messageType}) => {
			if (messageType === SOCKET_EVENTS.DASHBOARD_RESTART) {
				stateAction.send({ type: 'NEXT_TO_SCENE1_DASHBOARD' });
			}

			if (messageType === SOCKET_EVENTS.GREEN_BUILDING_RESTART) {
				stateAction.send({ type: 'NEXT_TO_SCENE1_GREEN_BUILDING' });
			}

			if (messageType === SOCKET_EVENTS.CARBON_FOOTPRINT_RESTART) {
				stateAction.send({ type: 'NEXT_TO_SCENE1_CARBON_FOOTPRINT' });
			}
		})
	}, [receivedEvent, stateAction]);


	const phaseParams = getCurrentPhaseImg(currentPhaseInfo);

	return (
		<Box position="relative" display="flex" justifyContent="center">
			{/* <FadeInImage src={bg} alt="Unresolved Question" priority={true} /> */}
			<NextImage src={bg} alt="Unresolved Question" priority={true} />
			<FadeIn delay={1.5}>
				<Box sx={{ transform: 'translateX(-50%)' }} position="absolute" top={0} left="50%">
					{View}
					{phaseParams?.bg && (
						<NextImage width={2560} src={phaseParams.bg} alt="Dialog1Bubble" priority={false} />
					)}
				</Box>
				<Box position="absolute" top={0} left={0}>
					<NextImage src={DialogBg} alt="dialog" priority={false} />
					<Box position="absolute" bottom={0}>
						<NextImage src={phaseParams?.dialog} alt="dialog1" />
					</Box>
				</Box>
				<Box position="absolute" right={0} bottom={-100}>
					<Lottie style={{ transform: 'scale(1.35)' }} animationData={pickLionAnimation} loop />
				</Box>
			</FadeIn>
		</Box>
	);
};

export default Scene1Question;
