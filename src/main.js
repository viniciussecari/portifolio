import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';
import App from './App.vue';
import './style.css';
import { pt_BR } from './locales/pt_BR.js';
import { en } from './locales/en.js';

const languages = { pt_BR, en };

const i18n = createI18n({
  locale: 'pt_BR',
  fallbackLocale: 'pt_BR',
  messages: languages,
});

createApp(App).use(i18n).mount('#app');
