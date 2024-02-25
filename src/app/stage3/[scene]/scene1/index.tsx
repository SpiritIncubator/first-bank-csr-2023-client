import { useEffect, useState } from 'react';
import Box from '@mui/material/Box'
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { SOCKET_EVENTS } from '@/app/stage3/constants';
import { useSubscribe } from '@/app/hooks/useSubscribe';
import { STAGE3_ROOM } from '@/constants'
import { ConversationContext } from '../../layout';
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

const DELAY_SECONDS = 4000

const Scene1Page = () => {
  const router = useRouter();
  const currentPhaseInfo = ConversationContext.useSelector(state => state.context.phase);
  const action = ConversationContext.useActorRef();
  const [delayLoaded, setDelayLoaded] = useState(false);
  const { registerRoomHelper } = useSubscribe({ channel: 'subscribeChannel', room: STAGE3_ROOM });
  const { receivedEvent } = registerRoomHelper();
  const { questionStatus } = useQuestion();
  const isScene1InitialPhase = currentPhaseInfo.level === 1 && currentPhaseInfo.question === 'initial';
  const isInitialDialog1 = currentPhaseInfo.round === 0 && isScene1InitialPhase;
  const isDialog2 = currentPhaseInfo.round === 1 && isScene1InitialPhase;

  useEffect(() => {
    if (isInitialDialog1) {
      setTimeout(() => {
        action.send({ type: 'NEXT_TO_SCENE1_INTRODUCTION_PART_TWO' });
      }, DELAY_SECONDS);
    }
  }, [isInitialDialog1, action]);

  useEffect(() => {
    receivedEvent(({ messageType }) => {
      if (messageType === SOCKET_EVENTS.DASHBOARD_START) {
        action.send({ type: 'NEXT_TO_SCENE1_DASHBOARD' });
      }

      if (messageType === SOCKET_EVENTS.GREEN_BUILDING_START) {
        action.send({ type: 'NEXT_TO_SCENE1_GREEN_BUILDING' });
      }

      if (messageType === SOCKET_EVENTS.CARBON_FOOTPRINT_START) {
        action.send({ type: 'NEXT_TO_SCENE1_CARBON_FOOTPRINT' });
      }

      router.push('/stage3/scene1/question');      
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

  return (
    <Box>
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
            <Image src={isDialog2 ? Scene1Introduction2 : Scene1Introduction1} alt="dialog" />
          </Box>
        </FadeIn>
      )}
      <FadeIn>
        <Image src={Scene1Bg} alt="scene1" priority />
      </FadeIn>
    </Box>
  )
}

export default Scene1Page;