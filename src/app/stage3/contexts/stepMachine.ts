import { setup } from 'xstate';

const stepMachine = setup({
  actions: {},
  delays: {},
}).createMachine({
  id: 'steps',
  initial: 'step1',
  context: {},
  states: {
    
  }
});

export default stepMachine;