import { Tolgee, BackendFetch, DevTools } from '@tolgee/react';
import { FormatSimple } from '@tolgee/web';

const userLang = navigator.language.split('-')[0];

const TolgeeComponent = Tolgee()
  .use(DevTools())
  .use(FormatSimple())
  .use(BackendFetch())
  .init({
    availableLanguages: ['en', 'eu', 'pt', 'de'],
    apiUrl: import.meta.env.REACT_APP_TOLGEE_API_URL,
    apiKey: import.meta.env.REACT_APP_TOLGEE_API_KEY,
    fallbackLanguage: 'en',
    defaultLanguage: userLang,
  });

export default TolgeeComponent;
