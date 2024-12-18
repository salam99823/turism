<template>
  <div class="container">
    <input type="text" placeholder="Search" aria-label="Search" />
    <img src="../assets/search.svg" alt="Search icon" />
  </div>
</template>

<style scoped>
.container {
  background-color: var(--white);
  display: flex;
  align-items: center;
  border: 1px solid var(--dark-blue);
  border-radius: 2rem;
  padding: 0.7rem;
}

.container input {
  background-color: inherit;
  border: none;
  border-radius: 2rem;
  padding: 0;
  margin: 0;
  opacity: 0;
  max-width: 0;
  transition:
    opacity 0.5s,
    max-width 0.5s,
    padding 0.5s,
    margin 0.5s;
}

.container:hover input,
.container input:focus {
  padding: 0.3rem 0.7rem;
  margin: 0 0.5rem;
  opacity: 1;
  max-width: 7.5rem;
}

.container img {
  max-width: 1.5rem;
  cursor: pointer;
}

@media (max-width: 1350px) {
  .container input {
    padding: 0.3rem 0.7rem;
    margin: 0 0.5rem;
    opacity: 1;
    max-width: inherit;
    flex-grow: 1;
  }

  .container:hover input,
  .container input:focus {
    max-width: inherit;
  }

  .container img {
    align-self: flex-end;
  }
}
</style>
