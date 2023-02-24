import { TodoFilter } from "./TodoList"

export const filterTodos = (todos: ITodo[], filter: TodoFilter): ITodo[] => {
  switch (filter) {
    case "none":
      return todos
    case "done":
      return todos.filter((todo) => todo.status === "done")
    case "favourite":
      return todos.filter((todo) => todo.favourite)
    case "wip":
      return todos.filter((todo) => todo.status === "wip")
    default:
      return todos
  }
}

export const isChecked = (value: string, filter: TodoFilter): boolean => {
  return value === filter
}
