export const STORAGE_KEY = "app_locale";

export const getSavedLocale = (defaultLang: string = "en"): string => {
  if (typeof window === "undefined") return defaultLang;
  return localStorage.getItem(STORAGE_KEY) || defaultLang;
};

export const saveLocalelocalStorage = (locale: string) => {
  localStorage.setItem(STORAGE_KEY, locale);
};
