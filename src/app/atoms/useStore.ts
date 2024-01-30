import { create, StateCreator } from 'zustand';
import {devtools, persist, createJSONStorage} from 'zustand/middleware';
import { LANGUAGE_TYPE } from '@/types';

interface QuestionSlice {
	questionAnswer: any[];
	setQuestionAnswer: (questionAnswer: any) => void;
}

interface LanguageSlice {
	language: LANGUAGE_TYPE;
	setLanguage: (language: LANGUAGE_TYPE) => void;
}

type SharedSlice = QuestionSlice & LanguageSlice;

const createQuestionSlice: StateCreator<QuestionSlice, [], [], QuestionSlice> = (set) => ({
	questionAnswer: [],
	setQuestionAnswer: (questionAnswer: any) => set({ questionAnswer }),
});

const createLanguageSlice: StateCreator<SharedSlice, [], [], LanguageSlice> = set => ({
	language: LANGUAGE_TYPE.ZH,
	setLanguage: (language: LANGUAGE_TYPE) => set({ language }),
});

const useStore = create<SharedSlice>()(
	devtools(
		persist(
			(...context) => ({
				...createQuestionSlice(...context),
				...createLanguageSlice(...context),
			}),
			{ name: 'global', storage: createJSONStorage(() => localStorage) },
		),
	),
);

export default useStore;