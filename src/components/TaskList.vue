<template>
  <ul>
    <li
      v-for="task in tasks"
      :key="task.id"
      @click="markAsCompleted({ task })"
      @dblclick="deleteTask({ taskId: task.id })"
      :class="{ completed: task.completed }"
    >
      {{ task.title }}
    </li>
    <input
      type="text"
      placeholder="Añade una nueva tarea..."
      v-model="title"
      @keyup.enter="add()"
    />
  </ul>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "TaskList",
  props: {
    tasks: {
      type: Array,
      default: () => {},
    },
    listId: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      title: "",
    };
  },
  methods: {
    ...mapActions(["addTask", "markAsCompleted", "deleteTask"]),
    add() {
      this.addTask({ list: this.listId, title: this.title });
      this.title = "";
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
li {
  background-color: #fafafa;
  border-radius: 3px;
  border-bottom: 1px solid #ccc;
  margin: 0.25rem 0;
  padding: 1rem;
}
.completed {
  background-color: #cfd8dc;
  color: #90a4ae;
}

input {
  box-sizing: border-box;
  background-color: #eceff1;
  border: none;
  border-radius: 3px;
  font-size: 1rem;
  margin: 0.5rem;
  outline: 0;
  padding: 0.75rem 0;
  transition: background-color 600ms ease;
  width: 100%;
}
input:focus,
input:active {
  background-color: #fafafa;
  border-bottom: 1px solid #ccc;
  margin: 0.25rem 0;
  padding: 1rem;
}
input::placeholder {
  color: #90a4ae;
}
</style>
