<template>
  <div class="home">
    <h3>Mis paneles</h3>
    <span v-text="'cargando'" v-if="fetchingData" />
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
import { mapState, mapActions } from "vuex";
// @ is an alias to /src

export default {
  name: "Home",
  components: {
    BoardCard,
  },
  created() {
    this.fetchBoards({ user: 1 });
  },
  data() {
    return {
      boardName: "",
    };
  },
  computed: {
    ...mapState(["boards", "fetchingData"]),
  },
  methods: {
    ...mapActions(["fetchBoards", "addBoard"]),
    add() {
      this.addBoard({ name: this.boardName });
      this.boardName = "";
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
