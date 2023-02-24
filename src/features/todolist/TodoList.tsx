import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { AddTodoForm, List, Todo } from "./components"
import "./TodoList.css"
import { selectStatus, selectTodos } from "./todoSlice"
import { useEffect } from "react"
import { fetchTodos } from "./todoThunks"

export function TodoList() {
  const todos = useAppSelector(selectTodos)
  const status = useAppSelector(selectStatus)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchTodos())
  }, [dispatch])

  if (status === "loading") {
    return <div>Loading...</div>
  }

  if (status === "error") {
    return <div>Error</div>
  }

  return (
    <div className='todolist-container'>
      <AddTodoForm />
      <List>
        {todos.map((el) => {
          return <Todo key={el.id} {...el} />
        })}
      </List>
    </div>
  )
}
