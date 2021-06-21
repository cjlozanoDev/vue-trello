<template>
  <section>
    <h3><span>Mis paneles</span> > {{ name }}</h3>
    <div>
      <input
        type="text"
        placeholder="Añade una lista"
        v-model="listName"
        @keyup.enter="add()"
      />
      <div class="container">
        <Column
          v-for="list in boardList"
          :key="list.id"
          :list-id="list.id"
          :name="list.name"
        />
      </div>
    </div>
  </section>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
import Column from "@/components/Column.vue";

export default {
  name: "Board",
  components: {
    Column,
  },
  props: {
    name: {
      type: String,
      default: "",
    },
    id: {
      type: String,
      default: "0",
    },
  },
  created() {
    this.fetchList({ board: this.id });
  },
  data() {
    return {
      listName: "",
    };
  },
  computed: {
    ...mapState(["fetchingData"]),
    ...mapGetters(["getListsByBoard"]),
    boardList() {
      return this.getListsByBoard(this.id);
    },
  },
  methods: {
    ...mapActions(["fetchList", "addColumn"]),
    add() {
      this.addColumn({ board: this.id, name: this.listName });
      this.listName = "";
    },
  },
};
</script>

<style scoped>
section {
  text-align: left;
}
h3 {
  color: #37474f;
  text-align: left;
  margin: 1.5rem;
}
h3 span {
  color: #546e7a;
}
input {
  background-color: #607d8b;
  border: 0;
  border-radius: 3px;
  box-shadow: 0 0 0 0.5px rgba(49, 49, 93, 0.03),
    0 2px 5px 0 rgba(49, 49, 93, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.08);
  color: #607d8b;
  font-size: 1.2rem;
  margin: 0 1rem;
  outline: 0;
  padding: 1rem;
  transition: all 600ms ease;
}
input:active,
input:focus {
  background-color: #fafafa;
}
input::placeholder {
  color: #fff;
}
</style>
