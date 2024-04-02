<template>
  <div
    class="header h-auto w-full flex justify-center items-center flex-col">
    <h1 class="font-bold text-xl">Vinicius Santana Secari</h1>

    <profile-contacts />

    <profile-links />
  </div>
</template>

<script setup>
import ProfileLinks from './ProfileLinks.vue';
import ProfileContacts from './ProfileContacts.vue';
</script>
