<script>
import {mapGetters} from "vuex";
export default {
 computed: {
   ...mapGetters(['originPrice','doublePrice','triplePrice'])
 }
}
</script>

<template>
  <div id="root">
    <p>{{this.originPrice}}</p>
    <p>{{this.doublePrice}}</p>
    <p>{{this.triplePrice}}</p>
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