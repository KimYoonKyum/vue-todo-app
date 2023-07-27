<script>
import {mapGetters, mapState, mapMutations} from "vuex";

export default {
  methods: {
    ...mapMutations({
      removeTodo: 'removeOneItem',
      toggleComplete :'toggleOneItem'
    }),
  },
  computed: {
    ...mapState(['todoItems']),
    ...mapGetters(['storedTodoItem'])
  },
}

</script>

<template>
  <div>
    <transition-group name="list" tag="ul">
      <li v-for="(todoItem, index) in this.storedTodoItem" v-bind:key="index" class="shadow">
        <span class="checkBtn" @click="toggleComplete({todoItem, index})">
          <i class="fa-solid fa-check" v-bind:class="{checkBtnComplete: todoItem.completed}"></i>
        </span>
        <span v-bind:class="{textCompleted: todoItem.completed}">{{ todoItem.item }}</span>
        <span class="removeBtn" @click="removeTodo({todoItem, index})">
          <i class="fa-solid fa-trash"></i>
        </span>
      </li>
    </transition-group>
  </div>
</template>

<style scoped>
  ul {
    list-style-type: none;
    padding-left: 0;
    margin-top:0;
    text-align: left;
  }
  li {
    display: flex;
    min-height: 50px;
    height: 50px;
    line-height: 50px;
    margin: 0.5rem 0;
    padding: 0 0.9rem;
    background: white;
    border-radius: 5px;
  }
  .checkBtn {
    line-height: 45px;
    color: #62acde;
    margin-right: 5px;
  }
  .checkBtnComplete {
    color: #b3adad;
  }
  .textCompleted {
    text-decoration: line-through;
    color: #b3adad;
  }
  .removeBtn {
    cursor: pointer;
    margin-left: auto;
    color: #de4343;
  }


  .list-enter-active, .list-leave-active {
    transition: all 1s;
  }
  .list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
    opacity: 0;
    transform: translateY(30px);
  }
</style>