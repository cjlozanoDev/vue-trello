<template>
  <RouterLink class="board-card" :to="{ name: 'Board', params: { name, id } }">
    <span class="board-card__title"> {{ name }} </span>
  </RouterLink>
</template>

<script>
export default {
  name: "BoardCard",
  props: {
    id: {
      type: String,
    },
    name: {
      type: String,
    },
  },
};
</script>

<style scoped>
.board-card {
  background-color: #546e7a;
  box-shadow: 0 0 0 0.5px rgba(49, 49, 93, 0.03),
    0 2px 5px 0 rgba(49, 49, 93, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.08);
  box-sizing: border-box;
  border-radius: 5px;
  color: #fafafa;
  margin: 0.5rem 1.5rem;
  padding: 1rem;
  text-align: left;
  text-decoration: none;
  transition: all 600ms ease;
  width: 100%;
  height: 100px;
}
.board-card__title {
  font-size: 1.2rem;
}
.board-card:hover {
  background-color: #90a4ae;
  font-weight: bold;
}
@media (min-width: 600px) {
  .board-card {
    width: 33%;
  }
}
@media (min-width: 1024px) {
  .board-card {
    width: 250px;
  }
}
</style>
