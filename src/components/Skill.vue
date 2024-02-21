<template>
  <div class="entrance_colors skill__box box">
    <img
      class="bg-cover w-20 h-20 mb-10"
      :src="props.item.icon"
      :alt="`${props.item.title}-icon`" />

    <div>
      <h2>{{ $t(`skills.${formatTitle(props.item.title)}.title`) }}</h2>
      <h3>{{ $t(`skills.${formatTitle(props.item.title)}.description`) }}</h3>
    </div>
  </div>
</template>

<script setup>
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

<style scoped>
.box {
  min-width: 20rem;
  min-height: 20rem;
}

@media (max-width: 640px) {
  .box {
    min-width: 19rem;
  }
}
</style>
