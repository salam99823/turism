<script setup>
import Cards from "../components/Cards.vue";
</script>

<template>
  <main v-if="cards.length > 0">
    <h1 class="heading">Гостиницы</h1>
    <Cards></Cards>
  </main>
</template>
