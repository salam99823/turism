<script setup>
import { ref } from "vue";
import { RouterView, RouterLink } from "vue-router";
const categories = ref([
  {
    header: "Туры",
    ref: "/tours",
  },
  {
    header: "Куда сходить",
    ref: "/ways",
  },
  {
    header: "Что посмотреть",
    ref: "/places",
  },
  {
    header: "Где остановиться",
    ref: "/stops",
  },
  {
    header: "Что поесть",
    ref: "/food",
  },
]);
</script>

<template>
  <header>
    <img src="/main-icon.png" alt="Main icon" class="main-icon" />
    <RouterLink to="/"><h1>TRAVEL</h1></RouterLink>
    <nav>
      <RouterLink v-for="category in categories" :to="category.ref">
        {{ category.header }}
      </RouterLink>
    </nav>
  </header>
  <RouterView />
</template>
