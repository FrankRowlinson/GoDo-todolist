import { todos } from "../../app/endPoints"

const addTodo = async (todoName: string) => {
  const response = await fetch(todos, {
    method: "POST",
    body: JSON.stringify({
      name: todoName,
      createdAt: Date.now(),
      favourite: false,
      status: "undone",
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

const todoAPI = { addTodo, fetchTodos }
export default todoAPI
