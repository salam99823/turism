<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";

const categories = ref([
  { header: "Туры", ref: "/tours" },
  { header: "Куда сходить", ref: "/ways" },
  { header: "Что посмотреть", ref: "/attractions" },
  { header: "Где остановиться", ref: "/hotels" },
  { header: "Что поесть", ref: "/cafe" },
]);
</script>

<template>
  <nav>
    <RouterLink
      v-for="category in categories"
      :to="category.ref"
      class="nav-link"
    >
      {{ category.header }}
    </RouterLink>
  </nav>
</template>

<style scoped>
.nav-link {
  font-size: 1.4rem;
  color: var(--dark-blue);
  padding: 0.5rem 1rem;
  text-decoration: none;
  transition: color 0.5s;
}

.nav-link:hover {
  color: var(--primary-color);
}

.nav-link.router-link-active {
  font-weight: bold;
  color: var(--primary-color);
}
</style>
