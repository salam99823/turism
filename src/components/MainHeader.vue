<script setup>
defineProps({
  src: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="greetings">
    <img src="/favicon.ico" alt="Main icon" class="main-icon" />
  </div>
</template>

<style scoped></style>
