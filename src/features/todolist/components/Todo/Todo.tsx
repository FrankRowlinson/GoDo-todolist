import { StarIcon } from "../../../icons"
import { TodoMenu, Input } from "../"
import "./Todo.css"
import { useAppDispatch } from "../../../../app/hooks"
import { updateTodo } from "./../../todoThunks"
import { useState } from "react"
import { validateTodoName } from "../../utils"

export function Todo(todo: ITodo) {
  const dispatch = useAppDispatch()
  const [name, setName] = useState(todo.name)
  const { status, favourite } = todo
  const [isBeingEdited, setIsBeingEdited] = useState<boolean>(false)
  const [errorOnInput, setErrorOnInput] = useState<string>("")
  const removeFromFavourites = () => {
    dispatch(updateTodo({ ...todo, favourite: false }))
  }
  const onNameChange = (event: React.FormEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value
    setName(value)
    setErrorOnInput(validateTodoName(value, true))
  }
  const editTodoName = () => setIsBeingEdited(true)
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!errorOnInput) {
      dispatch(updateTodo({ ...todo, name: name }))
      setIsBeingEdited(false)
    }
  }

  return (
    <div className={`single-todo ${status} ${isBeingEdited ? "edit" : ""}`}>
      <div className={`todo-info ${errorOnInput && "error"}`}>
        {isBeingEdited ? (
          <form onSubmit={handleSubmit} className='change-name-form'>
            <Input
              id={todo.id}
              name={todo.name}
              value={name}
              onChange={onNameChange}
              label={errorOnInput || "'Enter' чтобы сохранить"}
            />
          </form>
        ) : (
          <>
            {name}
            {favourite && (
              <button
                className='favourite-button'
                onClick={removeFromFavourites}
              >
                <StarIcon size='sm' />
              </button>
            )}
          </>
        )}
      </div>
      <TodoMenu {...todo} editTodoName={editTodoName} />
    </div>
  )
}
