import i18next from 'i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {initReactI18next} from 'react-i18next';
import * as RNLocalize from 'react-native-localize';
import en from './language/en.json';
import fa from './language/fa.json';

const LOCALE_PERSISTENCE_KEY = 'language';

const resources = {
  en: {
    translation: en,
  },
  fa: {
    translation: fa,
  },
};

const LANG_CODES = Object.keys(resources);
const languageDetector = {
  type: 'languageDetector',

  async: true,

  // detect: async (language: any) => {
  //   const persistedLocale = await AsyncStorage.getItem(LOCALE_PERSISTENCE_KEY);

  //   if (!persistedLocale) {
  //     // Find best available language from the resource ones

  //     // Return detected locale or default language

  //     return language('en');
  //   }

  //   language(persistedLocale);
  // },

  detect: callback => {
    AsyncStorage.getItem('user-language', (err, language) => {
      // if error fetching stored data or no language was stored
      // display errors when in DEV mode as console statements
      if (err || !language) {
        if (err) {
          console.log('Error fetching Languages from asyncstorage ', err);
        } else {
          console.log('No language is set, choosing English as fallback');
        }
        const findBestAvailableLanguage =
          RNLocalize.findBestLanguageTag(LANG_CODES);

        callback(findBestAvailableLanguage.languageTag || 'en');
        return;
      }
      callback(language);
    });
  },

  init: () => {},
  cacheUserLanguage: (language: any) => {
    AsyncStorage.setItem('user-language', language);
  },
  // cacheUserLanguage: (locale: any) => {
  //   AsyncStorage.setItem(LOCALE_PERSISTENCE_KEY, locale);
  // },
};

i18next
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    resources,
    react: {
      useSuspense: false,
    },
    // lng: 'en',
    // fallbackLng: 'fa',
    compatibilityJSON: 'v3',
    interpolation: {
      escapeValue: false,
    },
  });
export default i18next;
