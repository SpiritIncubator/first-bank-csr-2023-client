import { useCallback, useEffect, useState } from 'react';

import isServer from '@/utils/isServer';
import usePrevious from '@/app/hooks/usePrevious';
import { LANGUAGE_TYPE } from '@/types';
import { getStorage, setStorage } from '@/utils/localStorage';
import { i18nInstance } from '../i18n';

function getBrowserLanguage() {
	const browserLanguage = navigator.language.split('-')[0] as LANGUAGE_TYPE;
	return browserLanguage;
}

function getLanguage(): LANGUAGE_TYPE {
	const lang = getStorage<LANGUAGE_TYPE>('lang');

	if (lang) {
		return lang;
	}

	return getBrowserLanguage();
}

const useFirstBankTranslation = () => {
	const [currentLang, setCurrentLang] = useState<LANGUAGE_TYPE>(() => {
		if (isServer()) {
			return LANGUAGE_TYPE.ZH;
		}

		return getLanguage();
	});
	const prevLang = usePrevious(currentLang);

	const setLang = useCallback((language: LANGUAGE_TYPE) => {
		setStorage('lang', language);

		setCurrentLang(language);
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
