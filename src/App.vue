<script setup>
import { ref } from "vue";
import { RouterView } from "vue-router";

import Logo from "./components/icons/Logo.vue";
import SearchInput from "./components/SearchInput.vue";
import NavigationBar from "./components/NavigationBar.vue";
function teleportToSearchBar() {
  this.$refs.searchBar.focus();
}
</script>

<template>
  <header>
    <Logo />
    <NavigationBar />
    <SearchInput />
  </header>
  <RouterView />
</template>

<style scoped>
header {
  display: flex;
  align-items: center;
  justify-items: center;
  padding: 2%;
}

@media (max-width: 1350px) {
  header {
    display: block;
  }
}
</style>
