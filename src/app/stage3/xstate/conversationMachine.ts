import { setup } from 'xstate';

type TEvent = 'START_TO_STEP2' | 'START_TO_QUESTION_SCREE';
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
	initial: 'step1',
	states: {
		step1: {
			on: {
				START_TO_STEP2: 'step2',
			},
		},
		step2: {
			on: {
				START_TO_QUESTION_SCREE: 'questionScreen',
			},
		},
		questionScreen: {},
	},
});