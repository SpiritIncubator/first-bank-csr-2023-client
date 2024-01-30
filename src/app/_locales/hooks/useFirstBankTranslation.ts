
import { useCallback, useEffect, useState } from 'react';

import useStore from '@/app/atoms/useStore';
import isServer from '@/utils/isServer';
import usePrevious from '@/app/hooks/usePrevious';
import { LANGUAGE_TYPE } from '@/types';
import { setStorage, getStorage } from '@/utils/localStorage';
import { i18nInstance } from '../i18n';
import { getLanguage } from './index';


const useFirstBankTranslation = () => {
  const [currentLang, setCurrentLang] = useState<LANGUAGE_TYPE>(() => {
    if (isServer()) {
      return LANGUAGE_TYPE.ZH;
    }

    return getLanguage();
  });
  const {setLanguage, language} = useStore();
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
		setLanguage(currentLang);
		setCurrentLang(getLanguage());
  }, [currentLang, prevLang, setLanguage]);
  
  useEffect(() => {
		const lang = getStorage<LANGUAGE_TYPE>('lang');
		if (lang) {
			setLanguage(lang);
		}
	}, [setLanguage]);

  return {
		setLang,
		lang: currentLang,
	};
};

export default useFirstBankTranslation;
