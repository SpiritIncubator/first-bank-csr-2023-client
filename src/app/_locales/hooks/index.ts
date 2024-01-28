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

export function getLanguage(): LANGUAGE_TYPE {
	const lang = getStorage<LANGUAGE_TYPE>('lang');

	if (lang) {
		return lang;
	}

	return getBrowserLanguage();
}

