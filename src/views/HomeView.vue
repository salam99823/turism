<template>
  <main>
    <img src="/background.png" alt="Background" class="background-image" />
  </main>
</template>

<style scoped>
main {
  position: relative;
  height: 100vh;
  overflow: hide;
}

.background-image {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -13%);
  width: 100%;
  object-fit: cover;
  z-index: -1;
}

@media (max-width: 1350px) {
  .background-image {
    transform: translate(-50%, -20%);
  }
}
</style>
