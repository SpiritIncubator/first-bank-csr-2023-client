export const SOCKET_EVENTS = {
	START: 'start',
	READY_FOR_QUEST: 'readyForQuest',
	// emit from control board
	RAIN_RECYCLE_START: 'rainRecycle:start',
	RAIN_RECYCLE_END: 'rainRecycle:end',
	RAIN_RECYCLE_FINISH: 'rainRecycle:finish',
	AQUAPONICS_START: 'aquaponics:start',
	AQUAPONICS_END: 'aquaponics:end',
	AQUAPONICS_FINISH: 'aquaponics:finish',
	CARBON_FOOTPRINT_START: 'carbonFootprint:start',
	CARBON_FOOTPRINT_END: 'carbonFootprint:end',
	DASHBOARD_START: 'dashboard:start',
	DASHBOARD_END: 'dashboard:end',
	GREEN_BUILDING_START: 'greenBuilding:start',
	GREEN_BUILDING_END: 'greenBuilding:end',
	SOLAR_POWER_START: 'solarPower:start',
	SOLAR_POWER_END: 'solarPower:end',
	SOLAR_POWER_FINISH: 'solarPower:finish',
	// emit from screen
	QUEST_RAINWATER_QUIZ1_START: 'questRainwater_quiz1:start',
	QUEST_RAINWATER_QUIZ1_END: 'questRainwater_quiz1:end',

	QUEST_AQUAPONICS_QUIZ1_START: 'questionAquaponics_quiz1:start',
	QUEST_AQUAPONICS_QUIZ1_END: 'questionAquaponics_quiz1:end',
	QUEST_AQUAPONICS_QUIZ3_START: 'questionAquaponics_quiz3:start',
	QUEST_AQUAPONICS_QUIZ3_END: 'questionAquaponics_quiz3:end',

	QUEST_SOLOARPOWER_QUIZE2_START: 'questionSolarPower_quiz2:start',
	QUEST_SOLOARPOWER_QUIZE2_END: 'questionSolarPower_quiz2:end',
};


export enum QuestNames {
	RAIN_RECYCLE = 'rainRecycle',
	AQUAPONICS = 'aquaponics',
	CARBON_FOOTPRINT = 'carbonFootprint',
	DASHBOARD = 'dashboard',
	GREEN_BUILDING = 'greenBuilding',
	SOLAR_POWER = 'solarPower',
}
