<template>
  <div>
    {{ name }}
  </div>
</template>

<script>
export default {
  name: "BoardCard",
  props: {
    id: {
      type: Number,
    },
    name: {
      type: String,
    },
  },
};
</script>
