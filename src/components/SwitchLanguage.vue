<template>
  <form class="max-w-sm ml-auto entrance_by_right">
    <select id="countries" class="select__countries" v-model="lang">
      <option value="pt_BR">{{ $t('countries.pt') }}</option>
      <option value="en">{{ $t('countries.usa') }}</option>
    </select>
  </form>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue';
const lang = ref('');

onMounted(() => {
  lang.value = localStorage.getItem('language');
});

watch(lang, async (newLang, old) => {
  if (old !== newLang && newLang !== '' && old !== '') {
    localStorage.setItem('language', newLang);
    location.reload();
  }
});
</script>
