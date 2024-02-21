export const SOCKET_EVENTS = {
	START: 'start',
	READY_FOR_QUEST: 'readyForQuest',
	// emit from control board
	RAIN_RECYCLE_START: 'rainRecycle:start',
	RAIN_RECYCLE_END: 'rainRecycle:end',
	AQUAPONICS_START: 'aquaponics:start',
	AQUAPONICS_END: 'aquaponics:end',
	CARBON_FOOTPRINT_START: 'carbonFootprint:start',
	CARBON_FOOTPRINT_END: 'carbonFootprint:end',
	DASHBOARD_START: 'dashboard:start',
	DASHBOARD_END: 'dashboard:end',
	GREEN_BUILDING_START: 'greenBuilding:start',
	GREEN_BUILDING_END: 'greenBuilding:end',
	SOLAR_POWER_START: 'solarPower:start',
	SOLAR_POWER_END: 'solarPower:end',
	// emit from screen
	QUEST_RAINWATER_QUIZ1_START: 'questRainwater_quiz1:start',
	QUEST_RAINWATER_QUIZ1_END: 'questRainwater_quiz1:end',
	QUEST_RAINWATER_QUIZ2_START: 'questRainwater_quiz2:start',
	QUEST_RAINWATER_QUIZ2_END: 'questRainwater_quiz2:end',
	QUEST_RAINWATER_QUIZ3_START: 'questRainwater_quiz3:start',
	QUEST_RAINWATER_QUIZ3_END: 'questRainwater_quiz3:end',
	QUEST_RAINWATER_QUIZ4_START: 'questRainwater_quiz4:start',
	QUEST_RAINWATER_QUIZ4_END: 'questRainwater_quiz4:end',
	QUEST_RAINWATER_QUIZ5_START: 'questRainwater_quiz5:start',
	QUEST_RAINWATER_QUIZ5_END: 'questRainwater_quiz5:end',
	QUEST_RAINWATER_QUIZ6_START: 'questRainwater_quiz6:start',
	QUEST_RAINWATER_QUIZ6_END: 'questRainwater_quiz6:end',
	QUEST_RAINWATER_QUIZ7_START: 'questRainwater_quiz7:start',
  QUEST_RAINWATER_QUIZ7_END: 'questRainwater_quiz7:end',
  QUEST_RAINWATER_QUIZ8_START: 'questRainwater_quiz8:start',
	QUEST_RAINWATER_QUIZ8_END: 'questRainwater_quiz8:end'
};

export enum QuestNames {
	RAIN_RECYCLE = 'rainRecycle',
	AQUAPONICS = 'aquaponics',
	CARBON_FOOTPRINT = 'carbonFootprint',
	DASHBOARD = 'dashboard',
	GREEN_BUILDING = 'greenBuilding',
	SOLAR_POWER = 'solarPower',
}
