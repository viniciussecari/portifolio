<template>
  <div class="entrance_colors skill__box box">
    <img
      class="bg-cover w-20 h-20 mb-10"
      :src="props.item.icon"
      :alt="`${props.item.title}-icon`" />

    <div>
      <h2>{{ props.item.title }}</h2>
      <h3>{{ props.item.description }}</h3>
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
</script>

<style scoped>
.box {
  min-width: 20rem;
  min-height: 20rem;
}
</style>
