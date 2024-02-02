import { createMachine } from 'xstate';

export const conversationMachine = createMachine({
  id: 'conversation',
  initial: 'idle',
  states: {
    idle: {
      on: {
        START: 'active',
      },
    },
    active: {
      on: {
        END: 'idle',
      },
    },
  },
});