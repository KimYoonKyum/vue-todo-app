<template>
  <div id="app">
    <div>{{this.$store.state.count}}</div>
    <div @click="addCount">click</div>
    <TodoHeader></TodoHeader>
    <TodoInput></TodoInput>
    <TodoList></TodoList>
    <TodoFooter></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from '../src/components/TodoHeader.vue'
import TodoInput from '../src/components/TodoInput.vue'
import TodoList from '../src/components/TodoList.vue'
import TodoFooter from '../src/components/TodoFooter.vue'

console.log('commit1')
console.log('rollback-test1')
console.log('rollback-test2')
console.log('rollback-test3')


console.log('modify-rollback-commit')

console.log('cherry-test-commit')


console.log('cccccccccccc')



console.log('cherry-pick-test222222-modify')
console.log('cherry-pick-test222222')
export default {
  methods: {
    addCount() {
      this.$store.dispatch('delayedAddCount')
    }
  },
  components: {
    'TodoHeader': TodoHeader,
    'TodoInput': TodoInput,
    'TodoList': TodoList,
    'TodoFooter': TodoFooter,
  },
}
</script>

<style>
body {
  text-align: center;
  background-color: #F6F6F6;
}
input {
  border-style: groove;
  width: 200px;
}
button {
  border-style: groove;
}
.shadow {
  box-shadow: 5px 10px 10px rgba(0,0,0,0.03);
}

</style>
