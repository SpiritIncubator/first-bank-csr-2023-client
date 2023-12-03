import { initReactI18next } from 'react-i18next';
import type { InitOptions } from 'i18next';
import i18n from 'i18next';
import resourcesToBackend from 'i18next-resources-to-backend';

import common from './en/common.json';

export enum LANGUAGE_TYPE {
	EN = 'en',
	ZH = 'zh',
}

export const i18nInstance = i18n.createInstance();

export type NamespaceFields = {
	common: typeof common;
};

export const DEFAULT_LANG = LANGUAGE_TYPE.ZH;

const initialI18nOptions: InitOptions = {
	lng: DEFAULT_LANG,
	fallbackLng: LANGUAGE_TYPE.EN,
	returnNull: false,
	ns: ['common'],
	interpolation: {
		escapeValue: false,
		prefix: '{',
		suffix: '}',
	},
};

export const registerNamespace = new Set([]);

// eslint-disable-next-line no-void
void i18nInstance
	.use(resourcesToBackend((lang: string, ns: string) => import(`./${lang}/${ns}.json`)))
	.use(initReactI18next)
	.init(initialI18nOptions);
