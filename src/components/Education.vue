<template>
  <section id="education" class="flex items-center flex-col scroll-smooth text-left">
    <h1 class="mb-4 text-5xl font-bold text-cyan-500">
      {{ $t('sections.education.college') }}
    </h1>

    <div class="my-2">
      <h2 class="mb-2 font-bold text-2xl">
        {{ $t('education.college.title') }}
      </h2>

      <h3>{{ $t('education.college.gradutation') }}</h3>

      <span class="font-serif"> 08/2021 - 12/2025 </span>
    </div>

    <div class="my-2 text-center">
      <h2 class="mb-2 font-light text-2xl">
        {{ $t('sections.education.courses') }}
      </h2>

      <div v-for="course in COURSES" :key="course">
        <div class="my-4 text-left flex">
          <h3 class="font-bold">{{ course.location }}</h3>
          <section class="mx-2">-</section>
          <h2>{{ course.title }}</h2>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { COURSES } from '../utils/constants/COURSES';
</script>
