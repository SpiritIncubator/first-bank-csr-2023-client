import { setup } from 'xstate';

type TEvent =
	| 'NEXT_TO_START_STAGE2'
	| 'NEXT_TO_QUESTION2'
	| 'NEXT_TO_QUESTION3'
	| 'NEXT_TO_SCENE1_INTRODUCTION'
	| 'NEXT_TO_SCENE1_INTRODUCTION_PART_TWO';
type EventType = Record<'type', TEvent>;
export const conversationMachine = setup({
	types: {
		context: {},
		events: {} as EventType,
	},
	actions: {},
	actors: {},
	delays: {},
}).createMachine({
	id: 'conversation',
	initial: 'root',
	states: {
		root: {
			initial: 'start',
			states: {
				start: {
					initial: 'stage1',
					states: {
						stage1: {},
						stage2: {}
					},
				},
				scene1: {
					initial: 'introduction',
					states: {
						introduction: {
							initial: 'stage1',
							states: {
								stage1: {},
								stage2: {},
							}
						},
						question1: {},
						question2: {},
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
				NEXT_TO_START_STAGE2: '.start.stage2',
				NEXT_TO_SCENE1_INTRODUCTION: '.scene1',
				NEXT_TO_SCENE1_INTRODUCTION_PART_TWO: '.scene1.introduction.stage2'
			}
		}
	},
});