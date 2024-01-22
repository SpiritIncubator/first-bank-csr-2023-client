import { useCallback, useEffect, useState } from 'react';

import usePrevious from '@/app/hooks/usePrevious';
import { LANGUAGE_TYPE } from '@/types';
import { DEFAULT_LANG, i18nInstance } from '../i18n';

const useFirstBankTranslation = () => {
	const [currentLang, setCurrentLang] = useState(DEFAULT_LANG);
	const prevLang = usePrevious(currentLang);

	const setLang = useCallback((lang: LANGUAGE_TYPE) => {
		localStorage.setItem('lang', lang);
		setCurrentLang(lang);
	}, []);

	useEffect(() => {
		if (prevLang !== currentLang) {
			// eslint-disable-next-line no-void
			void i18nInstance.changeLanguage(currentLang);
		}
	}, [currentLang, prevLang]);

	useEffect(() => {
		const lang = localStorage.getItem('lang');
		if (lang) {
			setLang(lang as LANGUAGE_TYPE);
		}
	}, [setLang]);

	return {
		setLang,
		lang: currentLang,
	};
};

export default useFirstBankTranslation;
