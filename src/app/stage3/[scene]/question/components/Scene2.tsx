'use client';

import { useEffect, useState, useMemo } from 'react';
import Box from '@mui/material/Box';
import NextImage from 'next/image';
import Lottie, { useLottie } from 'lottie-react';

import { useSubscribe } from '@/app/hooks/useSubscribe';
import type { PhaseValueType } from '@/app/stage3/xstate/conversationMachine';
import { ConversationContext } from '@/app/stage3/layout';
import FadeIn from '@/app/_components/Transitions/FadeIn';
import bg from '@/app/stage3/assets/scene2-bg-without-border.svg';
import DialogBg from '@/app/stage3/assets/dialogBox.svg';
import lionAnimationData from '@/app/stage3/animationData/leo_2-11_normal_smile1.json';
import { STAGE3_ROOM } from '@/constants';
import { SOCKET_EVENTS } from '@/app/stage3/constants';
import { useQuestion } from '@/app/stage3/layout';
// rainRecycle
import Dialog1Bg from '@/app/stage3/assets/rainRecycle/rainCycle-bg-1.svg';
import Dialog1 from '@/app/stage3/assets/rainRecycle/dialog1.svg';
import Dialog2Bg from '@/app/stage3/assets/rainRecycle/rainCycle-bg-2.svg';
import Dialog2 from '@/app/stage3/assets/rainRecycle/dialog2.svg';
import Dialog3Animation from '@/app/stage3/animationData/rainCycle3.json';
import Dialog3 from '@/app/stage3/assets/rainRecycle/dialog3.svg';
import Dialog4Animation from '@/app/stage3/animationData/rainCycle4.json';
import Dialog4 from '@/app/stage3/assets/rainRecycle/dialog4.svg';
import Dialog5Animation from '@/app/stage3/animationData/rainCycle5.json';
import Dialog5 from '@/app/stage3/assets/rainRecycle/dialog5.svg';
import Dialog6Animation from '@/app/stage3/animationData/rainCycle6.json';
import Dialog6 from '@/app/stage3/assets/rainRecycle/dialog6.svg';
import Dialog7 from '@/app/stage3/assets/rainRecycle/dialog7.svg';
import Dialog8 from '@/app/stage3/assets/rainRecycle/dialog8.svg';

// aquaonics
import AquaonicsDialog1 from '@/app/stage3/assets/aquaonics/aquaonics-dialog1.svg';
import AquaonicsBg1 from '@/app/stage3/assets/aquaonics/dialog2-bg.svg';
import AquaonicsDialog2 from '@/app/stage3/assets/aquaonics/aquaonics-dialog2.svg';
import AquaonicsBg2 from '@/app/stage3/assets/aquaonics/dialog2-bg.svg';
import AquaonicsDialog3 from '@/app/stage3/assets/aquaonics/aquaonics-dialog3.svg';
import AquaonicsBg3 from '@/app/stage3/assets/aquaonics/dialog3-bg.svg';
import AquaonicsDialog4 from '@/app/stage3/assets/aquaonics/aquaonics-dialog4.svg';
import AquaonicsBg4 from '@/app/stage3/assets/aquaonics/dialog4-bg.svg';
import AquaonicsDialog5 from '@/app/stage3/assets/aquaonics/aquaonics-dialog5.svg';
import AquaonicsDialog5Animation from '@/app/stage3/animationData/aquaonics/dialog5-bg.json';
import AquaonicsDialog6 from '@/app/stage3/assets/aquaonics/aquaonics-dialog6.svg';
import AquaonicsDialog6Animation from '@/app/stage3/animationData/aquaonics/dialog6-bg.json';
import AquaonicsDialog7 from '@/app/stage3/assets/aquaonics/aquaonics-dialog7.svg';
import AquaonicsBg7 from '@/app/stage3/assets/aquaonics/dialog7-bg.svg';
import AquaonicsDialog8 from '@/app/stage3/assets/aquaonics/aquaonics-dialog8.svg';
import AquaonicsDialog8Animation from '@/app/stage3/animationData/aquaonics/dialog8-bg.json';
import AquaonicsDialog9 from '@/app/stage3/assets/aquaonics/aquaonics-dialog9.svg';
import AquaonicsDialog9Animation from '@/app/stage3/animationData/aquaonics/dialog9-bg.json';
import AquaonicsDialog10 from '@/app/stage3/assets/aquaonics/aquaonics-dialog10.svg';
import AquaonicsDialog10Animation from '@/app/stage3/animationData/aquaonics/dialog10-bg.json';

// solarPower
import SolarPowerDialog1 from '@/app/stage3/assets/solarPower/solarPowerDialog1.svg';
import SolarPowerBg1 from '@/app/stage3/assets/solarPower/solarDialog1Bg.svg';
import SolarPowerDialog2 from '@/app/stage3/assets/solarPower/solarPowerDialog2.svg';
import SolarPowerBg2 from '@/app/stage3/assets/solarPower/solarDialog2Bg.svg';
import SolarPowerDialog3 from '@/app/stage3/assets/solarPower/solarPowerDialog3.svg';
import SolarPowerDialog3Animation from '@/app/stage3/animationData/solarPower/solarDialog3Bg.json';
import SolarPowerDialog4 from '@/app/stage3/assets/solarPower/solarPowerDialog4.svg';
import SolarPowerBg4 from '@/app/stage3/assets/solarPower/solarDialog4Bg.svg';
import SolarPowerDialog5 from '@/app/stage3/assets/solarPower/solarPowerDialog5.svg';
import SolarPowerBg5 from '@/app/stage3/assets/solarPower/solarDialog5Bg.png';
import SolarPowerDialog6 from '@/app/stage3/assets/solarPower/solarPowerDialog6.svg';
import SolarPowerDialog6Animation from '@/app/stage3/animationData/solarPower/solarDialog6Bg.json';
import SolarPowerDialog7 from '@/app/stage3/assets/solarPower/solarPowerDialog7.svg';
// import SolarPowerBg7 from '@/app/stage3/assets/solarPower/solarDialog7Bg.svg';
import SolarPowerDialog8 from '@/app/stage3/assets/solarPower/solarPowerDialog8.svg';

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
	RAIN_RECYCLE = 'rainRecycle',
	AQUAPONICS = 'aquaponics',
	SOLAR_POWER = 'solarPower',
}

const DELAY_TIME = 4000;

const animationItemsByCategories: Record<Partial<PhaseValueType['question']>, any> = {
	rainRecycle: {
		3: Dialog3Animation,
		4: Dialog4Animation,
		5: Dialog5Animation,
		6: Dialog6Animation,
	},
	aquaponics: {
		5: AquaonicsDialog5Animation,
		6: AquaonicsDialog6Animation,
		8: AquaonicsDialog8Animation,
		9: AquaonicsDialog9Animation,
		10: AquaonicsDialog10Animation,
	},
	solarPower: {
		3: SolarPowerDialog3Animation,
		6: SolarPowerDialog6Animation,
	},
	greenBuilding: {},
	dashboard: {},
	carbonFootprint: {},
	initial: {},
};

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

	if (currentPhaseInfo.question === 'aquaponics') {
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
  return {} as PhaseType;
}

const Scene2Question = () => {
  const [imgLoaded, setImgLoaded] = useState(false);
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
  const { View, getDuration } = useLottie(options, { width: 2560 });
  const videoDurationWithSecond = getDuration() ?? 0;
  const videoDuration = videoDurationWithSecond >= 4 ? videoDurationWithSecond * 1000 : DELAY_TIME;
  const { questionStatus, setQuestionStatus } = useQuestion();
  // const [questionStatus, setQuestionStatus] = useState({
  //   rainCycle: false,
  //   aquaponics: false,
  //   solarPower: false,
  // });

  // MARKER: useEffect whether animation is changed or not to update the animation
  useEffect(() => {
    setOptions(prevState => ({ ...prevState, animationData: animation }));
  }, [animation]);

  useEffect(() => {
    if (
      currentPhaseInfo.question === SCENE1SITUATION.RAIN_RECYCLE &&
      currentPhaseInfo.round === 9
    ) {
      sendEvent({ messageType: SOCKET_EVENTS.RAIN_RECYCLE_END });
    }

    if (currentPhaseInfo.question === SCENE1SITUATION.AQUAPONICS && currentPhaseInfo.round === 10) {
      sendEvent({ messageType: SOCKET_EVENTS.AQUAPONICS_END });
    }

    if (currentPhaseInfo.question === SCENE1SITUATION.SOLAR_POWER && currentPhaseInfo.round === 8) {
      sendEvent({ messageType: SOCKET_EVENTS.SOLAR_POWER_END });
    }
  }, [currentPhaseInfo.question, currentPhaseInfo.round, sendEvent]);

  useEffect(() => {
    receivedEvent(({ messageType }) => {
      if (messageType === SOCKET_EVENTS.RAIN_RECYCLE_FINISH) {
        setQuestionStatus({ ...questionStatus, rainRecycle: true });
      }

      if (messageType === SOCKET_EVENTS.AQUAPONICS_FINISH) {
        setQuestionStatus({ ...questionStatus, aquaponics: true });
      }

      if (messageType === SOCKET_EVENTS.SOLAR_POWER_FINISH) {
        setQuestionStatus({ ...questionStatus, solarPower: true });
      }
    });
  }, [questionStatus, receivedEvent, setQuestionStatus]);

  useEffect(() => {
    if (
      currentPhaseInfo.question === SCENE1SITUATION.RAIN_RECYCLE &&
      currentPhaseInfo.round === 1
    ) {
      sendEvent({ messageType: SOCKET_EVENTS.QUEST_RAINRECYCLE_QUIZ1_START });
    }

    if (currentPhaseInfo.question === SCENE1SITUATION.AQUAPONICS && currentPhaseInfo.round === 1) {
      sendEvent({ messageType: SOCKET_EVENTS.QUEST_AQUAPONICS_QUIZ1_START });
    }

    // if (currentPhaseInfo.question === SCENE1SITUATION.AQUAPONICS && currentPhaseInfo.round === 3) {
    //   sendEvent({ messageType: SOCKET_EVENTS.QUEST_AQUAPONICS_QUIZ3_START });
    // }

    if (currentPhaseInfo.question === SCENE1SITUATION.SOLAR_POWER && currentPhaseInfo.round === 2) {
      sendEvent({ messageType: SOCKET_EVENTS.QUEST_SOLOARPOWER_QUIZ2_START });
    }
  }, [receivedEvent, currentPhaseInfo.question, currentPhaseInfo.round, stateAction, sendEvent]);

  // received socket from control board
  useEffect(() => {
    receivedEvent(({ messageType }) => {
      if (messageType === SOCKET_EVENTS.QUEST_RAINRECYCLE_QUIZ1_END) {
        stateAction.send({ type: 'NEXT_TO_DIALOG_2' });
      }

      if (messageType === SOCKET_EVENTS.QUEST_AQUAPONICS_QUIZ1_END) {
        stateAction.send({ type: 'NEXT_TO_DIALOG_2' });
      }

      // if (messageType === SOCKET_EVENTS.QUEST_AQUAPONICS_QUIZ3_END) {
      //   stateAction.send({ type: 'NEXT_TO_DIALOG_4' });
      // }

      if (messageType === SOCKET_EVENTS.QUEST_SOLOARPOWER_QUIZ2_END) {
        stateAction.send({ type: 'NEXT_TO_DIALOG_3' });
      }
    });
  }, [receivedEvent, stateAction]);

  // Jump to next dialog if control board send the end message
  useEffect(() => {
    let timerId: NodeJS.Timeout;

    if (currentPhaseInfo.question === SCENE1SITUATION.RAIN_RECYCLE) {
      if (currentPhaseInfo.round === 2) {
        timerId = setTimeout(() => {
          stateAction.send({ type: 'NEXT_TO_DIALOG_3' });
        }, DELAY_TIME);
      }
      // animation
      if (currentPhaseInfo.round === 3) {
        timerId = setTimeout(() => {
          stateAction.send({ type: 'NEXT_TO_DIALOG_4' });
        }, videoDuration);
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
      // animation
      if (currentPhaseInfo.round === 6) {
        timerId = setTimeout(() => {
          stateAction.send({ type: 'NEXT_TO_DIALOG_7' });
        }, videoDuration);
      }
      if (currentPhaseInfo.round === 7) {
        timerId = setTimeout(() => {
          stateAction.send({ type: 'NEXT_TO_DIALOG_8' });
        }, videoDuration);
      }
    }

    if (currentPhaseInfo.question === SCENE1SITUATION.AQUAPONICS) {
      if (currentPhaseInfo.round === 2) {
        timerId = setTimeout(() => {
          stateAction.send({ type: 'NEXT_TO_DIALOG_3' });
        }, DELAY_TIME);
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

      // animation
      if (currentPhaseInfo.round === 5) {
        timerId = setTimeout(() => {
          stateAction.send({ type: 'NEXT_TO_DIALOG_6' });
        }, videoDuration);
      }

      // animation
      if (currentPhaseInfo.round === 6) {
        timerId = setTimeout(() => {
          stateAction.send({ type: 'NEXT_TO_DIALOG_7' });
        }, videoDuration);
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

      //animation
      if (currentPhaseInfo.round === 9) {
        timerId = setTimeout(() => {
          stateAction.send({ type: 'NEXT_TO_DIALOG_10' });
        }, videoDuration);
      }

      // animation tenth
    }

    if (currentPhaseInfo.question === SCENE1SITUATION.SOLAR_POWER) {
      if (currentPhaseInfo.round === 1) {
        timerId = setTimeout(() => {
          stateAction.send({ type: 'NEXT_TO_DIALOG_2' });
        }, DELAY_TIME);
      }

      // if (currentPhaseInfo.round === 2) {
      //   timerId = setTimeout(() => {
      //     stateAction.send({ type: 'NEXT_TO_DIALOG_3' });
      //   }, DELAY_TIME);
      // }
      // animation
      if (currentPhaseInfo.round === 3) {
        timerId = setTimeout(() => {
          stateAction.send({ type: 'NEXT_TO_DIALOG_4' });
        }, videoDuration);
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
      // animation
      if (currentPhaseInfo.round === 6) {
        timerId = setTimeout(() => {
          stateAction.send({ type: 'NEXT_TO_DIALOG_7' });
        }, videoDuration);
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
    }

    return () => {
      if (timerId) clearTimeout(timerId);
    };
  }, [stateAction, currentPhaseInfo.round, currentPhaseInfo.question, videoDuration]);

  // To avoid page has phenomenon of freshing
  useEffect(() => {
    let timer: NodeJS.Timeout;

    timer = setTimeout(() => {
      setImgLoaded(true);
    }, 1500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  // here we go
  useEffect(() => {
    receivedEvent(({ messageType }) => {
      console.log('messageType_scene2 :', messageType);
      if (messageType === SOCKET_EVENTS.SOLAR_POWER_START) {
        stateAction.send({ type: 'NEXT_TO_SCENE2_SOLAR_POWER' });
      }

      if (messageType === SOCKET_EVENTS.AQUAPONICS_START) {
        stateAction.send({ type: 'NEXT_TO_SCENE2_AQUAONICS' });
      }

      if (messageType === SOCKET_EVENTS.RAIN_RECYCLE_START) {
        stateAction.send({ type: 'NEXT_TO_SCENE2_RAIN_RECYCLE' });
      }
    });
  }, [receivedEvent, stateAction]);

  const phaseParams = getCurrentPhaseImg(currentPhaseInfo);

  return (
    <Box position="relative" display="flex" justifyContent="center">
      <FadeIn>
        <NextImage src={bg} alt="Unresolved Question" priority={true} />
      </FadeIn>
      {imgLoaded && (
        <FadeIn>
          <Box sx={{ transform: "translateX(-50%)" }} position="absolute" top={0} left="50%">
            {phaseParams?.animation && { View }}
            {phaseParams?.bg && (
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
            <Lottie style={{ transform: 'scale(1.5)' }} animationData={lionAnimationData} loop />
          </Box>
        </FadeIn>
      )}
    </Box>
  )
}

export default Scene2Question