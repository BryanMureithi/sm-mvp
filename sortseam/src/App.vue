<script>
import NavBar from "./components/NavBar.vue";

export default {
  name: "App",
  components: { NavBar },
};
</script>

<template>
  <div class="home">
    <NavBar />
  </div>
</template>

<style scoped>
.home {
  background-color: #1f1f22;
}
</style>
