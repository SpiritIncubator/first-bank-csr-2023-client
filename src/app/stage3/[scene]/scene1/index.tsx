import { useEffect, useState } from 'react';
import Box from '@mui/material/Box'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Lottie from 'lottie-react';
import { SOCKET_EVENTS } from '@/app/stage3/constants';
import { useSubscribe } from '@/app/hooks/useSubscribe';
import { STAGE3_ROOM } from '@/constants'
import { ConversationContext } from '../../layout';
// import { scene1BgBase64 } from './bg-base64';
import Scene1Bg from '../../assets/scene1-background.svg'
import DialogBg from '../../assets/dialogBox.svg'
import UnResolvedQuestion from '../../assets/unResolvedQuestion.svg'
import FadeIn from '@/app/_components/Transitions/FadeIn';
import { useQuestion } from '@/app/stage3/layout';

import dashboardResolvedImg from '../../assets/question-dashboard.svg';
import greenBuildingResolvedImg from '../../assets/question-greenBuilding.svg';
import carbonFootprintResolvedImg from '../../assets/question-carbonFootprint.svg';
import Scene1Introduction1 from '../../assets/scene1-introduction1.svg';
import Scene1Introduction2 from '../../assets/scene1-introduction2.svg';
import CompletedScene1Question from '../../assets/next_to_round.svg';
import lionAnimationData from '@/app/stage3/animationData/leo_2-11_normal_smile1.json';

const DELAY_SECONDS = 4000

const Scene1Page = () => {
  const router = useRouter();
  const [hasLoaded, setHasLoaded] = useState(false);
  const currentPhaseInfo = ConversationContext.useSelector(state => state.context.phase);
  const action = ConversationContext.useActorRef();
  const [delayLoaded, setDelayLoaded] = useState(false);
  const { registerRoomHelper } = useSubscribe({ channel: 'subscribeChannel', room: STAGE3_ROOM });
  const { receivedEvent, sendEvent } = registerRoomHelper();
  const { questionStatus } = useQuestion();
  const stateAction = ConversationContext.useActorRef();
  const isScene1InitialPhase = currentPhaseInfo.level === 1 && currentPhaseInfo.question === 'initial';
  const isInitialDialog1 = currentPhaseInfo.round === 0 && isScene1InitialPhase;
  const isDialog2 = currentPhaseInfo.round === 1 && isScene1InitialPhase;
  
  function getDialogImage() {
    if (questionStatus.carbonFootprint === true && questionStatus.dashboard === true && questionStatus.greenBuilding === true) {
      return CompletedScene1Question;
    }

    if (isDialog2) {
      return Scene1Introduction2;
    }

    if (isInitialDialog1) {
      return Scene1Introduction1;
    }
  
    return Scene1Introduction2;
  }


  useEffect(() => {
    if (isInitialDialog1) {
      setTimeout(() => {
        action.send({ type: 'NEXT_TO_SCENE1_INTRODUCTION_PART_TWO' });
        sendEvent({ messageType: SOCKET_EVENTS.SCENE1_READY_FOR_QUEST });
      }, DELAY_SECONDS);
    }
  }, [isInitialDialog1]);

  useEffect(() => {
    receivedEvent(({ messageType }) => {
      if (messageType === SOCKET_EVENTS) {
        action.send({ type: 'GO_TO_SCENE2_START' });
        router.push('/stage3/scene2');
      }
    });
  })

  useEffect(() => {
    receivedEvent(({ messageType }) => {
      console.log('Scene1 received event', messageType);
      if (messageType === SOCKET_EVENTS.DASHBOARD_START) {
        action.send({ type: 'NEXT_TO_SCENE1_DASHBOARD' });
        router.push('/stage3/scene1/question'); 
      }

      if (messageType === SOCKET_EVENTS.GREEN_BUILDING_START) {
        action.send({ type: 'NEXT_TO_SCENE1_GREEN_BUILDING' });
        router.push('/stage3/scene1/question'); 
      }

      if (messageType === SOCKET_EVENTS.CARBON_FOOTPRINT_START) {
        action.send({ type: 'NEXT_TO_SCENE1_CARBON_FOOTPRINT' });
        router.push('/stage3/scene1/question'); 
      }    
    })
  }, [action, receivedEvent, router]);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    timer = setTimeout(() => {
      setDelayLoaded(true);
    }, 1500);

    return () => {
      clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    receivedEvent(({ messageType }) => {
      if (messageType === SOCKET_EVENTS.GO_TO_SCENE2) {
        stateAction.send({ type: 'NEXT_TO_SCENE2_INTRODUCTION' });
        router.push('/stage3/scene2');
      }
    });
  }, [receivedEvent, router, stateAction]);

  return (
    <Box position="relative">
      {!hasLoaded && (
        <Box width={2560} height={1440} bgcolor="#fff" position="absolute" zIndex={999} left={0} top={0} />
      )}
      {delayLoaded && (
        <FadeIn>
          <Box position="absolute" top={250} left={650}>
            <Image src={questionStatus.greenBuilding ? greenBuildingResolvedImg : UnResolvedQuestion} alt="unresolved-question" />
          </Box>
          <Box position="absolute" top={830} left={730}>
            <Image src={questionStatus.carbonFootprint ? carbonFootprintResolvedImg : UnResolvedQuestion} alt="unresolved-question" />
          </Box>
          <Box position="absolute" top={300} right={550}>
            <Image src={questionStatus.dashboard ? dashboardResolvedImg : UnResolvedQuestion} alt="unresolved-question" />
          </Box>
          <Box position="absolute" top={0} left={0}>
            <Image src={DialogBg} alt="dialog" />
          </Box>
          <Box sx={{ transform: 'translateX(-50%)' }} position="absolute" bottom={0} left="50%">
            <Image src={getDialogImage()} alt="dialog" />
          </Box>
        </FadeIn>
      )}
      <FadeIn delay={1}>
        <Image src={Scene1Bg} alt="scene1" priority onLoadingComplete={() => {
          setHasLoaded(true)
        }} />
      </FadeIn>
      <FadeIn delay={1.5}>
        <Box position="absolute" right={0} bottom={-100} zIndex={999}>
          <Lottie style={{ transform: 'scale(1.35)' }} animationData={lionAnimationData} loop />
        </Box>
      </FadeIn>
    </Box>
  )
}

export default Scene1Page;