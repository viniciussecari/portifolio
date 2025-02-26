<template>
  <div class="my-4 w-full md:w-6/12 flex justify-between items-start flex-col">
    <div>
      <div class="my-2">
        <h1 class="text-2xl font-bold">{{ props.item.title }}</h1>
        <h2 class="font-bold my-2">{{ $t(`experiences.${formatTitle(props.item.title)}.position`) }}</h2>
        <section class="font-serif mb-4">
          {{ props.item.initialDatetime }} -
          {{ props.item.finalDatetime || $t('sections.experiences.now') }}
        </section>
      </div>

      <h3 class="sm:text-sm text-base" v-html="$t(`experiences.${formatTitle(props.item.title)}.description`)">
      </h3>
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

const formatTitle = (title) => {
  return title
    .split('')
    .filter((el) => el !== ' ')
    .join('')
    .toLowerCase();
};
</script>
