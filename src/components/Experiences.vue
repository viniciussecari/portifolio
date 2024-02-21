<template>
  <section class="flex items-center flex-col">
    <h1 class="mb-4 text-5xl font-light">
      {{ $t('sections.experiences.title') }}
    </h1>

    <div
      class="w-full flex justify-center items-center flex-col"
      v-for="item in EXPERIENCES"
      :key="`${item.title}-${item.initialDatetime}`">
      <experience-item :item="item" />
    </div>
  </section>
</template>

<script setup>
import ExperienceItem from './ExperienceItem.vue';
import { EXPERIENCES } from '../utils/constants/EXPERIENCES.js';
</script>
