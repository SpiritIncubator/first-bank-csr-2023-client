import { create, StateCreator } from 'zustand';
import {devtools, persist, createJSONStorage} from 'zustand/middleware';
import { LANGUAGE_TYPE } from '@/types';

interface QuestionSlice {
	questionAnswer: any[];
	setQuestionAnswer: (questionAnswer: any) => void;
}

type SharedSlice = QuestionSlice;

const createQuestionSlice: StateCreator<QuestionSlice, [], [], QuestionSlice> = (set) => ({
	questionAnswer: [],
	setQuestionAnswer: (questionAnswer: any) => set({ questionAnswer }),
});

const useStore = create<SharedSlice>()(
	devtools(
		persist(
			(...context) => ({
				...createQuestionSlice(...context),
			}),
			{ name: 'global', storage: createJSONStorage(() => localStorage) },
		),
	),
);

export default useStore;