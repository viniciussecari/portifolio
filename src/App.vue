<template>
  <main>
    <Header />

    <profile-header />

    <divider />

    <profile-content />

    <created-by />
  </main>
</template>

<script setup>
import { defineAsyncComponent } from 'vue';

import Header from './components/Header.vue';
import ProfileHeader from './components/ProfileHeader.vue';


const createdBy = defineAsyncComponent(() => import('./components/CreatedBy.vue'));
const divider = defineAsyncComponent(() => import('./components/Divider.vue'));
const profileContent = defineAsyncComponent(() => import('./components/ProfileContent.vue'));
</script>
