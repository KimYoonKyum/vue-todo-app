<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput v-on:addTodoItem="addOneItem"></TodoInput>
    <TodoList
        v-bind:propsData="todoItems"
        v-on:removeItem="removeOneItem"
        v-on:toggleItem="toggleOneItem"
    >
    </TodoList>
    <TodoFooter v-on:clearItem="clearTodo"></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from '../src/components/TodoHeader.vue'
import TodoInput from '../src/components/TodoInput.vue'
import TodoList from '../src/components/TodoList.vue'
import TodoFooter from '../src/components/TodoFooter.vue'


export default {
  components: {
    'TodoHeader': TodoHeader,
    'TodoInput': TodoInput,
    'TodoList': TodoList,
    'TodoFooter': TodoFooter,
  },
  data() {
    return {
      todoItems: []
    }
  },
  created() {
    if(localStorage.length > 0) {
      for(let idx = 0; idx < localStorage.length; idx++) {
        const item = localStorage.getItem(localStorage.key(idx))
        this.todoItems.push(JSON.parse(item))
      }
    }
  },
  methods: {
    addOneItem(todoItem) {
      const obj = {completed: false, item: todoItem}
      localStorage.setItem(String(todoItem), JSON.stringify(obj))
      this.todoItems.push(obj)
    },
    removeOneItem(todoItem,index) {
      localStorage.removeItem(todoItem.item)
      this.todoItems.splice(index,1)
    },
    toggleOneItem(todoItem,index) {
      console.log(todoItem, index)
      this.todoItems[index].completed = !todoItem.completed
      localStorage.removeItem(todoItem.item)
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem))
    },
    clearTodo() {
      localStorage.clear()
      this.todoItems = []
    }
  }
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
