import { Scene, QuestNames } from '@/app/stage3/controlBoard/constants';
import { SetStateAction, Dispatch, createContext } from 'react';



type QuestFinished = {
  [key in QuestNames]?: boolean;
}
export type ControlBoardQuestStatus = {
  SCENE1: boolean;
  SCENE2: boolean;
  currentQuest: string;
  currentScene: Scene;
} & QuestFinished

export const ControlBoardContext = createContext<{
  questStatus: ControlBoardQuestStatus,
  setQuestStatus: Dispatch<SetStateAction<ControlBoardQuestStatus>>
}>({
  questStatus: {
    currentQuest: '',
    currentScene: Scene.Scene1,

    SCENE1: false,
    [QuestNames.DASHBOARD]: false,
    [QuestNames.GREEN_BUILDING]: false,
    [QuestNames.CARBON_FOOTPRINT]: false,

    SCENE2: false,
    [QuestNames.RAIN_RECYCLE]: false,
    [QuestNames.AQUAPONICS]: false,
    [QuestNames.SOLAR_POWER]: false,


  },
  setQuestStatus: () => { }
});