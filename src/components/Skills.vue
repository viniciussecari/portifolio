<template>
  <section class="flex items-center flex-col">
    <h1 class="mb-4 text-5xl font-bold text-cyan-500" id="skills">
      {{ $t('sections.skills.title') }}
    </h1>

    <div
      class="my-4 flex flex-col "
      v-for="(divisor, i) in divisors"
      :key="`${divisor}-${i}`">
      <p class="my-4 text-4xl font-bold text-cyan-500">
        {{ $t(`skills.divisors.${divisor}`) }}
      </p>

      <div class="flex justify-evenly flex-wrap w-full">
        <skill
          v-for="item in itemsByDivisor[divisor]"
          :key="item?.title"
          :item="item" 
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import Skill from './Skill.vue';
import SKILLS from '../utils/constants/SKILLS';

const divisors = SKILLS.map((el) => Object.keys(el)[0]);

const itemsByDivisor = divisors.reduce((acc, divisor) => {
  acc[divisor] = SKILLS.flatMap((el) => el[divisor]).filter(Boolean);
  return acc;
}, {});
</script>
