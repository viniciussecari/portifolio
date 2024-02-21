import './style.css';
import App from './App.vue';
import { createApp } from 'vue';
import { en } from './locales/en.js';
import { createI18n } from 'vue-i18n';
import { pt_BR } from './locales/pt_BR.js';

let language = window.navigator.language;
language =
  language === 'pt-PT' || language === 'pt' || language === 'pt-BR'
    ? 'pt_BR'
    : 'en';

if (language === 'pt-PT' || !localStorage.getItem('language')) {
  localStorage.setItem('language', language);
}

const lang = localStorage.getItem('language');

const i18n = createI18n({
  locale: lang,
  fallbackLocale: lang,
  messages: { pt_BR, en },
});

createApp(App).use(i18n).mount('#app');
