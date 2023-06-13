<template>
  <div :style="generateBorderColor()" class="entrance_colors tool">
    {{ props.tool }}
  </div>
</template>

<script setup>
const props = defineProps({
  tool: {
    type: String,
    default: '',
  },
});

const generateBorderColor = () => {
  const r = parseInt(Math.random() * 250);
  const g = parseInt(Math.random() * 250);
  const b = parseInt(Math.random() * 250);
  const color = `border-color: rgb(${r}, ${g}, ${b})`;

  return color;
};
</script>
