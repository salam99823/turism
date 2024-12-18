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
  href: {
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
  <div class="card" :id="id" :class="(right ? 'right' : 'left') + ' ' + _class">
    <img class="card-img" :src="image" alt="image" />
    <div class="card-body">
      <div class="card-header">
        <h3 class="card-header">
          <a :href="href">{{ header }}</a>
        </h3>
        <div class="rating">
          {{ rating }} <img src="../assets/star.svg" alt="star" class="star" />
        </div>
      </div>
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<style scoped>
.card {
  font-size: 1.2rem;
  display: flex;
  padding: 0px;
  margin: 0.625rem;
  border-radius: 2.18rem;
}

.right.card {
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

.rating {
  justify-self: right;
  display: flex;
  align-items: center;
}

.star {
  width: 2rem;
}
</style>
