<template>
  <div class="my-4 w-full md:w-6/12 flex justify-between items-start flex-col">
    <div>
      <div class="my-2">
        <h2 class="mb-2 font-light text-2xl">{{ props.item.title }}</h2>
        <h3>{{ props.item.position || '-' }}</h3>
        <span class="font-serif">
          {{ props.item.initialDatetime }} -
          {{ props.item.finalDatetime || $t('sections.experiences.now') }}
        </span>
      </div>

      <h3 class="sm:text-sm text-base">{{ props.item.desc }}</h3>
    </div>

    <div class="flex flex-wrap mt-2">
      <tool v-for="tool in props.item.tools" :key="tool" :tool="tool" />
    </div>
  </div>
</template>

<script setup>
import Tool from './Tool.vue';

const props = defineProps({
  item: {
    type: Object,
    default: () => {},
  },
});
</script>
