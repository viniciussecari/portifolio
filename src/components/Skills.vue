<template>
  <section class="flex items-center flex-col overflow-hidden scroll-smooth">
    <h1 class="mb-4 text-5xl font-light" id="skills">
      {{ $t('sections.skills.title') }}
    </h1>

    <div class="carrousel">
      <skill v-for="skill in SKILLS" :key="skill.title" :item="skill" />
    </div>
  </section>
</template>

<script setup>
import Skill from './Skill.vue';
import SKILLS from '../utils/constants/SKILLS';
</script>

<style scoped>
.carrousel {
  display: flex;
  overflow-x: auto;
  width: 100%;
}

.carrousel::-webkit-scrollbar {
  height: 0.5rem;
}

.carrousel::-webkit-scrollbar-track {
  background: transparent;
  padding: 2px;
}

.carrousel::-webkit-scrollbar-thumb {
  background-color: rgb(14 116 144);

  border-radius: 4px;
}
</style>
