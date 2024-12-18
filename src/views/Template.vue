<script setup>
import Card from "../components/Card.vue";

defineProps({
  cards: { type: Array, required: true },
});
</script>

<template>
  <main>
    <h1><slot></slot></h1>
    <div id="search-input"></div>
    <div class="card-container">
      <Card v-for="card in cards" v-bind="card" />
    </div>
  </main>
</template>

<style>
.card-container {
  display: flex;
  flex-direction: column;
}
</style>
