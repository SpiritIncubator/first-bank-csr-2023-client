import isServer from "./isServer";

export type localStorageKey = 'lang'

export const getStorage = <T, U extends localStorageKey = 'lang'>(key: U) => {
  try {
    if (!isServer()) {
      const value = localStorage.getItem(key);
      return value ? (JSON.parse(value) as T) : null;
    }
  } catch (error) {
    throw new Error('localStorage is not available on server side');
  }
}

export const setStorage = <T>(key: localStorageKey, value: T) => {
  try {
    if (!isServer()) {
      const valueString = JSON.stringify(value);
  
      localStorage.setItem(key, valueString);
    }
  } catch (error) {
    throw new Error('localStorage is not available on server side');
  }
}