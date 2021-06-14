<template>
  <header>
    <span class="title">Vue Trello</span>
    <RouterLink class="btn_header" to="/"> Mis paneles </RouterLink>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
};
</script>

<style scoped>
header {
  box-sizing: border-box;
  background-color: #607d8b;
  display: flex;
  justify-content: flex-start;
  margin: 0;
  padding: 1rem;
}
header .title {
  align-self: center;
  color: #eceff1;
  font-size: 1.2em;
  font-weight: bold;
  margin-right: 1rem;
}
.btn_header {
  background-color: #455a64;
  border: none;
  border-radius: 3px;
  box-shadow: 0 0 0 0.5px rgba(49, 49, 93, 0.83),
    0 2px 5px 0 rgba(49, 49, 93, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.08);
  color: #b0bec5;
  cursor: pointer;
  text-decoration: none;
  padding: 0.5rem;
  margin: 0 0.5rem;
}
</style>
