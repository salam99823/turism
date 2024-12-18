<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <RouterLink to="/" class="logo">
    <img src="/logo.png" alt="Logo" class="logo" />
    <h1 class="logo-text">Алмазный город</h1>
  </RouterLink>
</template>

<style scoped>
a.logo {
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem;
}

img.logo {
  width: 10rem;
}

.logo-text {
  font-size: 2.3rem;
  color: var(--primary-color);
  padding-left: 1rem;
}
</style>
