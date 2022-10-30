import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import ruResources from 'locales/ru'

i18n
    .use(initReactI18next)
    .init({
        lng: 'ru',
        debug: false,
        interpolation: {
            escapeValue: false
        },
        resources: {
            ru: ruResources
        },
    })

export default i18n;
