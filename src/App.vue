<script setup>
import { ref } from 'vue';
import { RouterLink, RouterView } from "vue-router";
import MainHeader from "./components/MainHeader.vue";
import Category from "./components/Category.vue";
const categories = ref([
  {
    header: "Быстрая еда",
    description: "...",
  },
  {
    header: "Рестораны",
    description: "...",
  },
  {
    header: "Музеи",
    description: "...",
  },
  {
    header: "Выставки",
    description: "...",
  },
  {
    header: "Мероприятия",
    description: "...",
  },
  {
    header: "Ночлег",
    description: "...",
  },
]);

</script>

<template>
  <header>
    <MainHeader />
  </header>

  <Category
    v-for="category in categories"
    image="/favicon.ico"
    :header="category.header"
    :description="category.description"
  />

  <RouterView />
</template>

<style scoped></style>
