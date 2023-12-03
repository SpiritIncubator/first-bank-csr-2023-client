import { useCallback, useEffect, useState } from 'react';

import usePrevious from '@/app/hooks/usePrevious';

import { DEFAULT_LANG, i18nInstance, LANGUAGE_TYPE } from '../i18n';

const useFirstBankTranslation = () => {
	const [currentLang, setCurrentLang] = useState(DEFAULT_LANG);
	const prevLang = usePrevious(currentLang);

	const setLang = useCallback((lang: LANGUAGE_TYPE) => {
		setCurrentLang(lang);
	}, []);

	useEffect(() => {
		if (prevLang !== currentLang) {
			// eslint-disable-next-line no-void
			void i18nInstance.changeLanguage(currentLang);
		}
	}, [currentLang, prevLang]);

	return {
		setLang,
		lang: currentLang,
	};
};

export default useFirstBankTranslation;
