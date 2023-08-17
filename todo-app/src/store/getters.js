export const storedTodoItem = (state) => {
    return state.todoItems.sort((p, n) => n.item - p.item)
}
