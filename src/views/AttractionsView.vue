<script setup>
import { ref } from "vue";
import Template from "./Template.vue";
const cards = ref([
  {
    image: "/background.png",
    header: "AZIMUT",

    description:
      "Отель «AZIMUT Отель Мирный» расположен в центре города Мирный, в 5 минутах езды от аэропорта. Гостям предлагается проживание в номерах различных категорий, включая номера «Эконом» и «Стандарт», а также завтрак «Шведский стол».",
    rating: 5,
  },
  {
    image: "/background.png",
    header: "header",
    description: "description",
    rating: 4.5,
  },
]);
</script>

<template>
  <Template :cards="cards"><div class="title"></div></Template>
</template>

<style>
.card-container {
  display: flex;
  flex-direction: column;
}

.card {
  background-color: var(--blue);
}
</style>
