<template>
  <header
    :class="`w-full h-16 fixed top-0 left-0 z-50 
          ${toggleMenu ? 'bg-black' : 'backdrop-blur-sm'} flex 
          items-center sm:justify-between md:justify-center px-8`"
  >
    <nav class="visible max-sm:hidden">
      <ul class="flex">
        <li v-for="nav in navs" :key="nav.ref">
          <a 
            class="mx-2 header-button-vertical" 
            :href="nav.ref"
            :data-text="`&nbsp;${nav.title}&nbsp;`" 
          >
            &nbsp;{{ nav.title }}&nbsp;
          </a>
        </li>
      </ul>
    </nav>

    <div class="md:hidden visible entrance_by_left">
      <button
        @click="toggleMenu = !toggleMenu"
        id="menu-toggle" 
        class="text-white focus:outline-none"
      >
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round" 
            stroke-width="2"
            d="M4 6h16M4 12h16m-7 6h7"
          >
          </path>
        </svg>
      </button>
    </div>

    <div
      v-if="toggleMenu"
      class="visible md:hidden absolute top-16 left-0 h-screen w-screen z-50 
            flex justify-center items-center bg-black"
    >
      <ul 
        class="entrance_by_left w-full h-full p-2 relative flex flex-col gap-8"
      >
        <li 
          class="my-2 relative list-none"  
          v-for="nav in navs"
          :key="nav.ref"
        >
          <a
            @click="setAnchor"
            class="mx-2 header-button-horizontal" 
            :href="nav.ref"
            :data-text="`&nbsp;${nav.title}&nbsp;`" 
          >
            &nbsp;{{ nav.title }}&nbsp;
          </a>
        </li>
      </ul>
    </div>

    <switch-language />
  </header>
</template>

<script setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import SwitchLanguage from './SwitchLanguage.vue';

const toggleMenu = ref(false);
const { t } = useI18n();

const navs = ref([
  {
    ref: '#skills',
    title: t('sections.skills.title')
  },
  {
    ref: '#experiences',
    title: t('sections.experiences.title')
  },
  {
    ref: '#education',
    title: t('sections.education.college')
  }
]);

const setAnchor = () => {
  setTimeout(() => {
    toggleMenu.value = false;
  }, 1500);
};
</script>