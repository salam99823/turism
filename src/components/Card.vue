<script setup>
defineProps({
  _class: {
    type: String,
    default: "",
  },
  id: {
    type: String,
    default: "",
  },
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
  },
  rating: {
    type: Number,
    required: true,
  },
  right: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div class="card" :id="id" :class="(right ? 'right' : 'left') + _class">
    <img class="card-img" :src="image" alt="text" />
    <div class="card-body">
      <div class="card-header">
        <h3 class="card-header">{{ header }}</h3>
        <div class="rating">{{ rating }}</div>
        <img src="../assets/star.svg" alt="star" class="star" />
      </div>
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<style scoped>
.card {
  font-size: 1.5rem;
  display: flex;
  padding: 0px;
  margin: 0.625rem;
  background-color: var(--blue);
  border-radius: 2.18rem;
}

.right.card {
  flex-direction: row-reverse;
}

.card-img {
  align-self: center;
  width: 6rem;
  height: 6rem;
  padding: 0px;
  margin: 0;
  width: 25.875rem;
  height: 18.75rem;
  border-radius: 2.18rem;
}

.card-body {
  padding: 1rem;
  color: var(--dark-blue);
}

.card-header {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  color: var(--primary-color);
}

.rating {
  align-self: center;
}

.star {
  align-self: center;
  width: 2rem;
}
</style>
