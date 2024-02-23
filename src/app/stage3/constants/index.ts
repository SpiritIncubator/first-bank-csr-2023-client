import RainCycleOpen from '@/app/stage3/assets/controlBoard/stage3_question_rainRecycle_open.svg';
import AquaponicsOpen from '@/app/stage3/assets/controlBoard/stage3_question_aquaponics_open.svg';
import SolarPowerOpen from '@/app/stage3/assets/controlBoard/stage3_question_solarPower_open.svg';

import RainRecycleQuiz1Answer1 from '@/app/stage3/assets/controlBoard/answer/stage3_rainRecycle_quiz1_answer1.svg';
import RainRecycleQuiz1Answer1Active from '@/app/stage3/assets/controlBoard/answer/stage3_rainRecycle_quiz1_answer1_active.svg';
import RainRecycleQuiz1Answer2 from '@/app/stage3/assets/controlBoard/answer/stage3_rainRecycle_quiz1_answer2.svg';
import RainRecycleQuiz1Answer2Active from '@/app/stage3/assets/controlBoard/answer/stage3_rainRecycle_quiz1_answer2_active.svg';

import AquaponicsQuiz1Answer1 from '@/app/stage3/assets/controlBoard/answer/stage3_aquaponics_quiz1_answer1.svg';
import AquaponicsQuiz1Answer1Active from '@/app/stage3/assets/controlBoard/answer/stage3_aquaponics_quiz1_answer1_active.svg';
import AquaponicsQuiz1Answer2 from '@/app/stage3/assets/controlBoard/answer/stage3_aquaponics_quiz1_answer2.svg';
import AquaponicsQuiz1Answer2Active from '@/app/stage3/assets/controlBoard/answer/stage3_aquaponics_quiz1_answer2_active.svg';

import SolarPowerQuiz1Answer1 from '@/app/stage3/assets/controlBoard/answer/stage3_solarPower_quiz1_answer1.svg';
import SolarPowerQuiz1Answer1Active from '@/app/stage3/assets/controlBoard/answer/stage3_solarPower_quiz1_answer1_active.svg';
import SolarPowerQuiz1Answer2 from '@/app/stage3/assets/controlBoard/answer/stage3_solarPower_quiz1_answer2.svg';
import SolarPowerQuiz1Answer2Active from '@/app/stage3/assets/controlBoard/answer/stage3_solarPower_quiz1_answer2_active.svg';




export const SOCKET_EVENTS = {
	START: 'start',
	READY_FOR_QUEST: 'readyForQuest',
	// quest event 
	RAIN_RECYCLE_RESTART: 'rainRecycle:restart',
	RAIN_RECYCLE_START: 'rainRecycle:start',
	RAIN_RECYCLE_END: 'rainRecycle:end',
	RAIN_RECYCLE_FINISH: 'rainRecycle:finish',
	AQUAPONICS_START: 'aquaponics:start',
	AQUAPONICS_RESTART: 'aquaponics:restart',
	AQUAPONICS_END: 'aquaponics:end',
	AQUAPONICS_FINISH: 'aquaponics:finish',
	CARBON_FOOTPRINT_START: 'carbonFootprint:start',
	CARBON_FOOTPRINT_RESTART: 'carbonFootprint:restart',
	CARBON_FOOTPRINT_END: 'carbonFootprint:end',
	CARBON_FOOTPRINT_FINISH: 'carbonFootprint:finish',
	DASHBOARD_RESTART: 'dashboard:restart',
	DASHBOARD_START: 'dashboard:start',
	DASHBOARD_END: 'dashboard:end',
	DASHBOARD_FINISH: 'dashboard:finish',
	GREEN_BUILDING_RESTART: 'greenBuilding:restart',
	GREEN_BUILDING_START: 'greenBuilding:start',
	GREEN_BUILDING_END: 'greenBuilding:end',
	GREEN_BUILDING_FINISH: 'greenBuilding:finish',
	SOLAR_POWER_RESTART: 'solarPower:restart',
	SOLAR_POWER_START: 'solarPower:start',
	SOLAR_POWER_END: 'solarPower:end',
	SOLAR_POWER_FINISH: 'solarPower:finish',
	// emit from screen
	QUEST_RAINRECYCLE_QUIZ1_START: 'questRainRecycle_quiz1:start',
	QUEST_RAINRECYCLE_QUIZ1_END: 'questRainRecycle_quiz1:end',

	QUEST_AQUAPONICS_QUIZ1_START: 'questionAquaponics_quiz1:start',
	QUEST_AQUAPONICS_QUIZ1_END: 'questionAquaponics_quiz1:end',
	QUEST_AQUAPONICS_QUIZ3_START: 'questionAquaponics_quiz3:start',
	QUEST_AQUAPONICS_QUIZ3_END: 'questionAquaponics_quiz3:end',

	QUEST_SOLOARPOWER_QUIZ2_START: 'questionSolarPower_quiz2:start',
	QUEST_SOLOARPOWER_QUIZ2_END: 'questionSolarPower_quiz2:end',
};


export type QuizEventAnswerMapping = {
	[key in string]: {
		answer: number;
		finishEvent?: string;
		optionLeftImage: string;
		optionLeftImageActive: string;
		optionRightImage: string;
		optionRightImageActive: string;
		mainImage: string;
	};
};
export const quizEventAnswerMapping: QuizEventAnswerMapping = {
	[SOCKET_EVENTS.QUEST_RAINRECYCLE_QUIZ1_START]: {
		answer: 0,
		finishEvent: SOCKET_EVENTS.QUEST_RAINRECYCLE_QUIZ1_END,
		optionLeftImage: RainRecycleQuiz1Answer1,
		optionLeftImageActive: RainRecycleQuiz1Answer1Active,
		optionRightImage: RainRecycleQuiz1Answer2,
		optionRightImageActive: RainRecycleQuiz1Answer2Active,
		mainImage: RainCycleOpen,
	},
	[SOCKET_EVENTS.QUEST_AQUAPONICS_QUIZ1_START]: {
		answer: 0,
		finishEvent: SOCKET_EVENTS.QUEST_AQUAPONICS_QUIZ1_END,
		optionLeftImage: AquaponicsQuiz1Answer1,
		optionLeftImageActive: AquaponicsQuiz1Answer1Active,
		optionRightImage: AquaponicsQuiz1Answer2,
		optionRightImageActive: AquaponicsQuiz1Answer2Active,
		mainImage: AquaponicsOpen,
	},
	[SOCKET_EVENTS.QUEST_SOLOARPOWER_QUIZ2_START]: {
		answer: 0,
		finishEvent: SOCKET_EVENTS.QUEST_SOLOARPOWER_QUIZ2_END,
		optionLeftImage: SolarPowerQuiz1Answer1,
		optionLeftImageActive: SolarPowerQuiz1Answer1Active,
		optionRightImage: SolarPowerQuiz1Answer2,
		optionRightImageActive: SolarPowerQuiz1Answer2Active,
		mainImage: SolarPowerOpen,
	},
};



export enum QuestNames {
	RAIN_RECYCLE = 'rainRecycle',
	AQUAPONICS = 'aquaponics',
	CARBON_FOOTPRINT = 'carbonFootprint',
	DASHBOARD = 'dashboard',
	GREEN_BUILDING = 'greenBuilding',
	SOLAR_POWER = 'solarPower',
}
