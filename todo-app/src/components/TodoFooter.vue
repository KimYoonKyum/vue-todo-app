<script>
export default {
  methods: {
    clearTodo() {
      this.$store.commit('clearTodo')
    }
  }
}
</script>

<template>
  <div class="clearAllContainer">
    <span class="clearAllBtn" v-on:click="clearTodo">
      CLEAR ALL
    </span>
  </div>
</template>

<style scoped>
  .clearAllContainer {
    width: 8.5rem;
    height: 50px;
    line-height: 50px;
    background-color: white;
    border-radius: 5px;
    margin: 0 auto;
  }
  .clearAllBtn {
    cursor: pointer;
    color: #e20303;
    display: block;
  }
</style>