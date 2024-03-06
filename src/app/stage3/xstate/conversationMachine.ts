import { setup } from 'xstate';

enum LevelEnum {
	START = 0,
	LEVEL1 = 1,
	LEVEL2 = 2,
	LEVEL3 = 3,
}

type TEvent =
	| 'NEXT_TO_SCENE1_INTRODUCTION'
	| 'NEXT_TO_SCENE2_INTRODUCTION'
	| 'NEXT_TO_SCENE3_INTRODUCTION'
	| 'NEXT_TO_START_STAGE2'
	| 'NEXT_TO_QUESTION1'
	| 'NEXT_TO_QUESTION2'
	| 'NEXT_TO_QUESTION3'
	| 'NEXT_TO_SCENE1_INTRODUCTION_PART_TWO'
	| 'NEXT_TO_SCENE2_INTRODUCTION_PART_TWO'
	| 'NEXT_TO_DIALOG_1'
	| 'NEXT_TO_DIALOG_2'
	| 'NEXT_TO_DIALOG_3'
	| 'NEXT_TO_DIALOG_4'
	| 'NEXT_TO_DIALOG_5'
	| 'NEXT_TO_DIALOG_6'
	| 'NEXT_TO_DIALOG_7'
	| 'NEXT_TO_DIALOG_8'
	| 'NEXT_TO_DIALOG_9'
	| 'NEXT_TO_DIALOG_10'
	| 'NEXT_TO_SCENE2_RAIN_RECYCLE'
	| 'NEXT_TO_SCENE2_SOLAR_POWER'
	| 'NEXT_TO_SCENE2_AQUAONICS'
	| 'NEXT_TO_SCENE1_DASHBOARD'
	| 'NEXT_TO_SCENE1_GREEN_BUILDING'
	| 'NEXT_TO_SCENE1_CARBON_FOOTPRINT'
	| 'GO_TO_SCENE1_START'
	| 'GO_TO_SCENE2_START'
	| 'RESTART_SCENE1'
	| 'RESTART_SCENE2';

type EventType = Record<'type', TEvent>;
export type PhaseValueType = {
	level: LevelEnum;
	round: number;
	question: 'rainRecycle' | 'aquaponics' | 'solarPower' | 'dashboard' | 'greenBuilding' | 'carbonFootprint'  | 'initial';
};
type ContextValue = {
	phase: PhaseValueType;
};
export const conversationMachine = setup({
	types: {
		context: {} as ContextValue,
		events: {} as EventType,
	},
	actions: {
		setCurrentPhase: ({ context }, { round, level, question }: PhaseValueType) => {
			context.phase = {
				level,
				round,
				question,
			};
		},
	},
	actors: {},
	delays: {},
}).createMachine({
	id: 'conversation',
	initial: 'root',
	context: {
		phase: {
			level: 0,
			round: 1,
			question: 'initial',
		},
	},
	states: {
		root: {
			initial: 'start',
			states: {
				start: {
					initial: 'stage1',
					states: {
						stage1: {
							entry: [
								{
									type: 'setCurrentPhase',
									params: { round: 1, level: LevelEnum.START, question: 'initial' },
								},
							],
							on: {
								NEXT_TO_START_STAGE2: 'stage2',
							},
						},
						stage2: {
							entry: [
								{
									type: 'setCurrentPhase',
									params: { round: 2, level: LevelEnum.START, question: 'initial' },
								},
							],
						},
					},
				},
				scene1: {
					initial: 'sceneIntroduction',
					states: {
						sceneIntroduction: {
							initial: 'introDialog1',
							states: {
								introDialog1: {
									entry: [
										{
											type: 'setCurrentPhase',
											params: { round: 0, level: 1, question: 'initial' },
										},
									],
									on: {
										NEXT_TO_SCENE1_INTRODUCTION_PART_TWO: 'introDialog2',
									},
								},
								introDialog2: {
									entry: [
										{
											type: 'setCurrentPhase',
											params: { round: 1, level: 1, question: 'initial' },
										},
									],
								},
							},
						},
						dashboard: {
							initial: 'dialog1',
							states: {
								dialog1: {
									entry: [
										{
											type: 'setCurrentPhase',
											params: { round: 1, level: 1, question: 'dashboard' },
										},
									],
									on: {
										NEXT_TO_DIALOG_2: 'dialog2',
									},
								},
								dialog2: {
									entry: [
										{
											type: 'setCurrentPhase',
											params: { round: 2, level: 1, question: 'dashboard' },
										},
									],
									on: {
										NEXT_TO_DIALOG_3: 'dialog3',
									},
								},
								dialog3: {
									entry: [
										{
											type: 'setCurrentPhase',
											params: { round: 3, level: 1, question: 'dashboard' },
										},
									],
									on: {
										NEXT_TO_DIALOG_4: 'dialog4',
									},
								},
								dialog4: {
									entry: [
										{
											type: 'setCurrentPhase',
											params: { round: 4, level: 1, question: 'dashboard' },
										},
									],
									on: {
										NEXT_TO_DIALOG_5: 'dialog5',
									},
								},
								dialog5: {
									entry: [
										{
											type: 'setCurrentPhase',
											params: { round: 5, level: 1, question: 'dashboard' },
										},
									],
									on: {
										NEXT_TO_DIALOG_6: 'dialog6',
									},
								},
								dialog6: {
									entry: [
										{
											type: 'setCurrentPhase',
											params: { round: 6, level: 1, question: 'dashboard' },
										},
									],
									on: {
										NEXT_TO_DIALOG_7: 'dialog7',
									},
								},
								dialog7: {
									entry: [
										{
											type: 'setCurrentPhase',
											params: { round: 7, level: 1, question: 'dashboard' },
										},
									],
									on: {
										NEXT_TO_DIALOG_8: 'dialog8',
									},
								},
								dialog8: {
									entry: [
										{
											type: 'setCurrentPhase',
											params: { round: 8, level: 1, question: 'dashboard' },
										},
									],
									on: {
										NEXT_TO_DIALOG_9: 'dialog9',
									},
								},
								dialog9: {
									entry: [
										{
											type: 'setCurrentPhase',
											params: { round: 9, level: 1, question: 'dashboard' },
										},
									],
									on: {},
								},
							},
						},
						greenBuilding: {
							initial: 'dialog1',
							states: {
								dialog1: {
									entry: [
										{
											type: 'setCurrentPhase',
											params: { round: 1, level: 1, question: 'greenBuilding' },
										},
									],
									on: {
										NEXT_TO_DIALOG_2: 'dialog2',
									},
								},
								dialog2: {
									entry: [
										{
											type: 'setCurrentPhase',
											params: { round: 2, level: 1, question: 'greenBuilding' },
										},
									],
									on: {
										NEXT_TO_DIALOG_3: 'dialog3',
									},
								},
								dialog3: {
									entry: [
										{
											type: 'setCurrentPhase',
											params: { round: 3, level: 1, question: 'greenBuilding' },
										},
									],
									on: {
										NEXT_TO_DIALOG_4: 'dialog4',
									},
								},
								dialog4: {
									entry: [
										{
											type: 'setCurrentPhase',
											params: { round: 4, level: 1, question: 'greenBuilding' },
										},
									],
									on: {
										NEXT_TO_DIALOG_5: 'dialog5',
									},
								},
								dialog5: {
									entry: [
										{
											type: 'setCurrentPhase',
											params: { round: 5, level: 1, question: 'greenBuilding' },
										},
									],
									on: {
										NEXT_TO_DIALOG_6: 'dialog6',
									},
								},
								dialog6: {
									entry: [
										{
											type: 'setCurrentPhase',
											params: { round: 6, level: 1, question: 'greenBuilding' },
										},
									],
									on: {
										NEXT_TO_DIALOG_7: 'dialog7',
									},
								},
								dialog7: {
									entry: [
										{
											type: 'setCurrentPhase',
											params: { round: 7, level: 1, question: 'greenBuilding' },
										},
									],
									on: {
										NEXT_TO_DIALOG_8: 'dialog8',
									},
								},
								dialog8: {
									entry: [
										{
											type: 'setCurrentPhase',
											params: { round: 8, level: 1, question: 'greenBuilding' },
										},
									],
									on: {
										NEXT_TO_DIALOG_9: 'dialog9',
									},
								},
								dialog9: {
									entry: [
										{
											type: 'setCurrentPhase',
											params: { round: 9, level: 1, question: 'greenBuilding' },
										},
									],
									on: {
										NEXT_TO_DIALOG_10: 'dialog10',
									},
								},
								dialog10: {
									entry: [
										{
											type: 'setCurrentPhase',
											params: { round: 10, level: 1, question: 'greenBuilding' },
										},
									],
									on: {},
								},
							},
						},
						carbonFootprint: {
							initial: 'dialog1',
							states: {
								dialog1: {
									entry: [
										{
											type: 'setCurrentPhase',
											params: { round: 1, level: 1, question: 'carbonFootprint' },
										},
									],
									on: {
										NEXT_TO_DIALOG_2: 'dialog2',
									},
								},
								dialog2: {
									entry: [
										{
											type: 'setCurrentPhase',
											params: { round: 2, level: 1, question: 'carbonFootprint' },
										},
									],
									on: {
										NEXT_TO_DIALOG_3: 'dialog3',
									},
								},
								dialog3: {
									entry: [
										{
											type: 'setCurrentPhase',
											params: { round: 3, level: 1, question: 'carbonFootprint' },
										},
									],
									on: {
										NEXT_TO_DIALOG_4: 'dialog4',
									},
								},
								dialog4: {
									entry: [
										{
											type: 'setCurrentPhase',
											params: { round: 4, level: 1, question: 'carbonFootprint' },
										},
									],
									on: {
										NEXT_TO_DIALOG_5: 'dialog5',
									},
								},
								dialog5: {
									entry: [
										{
											type: 'setCurrentPhase',
											params: { round: 5, level: 1, question: 'carbonFootprint' },
										},
									],
									on: {
										NEXT_TO_DIALOG_6: 'dialog6',
									},
								},
								dialog6: {
									entry: [
										{
											type: 'setCurrentPhase',
											params: { round: 6, level: 1, question: 'carbonFootprint' },
										},
									],
									on: {
										NEXT_TO_DIALOG_7: 'dialog7',
									},
								},
								dialog7: {
									entry: [
										{
											type: 'setCurrentPhase',
											params: { round: 7, level: 1, question: 'carbonFootprint' },
										},
									],
									on: {
										NEXT_TO_DIALOG_8: 'dialog8',
									},
								},
								dialog8: {
									entry: [
										{
											type: 'setCurrentPhase',
											params: { round: 8, level: 1, question: 'carbonFootprint' },
										},
									],
									on: {
										NEXT_TO_DIALOG_9: 'dialog9',
									},
								},
								dialog9: {
									entry: [
										{
											type: 'setCurrentPhase',
											params: { round: 9, level: 1, question: 'carbonFootprint' },
										},
									],
									on: {
										NEXT_TO_DIALOG_10: 'dialog10',
									},
								},
								dialog10: {
									entry: [
										{
											type: 'setCurrentPhase',
											params: { round: 10, level: 1, question: 'carbonFootprint' },
										},
									],
									on: {},
								},
							},
						},
					},
				},
				scene2: {
					initial: 'sceneIntroduction',
					states: {
						sceneIntroduction: {
							initial: 'introDialog1',
							states: {
								introDialog1: {
									entry: [
										{
											type: 'setCurrentPhase',
											params: { round: 0, level: 2, question: 'initial' },
										},
									],
									on: {
										NEXT_TO_SCENE2_INTRODUCTION_PART_TWO: 'introDialog2',
									},
								},
								introDialog2: {
									entry: [
										{
											type: 'setCurrentPhase',
											params: { round: 1, level: 2, question: 'initial' },
										},
									],
									on: {},
								},
							},
						},
						rainRecycle: {
							initial: 'dialog1',
							states: {
								dialog1: {
									entry: [
										{
											type: 'setCurrentPhase',
											params: { round: 1, level: 2, question: 'rainRecycle' },
										},
									],
									on: {
										NEXT_TO_DIALOG_2: 'dialog2',
									},
								},
								dialog2: {
									entry: [
										{
											type: 'setCurrentPhase',
											params: { round: 2, level: 2, question: 'rainRecycle' },
										},
									],
									on: {
										NEXT_TO_DIALOG_3: 'dialog3',
									},
								},
								dialog3: {
									entry: [
										{
											type: 'setCurrentPhase',
											params: { round: 3, level: 2, question: 'rainRecycle' },
										},
									],
									on: {
										NEXT_TO_DIALOG_4: 'dialog4',
									},
								},
								dialog4: {
									entry: [
										{
											type: 'setCurrentPhase',
											params: { round: 4, level: 2, question: 'rainRecycle' },
										},
									],
									on: {
										NEXT_TO_DIALOG_5: 'dialog5',
									},
								},
								dialog5: {
									entry: [
										{
											type: 'setCurrentPhase',
											params: { round: 5, level: 2, question: 'rainRecycle' },
										},
									],
									on: {
										NEXT_TO_DIALOG_6: 'dialog6',
									},
								},
								dialog6: {
									entry: [
										{
											type: 'setCurrentPhase',
											params: { round: 6, level: 2, question: 'rainRecycle' },
										},
									],
									on: {
										NEXT_TO_DIALOG_7: 'dialog7',
									},
								},
								dialog7: {
									entry: [
										{
											type: 'setCurrentPhase',
											params: { round: 7, level: 2, question: 'rainRecycle' },
										},
									],
									on: {
										NEXT_TO_DIALOG_8: 'dialog8',
									},
								},
								dialog8: {
									entry: [
										{
											type: 'setCurrentPhase',
											params: { round: 8, level: 2, question: 'rainRecycle' },
										},
									],
									on: {},
								},
							},
						},
						solarPower: {
							initial: 'dialog1',
							states: {
								dialog1: {
									entry: [
										{
											type: 'setCurrentPhase',
											params: { round: 1, level: 2, question: 'solarPower' },
										},
									],
									on: {
										NEXT_TO_DIALOG_2: 'dialog2',
									},
								},
								dialog2: {
									entry: [
										{
											type: 'setCurrentPhase',
											params: { round: 2, level: 2, question: 'solarPower' },
										},
									],
									on: {
										NEXT_TO_DIALOG_3: 'dialog3',
									},
								},
								dialog3: {
									entry: [
										{
											type: 'setCurrentPhase',
											params: { round: 3, level: 2, question: 'solarPower' },
										},
									],
									on: {
										NEXT_TO_DIALOG_4: 'dialog4',
									},
								},
								dialog4: {
									entry: [
										{
											type: 'setCurrentPhase',
											params: { round: 4, level: 2, question: 'solarPower' },
										},
									],
									on: {
										NEXT_TO_DIALOG_5: 'dialog5',
									},
								},
								dialog5: {
									entry: [
										{
											type: 'setCurrentPhase',
											params: { round: 5, level: 2, question: 'solarPower' },
										},
									],
									on: {
										NEXT_TO_DIALOG_6: 'dialog6',
									},
								},
								dialog6: {
									entry: [
										{
											type: 'setCurrentPhase',
											params: { round: 6, level: 2, question: 'solarPower' },
										},
									],
									on: {
										NEXT_TO_DIALOG_7: 'dialog7',
									},
								},
								dialog7: {
									entry: [
										{
											type: 'setCurrentPhase',
											params: { round: 7, level: 2, question: 'solarPower' },
										},
									],
									on: {
										NEXT_TO_DIALOG_8: 'dialog8',
									},
								},
								dialog8: {
									entry: [
										{
											type: 'setCurrentPhase',
											params: { round: 8, level: 2, question: 'solarPower' },
										},
									],
									on: {},
								},
								dialog9: {
									entry: [
										{
											type: 'setCurrentPhase',
											params: { round: 9, level: 2, question: 'solarPower' },
										},
									],
									on: {},
								},
							},
						},
						aquaonics: {
							initial: 'dialog1',
							states: {
								dialog1: {
									entry: [
										{
											type: 'setCurrentPhase',
											params: { round: 1, level: 2, question: 'aquaponics' },
										},
									],
									on: {
										NEXT_TO_DIALOG_2: 'dialog2',
									},
								},
								dialog2: {
									entry: [
										{
											type: 'setCurrentPhase',
											params: { round: 2, level: 2, question: 'aquaponics' },
										},
									],
									on: {
										NEXT_TO_DIALOG_3: 'dialog3',
									},
								},
								dialog3: {
									entry: [
										{
											type: 'setCurrentPhase',
											params: { round: 3, level: 2, question: 'aquaponics' },
										},
									],
									on: {
										NEXT_TO_DIALOG_4: 'dialog4',
									},
								},
								dialog4: {
									entry: [
										{
											type: 'setCurrentPhase',
											params: { round: 4, level: 2, question: 'aquaponics' },
										},
									],
									on: {
										NEXT_TO_DIALOG_5: 'dialog5',
									},
								},
								dialog5: {
									entry: [
										{
											type: 'setCurrentPhase',
											params: { round: 5, level: 2, question: 'aquaponics' },
										},
									],
									on: {
										NEXT_TO_DIALOG_6: 'dialog6',
									},
								},
								dialog6: {
									entry: [
										{
											type: 'setCurrentPhase',
											params: { round: 6, level: 2, question: 'aquaponics' },
										},
									],
									on: {
										NEXT_TO_DIALOG_7: 'dialog7',
									},
								},
								dialog7: {
									entry: [
										{
											type: 'setCurrentPhase',
											params: { round: 7, level: 2, question: 'aquaponics' },
										},
									],
									on: {
										NEXT_TO_DIALOG_8: 'dialog8',
									},
								},
								dialog8: {
									entry: [
										{
											type: 'setCurrentPhase',
											params: { round: 8, level: 2, question: 'aquaponics' },
										},
									],
									on: {
										NEXT_TO_DIALOG_9: 'dialog9',
									},
								},
								dialog9: {
									entry: [
										{
											type: 'setCurrentPhase',
											params: { round: 9, level: 2, question: 'aquaponics' },
										},
									],
									on: {
										NEXT_TO_DIALOG_10: 'dialog10',
									},
								},
								dialog10: {
									entry: [
										{
											type: 'setCurrentPhase',
											params: { round: 10, level: 2, question: 'aquaponics' },
										},
									],
									on: {},
								},
							},
						},
					},
				},
			},
			on: {
				NEXT_TO_SCENE1_INTRODUCTION: '.scene1',
				NEXT_TO_SCENE2_INTRODUCTION: '.scene2',
				NEXT_TO_SCENE1_DASHBOARD: '.scene1.dashboard',
				NEXT_TO_SCENE1_GREEN_BUILDING: '.scene1.greenBuilding',
				NEXT_TO_SCENE1_CARBON_FOOTPRINT: '.scene1.carbonFootprint',
				NEXT_TO_SCENE2_RAIN_RECYCLE: '.scene2.rainRecycle',
				NEXT_TO_SCENE2_SOLAR_POWER: '.scene2.solarPower',
				NEXT_TO_SCENE2_AQUAONICS: '.scene2.aquaonics',
				GO_TO_SCENE1_START: '.scene1.sceneIntroduction',
				GO_TO_SCENE2_START: '.scene2.sceneIntroduction',
				RESTART_SCENE1: '.scene1.sceneIntroduction.introDialog2',
				RESTART_SCENE2: '.scene2.sceneIntroduction.introDialog2',
			},
		},
	},
});