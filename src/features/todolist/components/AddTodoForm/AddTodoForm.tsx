import { Button, Input } from "../"
import { useAppDispatch } from "../../../../app/hooks"
import { PlusIcon } from "../../../icons"
import { addTodo } from "../../todoThunks"
import { useState } from "react"
import "./AddTodoForm.css"

export function AddTodoForm() {
  const dispatch = useAppDispatch()
  const [todoName, setTodoName] = useState<string>("")
  const [error, setError] = useState<string>("")
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false)

  const handleChange = (event: React.FormEvent<HTMLInputElement>): void => {
    const value = event.currentTarget.value
    setTodoName(value)
    if (value.length === 0 && isSubmitted) {
      setError("Нельзя добавлять пустые задачи")
    } else if (value.length > 160) {
      setError(`Лимит символов в названии превышен на ${value.length - 160}`)
    } else {
      setError("")
    }
  }

  const handleSubmit = (event: React.FormEvent): void => {
    event.preventDefault()
    setIsSubmitted(true)
    if (todoName) {
      dispatch(addTodo(todoName))
      setTodoName("")
    } else {
      setError("Нельзя добавлять пустые задачи")
    }
  }

  return (
    <form
      className={`addtodo-form ${error ? "error" : ""}`}
      onSubmit={handleSubmit}
    >
      <Input
        name='todo'
        id='todo-input'
        value={todoName}
        onChange={handleChange}
        placeholder='Что нужно сделать?'
        label={error}
      />
      <Button variant='success' label={<PlusIcon size='sm' />} />
    </form>
  )
}
