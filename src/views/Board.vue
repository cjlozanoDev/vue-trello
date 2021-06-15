<template>
  <section>
    <h3><span>Mis paneles</span> > {{ name }}</h3>
    <div></div>
  </section>
</template>

<script>
export default {
  name: "Board",
  props: {
    name: {
      type: String,
      default: "",
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
</style>
