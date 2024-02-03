import { setup } from 'xstate';

export const conversationMachine = setup({
  types: {
    context: {},
    events: {} as { type: 'START_TO_STEP2'} | { type: 'START_TO_QUESTION_SCREEN'} 
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
        START_TO_STEP2: 'step2'
      }
    },
    step2: {
      on: {
        START_TO_QUESTION_SCREEN: 'questionScreen'
      }
    },
    questionScreen: {}
  }
  // states: {
  //   step1: {},
  //   step2: {}
  // }
})