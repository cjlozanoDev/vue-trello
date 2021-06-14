<template>
  <footer>
    <span> App creada con <a href="//vuejs.or"> Vue.js </a> en Madrid </span>
  </footer>
</template>

<script>
export default {
  name: "AppFooter",
};
</script>

<style scoped>
footer {
  box-sizing: border-box;
  background-color: #cfd8dc;
  bottom: 0;
  left: 0;
  padding: 1rem;
  position: absolute;
  width: 100%;
}

footer a {
  text-decoration: none;
  color: #546e7a;
}
</style>
