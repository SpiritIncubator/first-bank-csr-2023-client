import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Lottie from 'lottie-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import FadeIn from '@/app/_components/Transitions/FadeIn';
import { ConversationContext } from '../../layout'
import lionAnimationData from '../../animationData/leo_2-11_normal_smile1.json';
import Scene2BgImg from '../../assets/scene2-bg.svg';
import UnResolvedQuestion from '../../assets/unResolvedQuestion.svg'
import DialogBg from '../../assets/dialogBox.svg'
import Fake1Img from '../../assets/fake1.svg';
import Fake2Img from '../../assets/fake2.svg';

const Scene2Page = () => {
  const router = useRouter();
  const currentPhaseInfo = ConversationContext.useSelector(state => state.context.phase);
  const action = ConversationContext.useActorRef();
  const isInitialDialog1 = currentPhaseInfo.round === 0 && currentPhaseInfo.level === 2;
  const [delayLoaded, setDelayLoaded] = useState(false);

  useEffect(() => {
    // TODO will receive
    if (isInitialDialog1) {
      setTimeout(() => {
        action.send({ type: 'NEXT_TO_DIALOG_2' });
      }, 2000);
    }
  }, [isInitialDialog1, action]);
  // simulate the user client to next page button
  useEffect(() => {
    if (currentPhaseInfo.round === 1 && currentPhaseInfo.level === 2) {
      setTimeout(() => {
        action.send({ type: 'NEXT_TO_SCENE2_AQUAONICS' });
        router.push('/stage3/scene2/question');
      }, 4000);
    }
  }, [currentPhaseInfo.round, currentPhaseInfo.level, action, router])

  useEffect(() => {
    let timer: NodeJS.Timeout;

    timer = setTimeout(() => {
      setDelayLoaded(true);
    }, 1500);
  }, []);

  return (
    <Box position="relative" width={2560} height={1440} overflow="hidden">
      {delayLoaded && (
        <FadeIn>
          <Box position="absolute" top={370} left={250}>
            <Image src={UnResolvedQuestion} alt="unresolved-question" />
          </Box>
          <Box position="absolute" top={800} left={570}>
            <Image src={UnResolvedQuestion} alt="unresolved-question" />
          </Box>
          <Box position="absolute" top={625} right={800}>
            <Image src={UnResolvedQuestion} alt="unresolved-question" />
          </Box>
          <Box position="absolute" top={0} left={0}>
            <Image src={DialogBg} alt="dialog" />
          </Box>
          <Box position="absolute" right={0} bottom={-150}>
            <Lottie animationData={lionAnimationData} loop />
          </Box>
          <Box sx={{ transform: 'translateX(-50%)' }} position="absolute" bottom={0} left="50%">
            <Image src={isInitialDialog1 ? Fake1Img : Fake2Img} alt="fake1" />
          </Box>
        </FadeIn>
      )}
      <FadeIn>/
        <Image src={Scene2BgImg} alt="scene2" priority />
      </FadeIn>
    </Box>
  )
}

export default Scene2Page;