<template>
  <section>
    <header>
      <h3>{{ name }}</h3>
    </header>
    <TaskList :listId="listId" :tasks="tasksList" />
  </section>
</template>

<script>
import TaskList from "./TaskList.vue";

export default {
  name: "Column",
  components: {
    TaskList,
  },
  props: {
    name: {
      type: String,
      default: "",
    },
    listId: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      tasksList: [
        {
          id: "1",
          title: "Aprender Vue",
          completed: false,
        },
        {
          id: "2",
          title: "Aprender Vuex",
          completed: false,
        },
      ],
    };
  },
};
</script>

<style scoped>
section {
  box-sizing: border-box;
  background-color: #eceff1;
  border-radius: 3px;
  box-shadow: 0 0 0 0.5px rgba(49, 49, 93, 0.03),
    0 2px 5px 0 rgba(49, 49, 93, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.08);
  margin: 1rem;
  padding: 1rem;
  width: 100%;
}
@media (min-width: 600px) {
  section {
    width: calc(50% -2rem - 2px);
  }
}
@media (min-width: 1024px) {
  section {
    width: calc(33% -2rem - 2px);
  }
}
@media (min-width: 1200px) {
  section {
    width: calc(25% -2rem - 2px);
  }
}
</style>
