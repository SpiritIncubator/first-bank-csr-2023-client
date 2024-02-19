'use client';

import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import NextImage from 'next/image';
import Lottie from 'lottie-react';

import type { PhaseValueType } from '../../xstate/conversationMachine';

import FadeIn from '@/app/_components/Transitions/FadeIn';
import bg from '../../assets/scene2-bg-without-border.svg';
import DialogBg from '../../assets/dialogBox.svg'
import lionAnimationData from '../../animationData/leo_2-11_normal_smile1.json';
import { ConversationContext } from '../../layout'
// rainRecycle
import Dialog1Bg from '../../assets/rainRecycle/rainCycle-bg-1.svg';
import Dialog1 from '../../assets/rainRecycle/dialog1.svg';
import Dialog2Bg from '../../assets/rainRecycle/rainCycle-bg-2.svg';
import Dialog2 from '../../assets/rainRecycle/dialog2.svg';
import Dialog3Animation from '../../animationData/rainCycle3.json'
import Dialog3 from '../../assets/rainRecycle/dialog3.svg';
import Dialog4Animation from '../../animationData/rainCycle4.json'
import Dialog4 from '../../assets/rainRecycle/dialog4.svg';
import Dialog5Animation from '../../animationData/rainCycle5.json'
import Dialog5 from '../../assets/rainRecycle/dialog5.svg';
import Dialog6Animation from '../../animationData/rainCycle6.json'
import Dialog6 from '../../assets/rainRecycle/dialog6.svg';
import Dialog7 from '../../assets/rainRecycle/dialog7.svg';
import Dialog8 from '../../assets/rainRecycle/dialog8.svg';

// aquaonics
import AquaonicsDialog1 from '../../assets/aquaonics/aquaonics-dialog1.svg';
import AquaonicsBg1 from '../../assets/aquaonics/dialog2-bg.svg';
import AquaonicsDialog2 from '../../assets/aquaonics/aquaonics-dialog2.svg';
import AquaonicsBg2 from '../../assets/aquaonics/dialog2-bg.svg';
import AquaonicsDialog3 from '../../assets/aquaonics/aquaonics-dialog3.svg';
import AquaonicsBg3 from '../../assets/aquaonics/dialog3-bg.svg';
import AquaonicsDialog4 from '../../assets/aquaonics/aquaonics-dialog4.svg';
import AquaonicsBg4 from '../../assets/aquaonics/dialog4-bg.svg';
import AquaonicsDialog5 from '../../assets/aquaonics/aquaonics-dialog5.svg';
import AquaonicsDialog5Animation from '../../animationData/aquaonics/dialog5-bg.json'
import AquaonicsDialog6 from '../../assets/aquaonics/aquaonics-dialog6.svg';
import AquaonicsDialog6Animation from '../../animationData/aquaonics/dialog6-bg.json'
import AquaonicsDialog7 from '../../assets/aquaonics/aquaonics-dialog7.svg';
import AquaonicsBg7 from '../../assets/aquaonics/dialog7-bg.svg';
import AquaonicsDialog8 from '../../assets/aquaonics/aquaonics-dialog8.svg';
import AquaonicsDialog8Animation from '../../animationData/aquaonics/dialog8-bg.json';
import AquaonicsDialog9 from '../../assets/aquaonics/aquaonics-dialog9.svg';
import AquaonicsDialog9Animation from '../../animationData/aquaonics/dialog9-bg.json';
import AquaonicsDialog10 from '../../assets/aquaonics/aquaonics-dialog10.svg';
import AquaonicsDialog10Animation from '../../animationData/aquaonics/dialog10-bg.json';

// solarPower
import SolarPowerDialog1 from '../../assets/solarPower/solarPowerDialog1.svg';
import SolarPowerBg1 from '../../assets/solarPower/solarDialog1Bg.svg';
import SolarPowerDialog2 from '../../assets/solarPower/solarPowerDialog2.svg';
import SolarPowerBg2 from '../../assets/solarPower/solarDialog2Bg.svg';
import SolarPowerDialog3 from '../../assets/solarPower/solarPowerDialog3.svg';
import SolarPowerDialog3Animation from '../../animationData/solarPower/solarDialog3Bg.json';
import SolarPowerDialog4 from '../../assets/solarPower/solarPowerDialog4.svg';
import SolarPowerBg4 from '../../assets/solarPower/solarDialog4Bg.svg';
import SolarPowerDialog5 from '../../assets/solarPower/solarPowerDialog5.svg';
import SolarPowerBg5 from '../../assets/solarPower/solarDialog5Bg.png';
import SolarPowerDialog6 from '../../assets/solarPower/solarPowerDialog6.svg';
import SolarPowerDialog6Animation from '../../animationData/solarPower/solarDialog6Bg.json';
import SolarPowerDialog7 from '../../assets/solarPower/solarPowerDialog7.svg';
import SolarPowerBg7 from '../../assets/solarPower/solarDialog7Bg.svg';
import SolarPowerDialog8 from '../../assets/solarPower/solarPowerDialog8.svg';

type PhaseType = {
  dialog: any;
  bg?: any;
  animation?: any;
}

const getCurrentPhaseImg = (currentPhaseInfo: PhaseValueType): PhaseType => {
  if (currentPhaseInfo.question === 'rainRecycle') {
    if (currentPhaseInfo.round === 1) {
      return {
        dialog: Dialog1,
        bg: Dialog1Bg,
      };
    }
    if (currentPhaseInfo.round === 2) {
      return {
        dialog: Dialog2,
        bg: Dialog2Bg,
      };
    }
    if (currentPhaseInfo.round === 3) {
      return {
        dialog: Dialog3,
        animation: Dialog3Animation,
      };
    }
    if (currentPhaseInfo.round === 4) {
      return {
        dialog: Dialog4,
        animation: Dialog3Animation,
      };
    }
    if (currentPhaseInfo.round === 5) {
      return {
        dialog: Dialog5,
        animation: Dialog4Animation,
      };
    }
    if (currentPhaseInfo.round === 6) {
      return {
        dialog: Dialog6,
        animation: Dialog5Animation,
      
      };
    }
    if (currentPhaseInfo.round === 7) {
      return {
        dialog: Dialog7,
        animation: Dialog4Animation,
      
      };
    }
    if (currentPhaseInfo.round === 8) {
      return {
        dialog: Dialog8,
        animation: Dialog6Animation,
      
      };
    }
  }

  if (currentPhaseInfo.question === 'aquaonics') {
    if (currentPhaseInfo.round === 1) {
      return {
        dialog: AquaonicsDialog1,
        bg: AquaonicsBg1,
      };
    }
    if (currentPhaseInfo.round === 2) {
      return {
        dialog: AquaonicsDialog2,
        bg: AquaonicsBg2,
      };
    }
    if (currentPhaseInfo.round === 3) {
      return {
        dialog: AquaonicsDialog3,
        bg: AquaonicsBg3,
      };
    }
    if (currentPhaseInfo.round === 4) {
      return {
        dialog: AquaonicsDialog4,
        bg: AquaonicsBg4,
      };
    }
    if (currentPhaseInfo.round === 5) {
      return {
        dialog: AquaonicsDialog5,
        animation: AquaonicsDialog5Animation,
      };
    }
    if (currentPhaseInfo.round === 6) {
      return {
        dialog: AquaonicsDialog6,
        animation: AquaonicsDialog6Animation,
      };
    }
    if (currentPhaseInfo.round === 7) {
      return {
        dialog: AquaonicsDialog7,
        bg: AquaonicsBg7,
      };
    }
    if (currentPhaseInfo.round === 8) {
      return {
        dialog: AquaonicsDialog8,
        animation: AquaonicsDialog8Animation,
      };
    }
    if (currentPhaseInfo.round === 9) {
      return {
        dialog: AquaonicsDialog9,
        animation: AquaonicsDialog9Animation,
      };
    }
    if (currentPhaseInfo.round === 10) {
      return {
        dialog: AquaonicsDialog10,
        animation: AquaonicsDialog10Animation,
      };
    }
  }
  
  if (currentPhaseInfo.question === 'solarPower') {
    if (currentPhaseInfo.round === 1) {
      return {
        dialog: SolarPowerDialog1,
        bg: SolarPowerBg1,
      };
    }

    if (currentPhaseInfo.round === 2) {
      return {
        dialog: SolarPowerDialog2,
        bg: SolarPowerBg2,
      };
    }

    if (currentPhaseInfo.round === 3) {
      return {
        dialog: SolarPowerDialog3,
        animation: SolarPowerDialog3Animation,
      };
    }

    if (currentPhaseInfo.round === 4) {
      return {
        dialog: SolarPowerDialog4,
        animation: SolarPowerDialog3Animation,
      };
    }

    if (currentPhaseInfo.round === 5) {
      return {
        dialog: SolarPowerDialog5,
        bg: SolarPowerBg4,
      };
    }

    if (currentPhaseInfo.round === 6) {
      return {
        dialog: SolarPowerDialog6,
        bg: SolarPowerBg5,
      };
    }

    if (currentPhaseInfo.round === 7) {
      return {
        dialog: SolarPowerDialog7,
        animation: SolarPowerDialog6Animation,
      };
    }

    if (currentPhaseInfo.round === 8) {
      return {
        dialog: SolarPowerDialog8,
        animation: SolarPowerDialog6Animation,
      };
    }
  }

  return {
    dialog: Dialog1,
    bg: Dialog1Bg,
  };
}

const Question = () => {
  const [imgLoaded, setImgLoaded] = useState(false);
  const currentPhaseInfo = ConversationContext.useSelector(state => state.context.phase);
  const stateAction = ConversationContext.useActorRef();

  useEffect(() => {
    setTimeout(() => {
      stateAction.send({ type: 'NEXT_TO_DIALOG_2' });
    }, 5000);

    setTimeout(() => {
      stateAction.send({ type: 'NEXT_TO_DIALOG_3' });
    }, 7000);

    setTimeout(() => {
      stateAction.send({ type: 'NEXT_TO_DIALOG_4' });
    }, 9000);

    setTimeout(() => {
      stateAction.send({ type: 'NEXT_TO_DIALOG_5' });
    }, 11000);

    setTimeout(() => {
      stateAction.send({ type: 'NEXT_TO_DIALOG_6' });
    }, 13000);

    setTimeout(() => {
      stateAction.send({ type: 'NEXT_TO_DIALOG_7' });
    }, 15000);

    setTimeout(() => {
      stateAction.send({ type: 'NEXT_TO_DIALOG_8' });
    }, 17000);
  }, [stateAction]);

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
            {phaseParams.animation && (
              <Lottie style={{width: 2560}} animationData={phaseParams.animation} loop />
            )}
            {phaseParams.bg && (
              <NextImage width={2560} src={phaseParams.bg} alt="Dialog1Bubble" priority={false} />
            )}
          </Box>
          <Box position="absolute" top={0} left={0}>
            <NextImage src={DialogBg} alt="dialog" priority={false} />
            <Box position="absolute" bottom={0}>
              <NextImage src={phaseParams.dialog} alt="dialog1" />
            </Box>
          </Box>
          <Box position="absolute" right={0} bottom={-100}>
            <Lottie style={{transform: 'scale(1.5)'}} animationData={lionAnimationData} loop />
          </Box>
        </FadeIn>
      )}
    </Box>
  )

}

export default Question