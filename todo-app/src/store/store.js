import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const storage = {
    fetch() {
        const arr = []
        if(localStorage.length > 0) {
            for(let idx = 0; idx < localStorage.length; idx++) {
                const item = localStorage.getItem(localStorage.key(idx))
                arr.push(JSON.parse(item))
            }
        }
        return arr
    },
}

export const store = new Vuex.Store({
    state: {
        todoItems: storage.fetch(),
        count: 0
    },
    getters: {
        storedTodoItem(state) {
            return state.todoItems.sort((p,n)=>n.item - p.item)
        }
    },
    mutations: {
        addOneItem(state, todoItem) {
            const obj = {completed: false, item: todoItem}
            localStorage.setItem(String(todoItem), JSON.stringify(obj))
            state.todoItems.push(obj)
        },
        removeOneItem(state,payload) {
            const {todoItem,index} = payload
            localStorage.removeItem(todoItem.item)
            state.todoItems.splice(index,1)
        },
        toggleOneItem(state,payload) {
            const {todoItem,index} = payload
            state.todoItems[index].completed = !todoItem.completed
            localStorage.removeItem(todoItem.item)
            localStorage.setItem(todoItem.item, JSON.stringify(todoItem))
        },
        clearTodo(state) {
            localStorage.clear()
            state.todoItems = []
        },
        addCounter(state) {
            state.count++
        }
    },
    actions: {
        delayedAddCount(context) {
            setTimeout(()=> context.commit('addCounter'),2000)
        }
    }
})