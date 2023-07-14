<template>
  <div class="header h-auto w-full flex justify-center items-center flex-col">
    <span class="profile__photo mb-4 w-36 h-36 rounded-full" />

    <h1 class="font-bold text-xl">Vinicius Santana Secari</h1>

    <profile-contacts />

    <profile-links />
  </div>
</template>

<script setup>
import ProfileLinks from './ProfileLinks.vue';
import ProfileContacts from './ProfileContacts.vue';
</script>

<style scoped>
.profile__photo {
  background-image: url('../assets/images/profile-photo.png');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
