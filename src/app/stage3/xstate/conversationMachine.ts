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
	| 'NEXT_TO_QUESTION2'
	| 'NEXT_TO_QUESTION3'
	| 'NEXT_TO_SCENE1_INTRODUCTION_PART_TWO';
type EventType = Record<'type', TEvent>;
type PhaseValueType = { level: LevelEnum; round: number };
type ContextValue = {
	phase: PhaseValueType;
}
export const conversationMachine = setup({
	types: {
		context: {} as ContextValue,
		events: {} as EventType,
	},
	actions: {
		setCurrentPhase: ({ context }, { round, level }: PhaseValueType) => {
			context.phase = {
				level,
				round,
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
							entry: [{ type: 'setCurrentPhase', params: { round: 1, level: LevelEnum.START } }],
							on: {
								NEXT_TO_START_STAGE2: 'stage2',
							},
						},
						stage2: {
							entry: [{ type: 'setCurrentPhase', params: { round: 2, level: LevelEnum.START } }],
						},
					},
				},
				scene1: {
					initial: 'introduction',
					states: {
						introduction: {
							initial: 'stage1',
							states: {
								stage1: {
									entry: [{ type: 'setCurrentPhase', params: { round: 0, level: 1 } }],
									on: {
										NEXT_TO_SCENE1_INTRODUCTION_PART_TWO: 'stage2',
									},
								},
								stage2: {
									entry: [{ type: 'setCurrentPhase', params: { round: 1, level: 1 } }],
								},
							},
						},
						question1: {
							entry: [{ type: 'setCurrentPhase', params: { round: 2, level: 1 } }],
							on: {
								NEXT_TO_QUESTION2: 'question2',
							},
						},
						question2: {
							entry: [{ type: 'setCurrentPhase', params: { round: 3, level: 1 } }],
							on: {
								NEXT_TO_QUESTION3: 'question3',
							},
						},
						question3: {},
					},
				},
				scene2: {
					initial: 'question1',
					states: {
						question1: {
							on: {
								NEXT_TO_QUESTION2: 'question2',
							},
						},
						question2: {
							on: {
								NEXT_TO_QUESTION3: 'question3',
							},
						},
						question3: {},
					},
				},
				scene3: {
					initial: 'question1',
					states: {
						question1: {
							on: {
								NEXT_TO_QUESTION2: 'question2',
							},
						},
						question2: {
							on: {
								NEXT_TO_QUESTION3: 'question3',
							},
						},
						question3: {},
					},
				},
			},
			on: {
				NEXT_TO_SCENE1_INTRODUCTION: '.scene1',
				NEXT_TO_SCENE2_INTRODUCTION: '.scene2',
				NEXT_TO_SCENE3_INTRODUCTION: '.scene3',
			},
		},
	},
});