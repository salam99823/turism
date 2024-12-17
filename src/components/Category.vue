<script setup>
import { ref } from 'vue'
defineProps({
  image: {
    type: String,
    required: true,
  },
  header: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  }
});

const show = ref(false)
</script>

<template>
  <div class="category" @mouseenter.self="show = true" @mouseout.self="show = false">
    <img :src="image" alt="">
    <h4>{{header}}</h4>
    <p v-if="show">{{description}}</p>
  </div>
</template>

<style scoped>
.category {
  border: 2px solid;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
}
</style>
