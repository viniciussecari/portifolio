<template>
  <section
    id="experiences"
    class="flex items-center flex-col scroll-smooth text-left">
    <h1 class="mb-4 text-5xl font-bold text-cyan-500">
      {{ $t('sections.experiences.title') }}
    </h1>

    <div
      class="w-full flex justify-center items-center flex-col"
      v-for="item in EXPERIENCES"
      :key="`${item.title}-${item.initialDatetime}`"
    >
      <experience-item :item="item" />
    </div>
  </section>
</template>

<script setup>
import { EXPERIENCES } from '../utils/constants/EXPERIENCES.js';
import { defineAsyncComponent } from 'vue';

const experienceItem = defineAsyncComponent(() =>
  import('./ExperienceItem.vue'),
);
</script>
