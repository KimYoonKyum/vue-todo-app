<script>
import Modal from './common/CustomModal.vue'
export default {
  data: function() {
    return {
      newTodoItem: '',
      showModal: false
    }
  },
  methods: {
    addTodo() {
      if(this.newTodoItem === '') {
        this.showModal = true
      } else {
        this.$store.commit('addOneItem',this.newTodoItem)
        this.clearInput()
      }
    },
    clearInput() {
      this.newTodoItem = ''
    },
    onModalClose() {
      this.showModal = false
    }
  },
  components: {
    CustomModal: Modal
  }
}
</script>

<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
    <span class="addContainer" @:click="addTodo">
      <i class="fa-solid fa-plus addBtn"></i>
    </span>

    <CustomModal v-if="showModal" @close="showModal = false">
    <!--      slot은 특정 컴포넌트의 일부 ui를 재사용 할 수 있게 하는거-->
      <h1 slot="header">
        Warning !
        <span @click="onModalClose">
          <i class="fa-solid fa-xmark"></i>
        </span>
      </h1>
      <h2 slot="body"> 빈 값은 추가가 안되요.</h2>
    </CustomModal>
  </div>
</template>

<style scoped>
  input:focus {
    outline: none;
  }
  .inputBox {
    background-color: white;
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
  }
  .inputBox input {
    border-style: none;
    font-size:0.9rem;
  }
  .addContainer {
    float: right;
    background: linear-gradient(to right, #6478FB, #8763FB);
    display: block;
    border-radius: 0 5px 5px 0;
  }
  .addBtn {
    cursor: pointer;
    color: white;
    vertical-align: middle;
    width:50px;
  }
</style>