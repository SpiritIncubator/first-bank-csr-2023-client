
import { QuestNames } from '../constants/index';
import { Dispatch, createContext } from 'react';



type QuestFinished = {
  [key in QuestNames]: boolean;
}
export type ControlBoardQuestStatus = {
  SCENE1: boolean;
  SCENE2: boolean;
  currentQuiz: string
} & QuestFinished

export const ControlBoardContext = createContext<{
  questStatus: ControlBoardQuestStatus,
  setQuestStatus: Dispatch<ControlBoardQuestStatus>
}>({
  questStatus: {
    currentQuiz: '',
    SCENE2: false,
    [QuestNames.RAIN_RECYCLE]: false,
    [QuestNames.AQUAPONICS]: false,
    [QuestNames.CARBON_FOOTPRINT]: false,

    SCENE1: false,
    [QuestNames.DASHBOARD]: false,
    [QuestNames.GREEN_BUILDING]: false,
    [QuestNames.SOLAR_POWER]: false,
  },
  setQuestStatus: () => { }
});