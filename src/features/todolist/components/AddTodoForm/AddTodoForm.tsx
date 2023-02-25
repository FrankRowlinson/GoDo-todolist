import { Button, Input } from "../"
import { useAppDispatch, useAppSelector } from "../../../../app/hooks"
import { PlusIcon } from "../../../icons"
import { addTodo } from "../../todoThunks"
import { useState } from "react"
import "./AddTodoForm.css"
import { validateTodoName } from "../../utils"
import { selectStatus } from "./../../todoSlice"

export function AddTodoForm() {
  const dispatch = useAppDispatch()
  const [todoName, setTodoName] = useState<string>("")
  const [error, setError] = useState<string>("")
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false)
  const status = useAppSelector(selectStatus)

  const handleChange = (event: React.FormEvent<HTMLInputElement>): void => {
    const value = event.currentTarget.value
    setTodoName(value)
    setError(validateTodoName(value, isSubmitted))
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
      <Button
        variant='success'
        label={<PlusIcon size='sm' />}
        disabled={status === "post-loading"}
      />
    </form>
  )
}
