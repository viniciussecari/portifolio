<template>
  <div>
    <h2>{{ $t('profile.position') }}</h2>

    <h2
      class="px-2 hover:transition-shadow hover:shadow-lg hover:shadow-cyan-500/50">
      <a href="mailto:viniciussecari987@gmail.com">{{
        $t('profile.email', {
          account: 'vinicussecari987',
          domain: 'gmail.com',
        })
      }}</a>
    </h2>
  </div>
</template>

<script setup></script>
