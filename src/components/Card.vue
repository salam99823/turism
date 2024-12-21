<template>
  <div class="card" :class="{ reverse: reverse }">
    <img :src="image" alt="image" class="card-image" />

    <div class="card-body">
      <div class="card-header-wrapper">
        <h3 class="card-title">
          <a :href="link" target="_blank">{{ title }}</a>
        </h3>
        <div class="card-rating">{{ rating.toFixed(1) }}</div>
        <img src="../assets/star.svg" alt="star" class="star" />
      </div>
      <slot />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
defineProps({
  _class: {
    type: String,
    default: "",
  },
  reverse: {
    type: Boolean,
    default: false,
  },
});

const rating = ref(5);
</script>

<style scoped>
.card {
  font-size: 1.2rem;
  display: flex;
  padding: 0px;
  margin: 0.625rem;
  border-radius: 2.18rem;
}

.reverse.card {
  flex-direction: row-reverse;
}

.card-img {
  width: 25.875rem;
  height: 18.75rem;
  border-radius: 2.18rem;
}

.card-body {
  padding: 0 2rem 0 1rem;
}

.card-header {
  display: flex;
  justify-content: space-between;
}

.card-header a {
  text-decoration: none;
  color: inherit;
}

.card-rating {
  justify-self: right;
  display: flex;
  align-items: center;
}

.star {
  width: 2rem;
}
</style>
