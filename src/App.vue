<template>
  <Header />

  <profile-header />

  <divider />

  <profile-content />

  <created-by />
</template>

<script setup>
import Header from './components/Header.vue';
import Divider from './components/Divider.vue';
import CreatedBy from './components/CreatedBy.vue';
import ProfileHeader from './components/ProfileHeader.vue';
import ProfileContent from './components/ProfileContent.vue';
</script>
