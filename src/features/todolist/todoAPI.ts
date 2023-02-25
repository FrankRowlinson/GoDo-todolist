import { todos } from "../../app/endPoints"

const addTodo = async (todoName: string) => {
  const response = await fetch(todos, {
    method: "POST",
    body: JSON.stringify({
      name: todoName,
      createdAt: Date.now(),
      favourite: false,
      status: "wip",
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })
  return response.json()
}

const fetchTodos = async () => {
  const response = await fetch(todos)
  return response.json()
}

const deleteTodo = async (todoId: string) => {
  const response = await fetch(`${todos}/${todoId}`, {
    method: "DELETE",
  })
  return response.json()
}

const updateTodo = async (todo: ITodo) => {
  const response = await fetch(`${todos}/${todo.id}`, {
    method: "PUT",
    body: JSON.stringify({
      ...todo,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })
  return response.json()
}

const todoAPI = { addTodo, fetchTodos, updateTodo, deleteTodo }
export default todoAPI
