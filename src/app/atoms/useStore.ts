import { create } from 'zustand';

interface IState {
  questionAnswer: any[];
  setQuestionAnswer: (questionAnswer: any) => void;
}

const useStore = create<IState>()(set => ({
	questionAnswer: [],
	setQuestionAnswer: (questionAnswer: any) => set({ questionAnswer }),
}));

export default useStore;