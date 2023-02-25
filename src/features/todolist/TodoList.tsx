import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { AddTodoForm, Button, List, RadioButton, Todo } from "./components"
import "./TodoList.css"
import { selectStatus, selectTodos } from "./todoSlice"
import { useEffect, useState } from "react"
import { fetchTodos } from "./todoThunks"
import { CloseIcon } from "../icons"
import { filterTodos, isChecked } from "./utils"

export type TodoFilter = "done" | "favourite" | "none" | "wip"

export function TodoList() {
  const todos = useAppSelector(selectTodos)
  const status = useAppSelector(selectStatus)
  const dispatch = useAppDispatch()
  const [filter, setFilter] = useState<TodoFilter>("none")
  const [filteredTodos, setFilteredTodos] = useState(todos)

  useEffect(() => {
    dispatch(fetchTodos())
  }, [dispatch])

  useEffect(() => {
    setFilteredTodos(filterTodos(todos, filter))
  }, [filter, todos])

  const onChange = (event: React.FormEvent<HTMLInputElement>): void => {
    setFilter(event.currentTarget.value as TodoFilter)
  }

  const handleFilterReset = (
    event: React.FormEvent<HTMLButtonElement>
  ): void => {
    setFilter("none")
  }

  if (status === "loading") {
    return <div>Loading...</div>
  }

  if (status === "error") {
    return <div>Error</div>
  }

  return (
    <div className='todolist-container paper'>
      <AddTodoForm />
      <h1 className='list-header'>Список дел</h1>
      <div className='filter-buttons'>
        <RadioButton
          id='wip-filter'
          name='filter'
          label='В работе'
          value='wip'
          checked={isChecked("wip", filter)}
          onChange={onChange}
        />
        <RadioButton
          id='done-filter'
          name='filter'
          label='Выполненные'
          value='done'
          checked={isChecked("done", filter)}
          onChange={onChange}
        />
        <RadioButton
          id='favourite-filter'
          name='filter'
          label='Избранное'
          value='favourite'
          checked={isChecked("favourite", filter)}
          onChange={onChange}
        />
        <Button
          variant='danger'
          label={<CloseIcon size='sm' />}
          onClick={handleFilterReset}
        />
      </div>
      {todos.length ? (
        <List>
          {filteredTodos.map((el) => {
            return <Todo key={el.id} {...el} />
          })}
        </List>
      ) : (
        <div className='empty-list'>Список пуст</div>
      )}
    </div>
  )
}
