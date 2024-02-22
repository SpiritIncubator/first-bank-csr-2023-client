'use client';

import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import NextImage from 'next/image';
import Lottie from 'lottie-react';

import type { PhaseValueType } from '@/app/stage3/xstate/conversationMachine';
import { ConversationContext } from '@/app/stage3/layout';
import FadeIn from '@/app/_components/Transitions/FadeIn';
import bg from '@/app/stage3/assets/scene2-bg-without-border.svg';
import DialogBg from '@/app/stage3/assets/dialogBox.svg'
import lionAnimationData from '@/app/stage3/animationData/leo_2-11_normal_smile1.json';

// carbonFootprint
import carbonFootprintDialog1 from '@/app/stage3/assets/carbonFootprint/carbonFooterprint-dialog1.svg'
import carbonFootprintDialog2 from '@/app/stage3/assets/carbonFootprint/carbonFooterprint-dialog2.svg'
import carbonFootprintDialog3 from '@/app/stage3/assets/carbonFootprint/carbonFooterprint-dialog3.svg'
import carbonFootprintDialog4 from '@/app/stage3/assets/carbonFootprint/carbonFooterprint-dialog4.svg'
import carbonFootprintDialog5 from '@/app/stage3/assets/carbonFootprint/carbonFooterprint-dialog5.svg'
import carbonFootprintDialog5_2 from '@/app/stage3/assets/carbonFootprint/carbonFooterprint-dialog5-2.svg'
import carbonFootprintDialog7 from '@/app/stage3/assets/carbonFootprint/carbonFooterprint-dialog7.svg'
import carbonFootprintDialog7_2 from '@/app/stage3/assets/carbonFootprint/carbonFooterprint-dialog7-2.svg'
import carbonFootprintDialog8 from '@/app/stage3/assets/carbonFootprint/carbonFooterprint-dialog8.svg'
import carbonFootprintDialog9 from '@/app/stage3/assets/carbonFootprint/carbonFooterprint-dialog9.svg'
import carbonFootprintDialog10 from '@/app/stage3/assets/carbonFootprint/carbonFooterprint-dialog10.svg'

import carbonFootprintBubble1 from '@/app/stage3/assets/carbonFootprint/carbonFoorprint-bubble1.svg';
import carbonFootprintBubble2Animation from '@/app/stage3/animationData/carbonFootprint/carbonFoorprint-bubble2.json';
import carbonFootprintBubble3 from '@/app/stage3/assets/carbonFootprint/carbonFoorprint-bubble3.svg'
import carbonFootprintBubble4 from '@/app/stage3/assets/carbonFootprint/carbonFoorprint-bubble4.svg'
import carbonFootprintBubble5 from '@/app/stage3/assets/carbonFootprint/carbonFoorprint-bubble5.svg'
import carbonFootprintBubble6 from '@/app/stage3/assets/carbonFootprint/carbonFoorprint-bubble6.svg'

type PhaseType = {
  dialog: any;
  bg?: any;
  animation?: any;
}

const getCurrentPhaseImg = (currentPhaseInfo: PhaseValueType): PhaseType => {
  if (currentPhaseInfo.question === 'carbonFootprint') {
    if (currentPhaseInfo.round === 1) {
      return {
        dialog: carbonFootprintDialog1,
        bg: carbonFootprintBubble1
      }
    }

    if (currentPhaseInfo.round === 2) {
      return {
        dialog: carbonFootprintDialog2,
        animation: carbonFootprintBubble2Animation
      }
    }

    if (currentPhaseInfo.round === 3) {
      return {
        dialog: carbonFootprintDialog3,
        bg: carbonFootprintBubble3
      }
    }

    if (currentPhaseInfo.round === 4) {
      return {
        dialog: carbonFootprintDialog4,
        bg: carbonFootprintBubble3
      }
    }

    if (currentPhaseInfo.round === 5) {
      return {
        dialog: carbonFootprintDialog5,
        bg: carbonFootprintBubble4
      }
    }

    if (currentPhaseInfo.round === 6) {
      return {
        dialog: carbonFootprintDialog5_2,
        bg: carbonFootprintBubble4
      }
    }

    if (currentPhaseInfo.round === 7) {
      return {
        dialog: carbonFootprintDialog7,
        bg: carbonFootprintBubble5
      }
    }

    if (currentPhaseInfo.round === 8) {
      return {
        dialog: carbonFootprintDialog7_2,
        bg: carbonFootprintBubble5
      }
    }

    if (currentPhaseInfo.round === 9) {
      return {
        dialog: carbonFootprintDialog8,
        bg: carbonFootprintBubble6
      }
    }

    if (currentPhaseInfo.round === 10) {
      return {
        dialog: carbonFootprintDialog9,
        bg: carbonFootprintBubble6
      }
    }
  }
  // if (currentPhaseInfo.question === 'rainRecycle') {
  //   if (currentPhaseInfo.round === 1) {
  //     return {
  //       dialog: Dialog1,
  //       bg: Dialog1Bg,
  //     };
  //   }
  //   if (currentPhaseInfo.round === 2) {
  //     return {
  //       dialog: Dialog2,
  //       bg: Dialog2Bg,
  //     };
  //   }
  //   if (currentPhaseInfo.round === 3) {
  //     return {
  //       dialog: Dialog3,
  //       animation: Dialog3Animation,
  //     };
  //   }
  //   if (currentPhaseInfo.round === 4) {
  //     return {
  //       dialog: Dialog4,
  //       animation: Dialog3Animation,
  //     };
  //   }
  //   if (currentPhaseInfo.round === 5) {
  //     return {
  //       dialog: Dialog5,
  //       animation: Dialog4Animation,
  //     };
  //   }
  //   if (currentPhaseInfo.round === 6) {
  //     return {
  //       dialog: Dialog6,
  //       animation: Dialog5Animation,

  //     };
  //   }
  //   if (currentPhaseInfo.round === 7) {
  //     return {
  //       dialog: Dialog7,
  //       animation: Dialog4Animation,

  //     };
  //   }
  //   if (currentPhaseInfo.round === 8) {
  //     return {
  //       dialog: Dialog8,
  //       animation: Dialog6Animation,

  //     };
  //   }
  // }

  // if (currentPhaseInfo.question === 'aquaonics') {
  //   if (currentPhaseInfo.round === 1) {
  //     return {
  //       dialog: AquaonicsDialog1,
  //       bg: AquaonicsBg1,
  //     };
  //   }
  //   if (currentPhaseInfo.round === 2) {
  //     return {
  //       dialog: AquaonicsDialog2,
  //       bg: AquaonicsBg2,
  //     };
  //   }
  //   if (currentPhaseInfo.round === 3) {
  //     return {
  //       dialog: AquaonicsDialog3,
  //       bg: AquaonicsBg3,
  //     };
  //   }
  //   if (currentPhaseInfo.round === 4) {
  //     return {
  //       dialog: AquaonicsDialog4,
  //       bg: AquaonicsBg4,
  //     };
  //   }
  //   if (currentPhaseInfo.round === 5) {
  //     return {
  //       dialog: AquaonicsDialog5,
  //       animation: AquaonicsDialog5Animation,
  //     };
  //   }
  //   if (currentPhaseInfo.round === 6) {
  //     return {
  //       dialog: AquaonicsDialog6,
  //       animation: AquaonicsDialog6Animation,
  //     };
  //   }
  //   if (currentPhaseInfo.round === 7) {
  //     return {
  //       dialog: AquaonicsDialog7,
  //       bg: AquaonicsBg7,
  //     };
  //   }
  //   if (currentPhaseInfo.round === 8) {
  //     return {
  //       dialog: AquaonicsDialog8,
  //       animation: AquaonicsDialog8Animation,
  //     };
  //   }
  //   if (currentPhaseInfo.round === 9) {
  //     return {
  //       dialog: AquaonicsDialog9,
  //       animation: AquaonicsDialog9Animation,
  //     };
  //   }
  //   if (currentPhaseInfo.round === 10) {
  //     return {
  //       dialog: AquaonicsDialog10,
  //       animation: AquaonicsDialog10Animation,
  //     };
  //   }
  // }

  // if (currentPhaseInfo.question === 'solarPower') {
  //   if (currentPhaseInfo.round === 1) {
  //     return {
  //       dialog: SolarPowerDialog1,
  //       bg: SolarPowerBg1,
  //     };
  //   }

  //   if (currentPhaseInfo.round === 2) {
  //     return {
  //       dialog: SolarPowerDialog2,
  //       bg: SolarPowerBg2,
  //     };
  //   }

  //   if (currentPhaseInfo.round === 3) {
  //     return {
  //       dialog: SolarPowerDialog3,
  //       animation: SolarPowerDialog3Animation,
  //     };
  //   }

  //   if (currentPhaseInfo.round === 4) {
  //     return {
  //       dialog: SolarPowerDialog4,
  //       animation: SolarPowerDialog3Animation,
  //     };
  //   }

  //   if (currentPhaseInfo.round === 5) {
  //     return {
  //       dialog: SolarPowerDialog5,
  //       bg: SolarPowerBg4,
  //     };
  //   }

  //   if (currentPhaseInfo.round === 6) {
  //     return {
  //       dialog: SolarPowerDialog6,
  //       bg: SolarPowerBg5,
  //     };
  //   }

  //   if (currentPhaseInfo.round === 7) {
  //     return {
  //       dialog: SolarPowerDialog7,
  //       animation: SolarPowerDialog6Animation,
  //     };
  //   }

  //   if (currentPhaseInfo.round === 8) {
  //     return {
  //       dialog: SolarPowerDialog8,
  //       animation: SolarPowerDialog6Animation,
  //     };
  //   }
  // }

  // return {
  //   dialog: Dialog1,
  //   bg: Dialog1Bg,
  // };
}

const Scene1Question = () => {
  const [imgLoaded, setImgLoaded] = useState(false);
  const currentPhaseInfo = ConversationContext.useSelector(state => state.context.phase);
  const stateAction = ConversationContext.useActorRef();

  useEffect(() => {
    let timer: NodeJS.Timeout;

    timer = setTimeout(() => {
      setImgLoaded(true);
    }, 1500);

    return () => {
      clearTimeout(timer);
    }
  }, []);

  const phaseParams = getCurrentPhaseImg(currentPhaseInfo);

  return (
    <Box position="relative" display="flex" justifyContent="center">
      <FadeIn>
        <NextImage src={bg} alt="Unresolved Question" priority={true} />
      </FadeIn>
      {imgLoaded && (
        <FadeIn>
          <Box sx={{ transform: "translateX(-50%)" }} position="absolute" top={0} left="50%">
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
      )}
    </Box>
  )

}

export default Scene1Question;