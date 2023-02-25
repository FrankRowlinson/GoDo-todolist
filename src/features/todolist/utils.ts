import { TodoFilter } from "./TodoList"

export const filterTodos = (todos: ITodo[], filter: TodoFilter): ITodo[] => {
  switch (filter) {
    case "none":
      return todos
    case "done":
      return todos.filter((todo) => todo.status === "done")
    case "favourite":
      return todos.filter((todo) => todo.favourite && todo.status === "wip")
    case "wip":
      return todos.filter((todo) => todo.status === "wip")
    default:
      return todos
  }
}

export const isChecked = (value: string, filter: TodoFilter): boolean => {
  return value === filter
}

export const validateTodoName = (
  todoName: string,
  isSubmitted: boolean
): string => {
  if (todoName.length === 0 && isSubmitted) {
    return "Имя задачи не может быть пустым"
  } else if (todoName.length > 160) {
    return `Лимит символов в названии превышен на ${todoName.length - 160}`
  } else {
    return ""
  }
}
