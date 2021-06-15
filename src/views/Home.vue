<template>
  <div class="home">
    <h3>Mis paneles</h3>
    <input
      type="text"
      placeholder="Añade un nuevo panel"
      v-model="boardName"
      @keyup.enter="add()"
    />
    <div class="boards-collection">
      <BoardCard
        v-for="board in boards"
        :key="board.id"
        :name="board.name"
        :id="board.id"
      >
      </BoardCard>
    </div>
  </div>
</template>

<script>
import BoardCard from "@/components/BoardCard.vue";
// @ is an alias to /src

export default {
  name: "Home",
  components: {
    BoardCard,
  },
  data() {
    return {
      boardName: "",
      boards: [
        {
          id: 1,
          name: "Tareas",
        },
        {
          id: 2,
          name: "Lista de la compra",
        },
      ],
    };
  },
  methods: {
    add() {
      this.boards.push({
        name: this.boardName,
      });
    },
  },
};
</script>

<style scoped>
h3 {
  text-align: left;
  margin: 1.5rem;
}
.boards-collection {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 1rem;
}
input {
  box-sizing: border-box;
  background-color: #546e7a;
  border: 2px solid #546e7a;
  border-radius: 3px;
  font-size: 1.1rem;
  outline: 0;
  padding: 0.5rem;
  transition: all 600ms ease;
}
input:focus,
input:active {
  background-color: #fff;
  color: #546e7a;
}
input::placeholder {
  color: #fff;
}
</style>
