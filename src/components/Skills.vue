<template>
  <section class="flex items-center flex-col">
    <h1 class="mb-4 text-5xl font-bold text-cyan-500" id="skills">
      {{ $t('sections.skills.title') }}
    </h1>

    <div class="flex justify-evenly flex-wrap">
      <skill v-for="skill in SKILLS" :key="skill.title" :item="skill" />
    </div>
  </section>
</template>

<script setup>
import Skill from './Skill.vue';
import SKILLS from '../utils/constants/SKILLS';
</script>

<style scoped>
</style>
