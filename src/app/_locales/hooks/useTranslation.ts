import { useTranslation as i18nTranslation } from 'react-i18next';

import type { NamespaceFields } from '../i18n';

export const useTranslation = (ns?: keyof NamespaceFields | [keyof NamespaceFields]) =>
	i18nTranslation(ns);
