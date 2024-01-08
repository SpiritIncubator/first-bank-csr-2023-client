import { create } from 'zustand';
import { LANGUAGE_TYPE } from '@/app/_locales/i18n';

interface IState {
  language: LANGUAGE_TYPE;
	questionAnswer: any[];
	setQuestionAnswer: (questionAnswer: any) => void;
	setLang: (lang: LANGUAGE_TYPE) => void;
}

const useStore = create<IState>()(set => ({
  questionAnswer: [],
  language: LANGUAGE_TYPE.EN,
	setQuestionAnswer: (questionAnswer: any) => set({ questionAnswer }),
	setLang: (lang: LANGUAGE_TYPE) => set({ language: lang }),
}));

export default useStore;