export const validateTodoName = (
  todoName: string,
  isSubmitted: boolean
): string => {
  if (todoName.length === 0 && isSubmitted) {
    return "Нельзя добавлять пустые задачи"
  } else if (todoName.length > 160) {
    return `Лимит символов в названии превышен на ${todoName.length - 160}`
  } else {
    return ""
  }
}
