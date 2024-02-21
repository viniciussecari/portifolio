<template>
  <div
    class="header h-auto w-full flex justify-center items-center flex-col lg:mt-8">
    <div class="w-full flex lg:mb-0 mb-8 items-center">
      <switch-language />
    </div>

    <h1 class="font-bold text-xl">Vinicius Santana Secari</h1>

    <profile-contacts />

    <profile-links />
  </div>
</template>

<script setup>
import ProfileLinks from './ProfileLinks.vue';
import ProfileContacts from './ProfileContacts.vue';
import SwitchLanguage from './SwitchLanguage.vue';
</script>
