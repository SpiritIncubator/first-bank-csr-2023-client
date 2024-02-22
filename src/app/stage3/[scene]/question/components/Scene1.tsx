'use client';

import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import NextImage from 'next/image';
import Lottie from 'lottie-react';

import type { PhaseValueType } from '@/app/stage3/xstate/conversationMachine';
import { ConversationContext } from '@/app/stage3/layout';
import FadeIn from '@/app/_components/Transitions/FadeIn';
import bg from '@/app/stage3/assets/scene2-bg-without-border.svg';
import DialogBg from '@/app/stage3/assets/dialogBox.svg';
import lionAnimationData from '@/app/stage3/animationData/leo_2-11_normal_smile1.json';

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
import carbonFootprintBubble2Animation from '@/app/stage3/animationData/carbonFootprint/carbonFoorprint-bubble2.json';
import carbonFootprintBubble3 from '@/app/stage3/assets/carbonFootprint/carbonFoorprint-bubble3.svg';
import carbonFootprintBubble4 from '@/app/stage3/assets/carbonFootprint/carbonFoorprint-bubble4.svg';
import carbonFootprintBubble5 from '@/app/stage3/assets/carbonFootprint/carbonFoorprint-bubble5.svg';
import carbonFootprintBubble6 from '@/app/stage3/assets/carbonFootprint/carbonFoorprint-bubble6.svg';

type PhaseType = {
	dialog: any;
	bg?: any;
	animation?: any;
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

	return {} as PhaseType;
};

const Scene1Question = () => {
	const [imgLoaded, setImgLoaded] = useState(false);
	const currentPhaseInfo = ConversationContext.useSelector(state => state.context.phase);
	const stateAction = ConversationContext.useActorRef();
	const phaseParams = getCurrentPhaseImg(currentPhaseInfo);

	return (
		<Box position="relative" display="flex" justifyContent="center">
			<FadeIn delay={1}>
				<NextImage src={bg} alt="Unresolved Question" priority={true} />
			</FadeIn>
			<FadeIn delay={1.5}>
				<Box sx={{ transform: 'translateX(-50%)' }} position="absolute" top={0} left="50%">
					{/* {phaseParams.animation && (
              <Lottie style={{ width: 2560 }} animationData={phaseParams.animation} loop />
            )}
            {phaseParams.bg && (
              <NextImage width={2560} src={phaseParams.bg} alt="Dialog1Bubble" priority={false} />
            )} */}
				</Box>
				<Box position="absolute" top={0} left={0}>
					<NextImage src={DialogBg} alt="dialog" priority={false} />
					<Box position="absolute" bottom={0}>
						{/* <NextImage src={phaseParams.dialog} alt="dialog1" /> */}
					</Box>
				</Box>
				<Box position="absolute" right={0} bottom={-100}>
					<Lottie style={{ transform: 'scale(1.5)' }} animationData={lionAnimationData} loop />
				</Box>
			</FadeIn>
		</Box>
	);
};

export default Scene1Question;
