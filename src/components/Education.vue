<template>
  <section class="flex items-center flex-col">
    <h1 class="mb-4 text-5xl font-light">
      {{ $t('sections.education.college') }}
    </h1>

    <div class="my-2">
      <h2 class="mb-2 font-light text-2xl">
        Universidade Presbeteriana Mackenzie
      </h2>
      <h3>Análise e desenvolvimento de Sistemas</h3>

      <span class="font-serif"> ago de 2021 - dez de 2023 </span>
    </div>

    <div class="my-2">
      <h2 class="mb-2 font-light text-2xl">
        {{ $t('sections.education.courses') }}
      </h2>

      <div v-for="course in COURSES" :key="course">
        <div class="my-4">
          <h3>{{ course.title }}</h3>
          <h4 class="font-bold">{{ course.location }}</h4>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { COURSES } from '../utils/constants/COURSES';
</script>
