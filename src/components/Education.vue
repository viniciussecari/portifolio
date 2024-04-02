<template>
  <section id="education" class="flex items-center flex-col scroll-smooth">
    <h1 class="mb-4 text-5xl font-light">
      {{ $t('sections.education.college') }}
    </h1>

    <div class="my-2">
      <h2 class="mb-2 font-light text-2xl">
        {{ $t('education.college.title') }}
      </h2>
      <h3>{{ $t('education.college.gradutation') }}</h3>

      <span class="font-serif"> 08/2021 - 06/2024 </span>
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
