<template>
  <experiences />
  <divider />
  <education />
  <divider />
  <skills />
</template>

<script setup>
import Divider from './Divider.vue';
import { defineAsyncComponent } from 'vue';

const skills = defineAsyncComponent(() => import('./Skills.vue'));
const experiences = defineAsyncComponent(() => import('./Experiences.vue'));
const education = defineAsyncComponent(() => import('./Education.vue'));
</script>
