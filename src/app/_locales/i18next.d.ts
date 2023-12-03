import { defaultNS, LANGUAGE_TYPE, resources } from './i18n';
import type { ReportNamespaces } from 'react-i18next';

declare module 'i18next' {
	interface i18n {
		reportNamespaces: ReportNamespaces;
	}
}

declare module 'react-i18next' {
	interface CustomTypeOptions {
		defaultNS: typeof defaultNS;
		resources: (typeof resources)[LANGUAGE_TYPE.EN];
	}
}
