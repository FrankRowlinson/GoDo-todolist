import { useState } from "react"
import { Button, Modal } from "../"
import { MenuIcon } from "../../../icons"
import "./TodoMenu.css"
import moment from "moment"
import { useAppDispatch } from "../../../../app/hooks"
import { deleteTodo, updateTodo } from "../../todoThunks"

interface ITodoMenuProps extends ITodo {
  editTodoName: () => void
}

export function TodoMenu({ editTodoName, ...todo }: ITodoMenuProps) {
  const dispatch = useAppDispatch()
  const { id, createdAt, status, favourite, name } = todo
  const [isOpen, setIsOpen] = useState(false)
  const onClose = () => setIsOpen(false)
  const onOpen = () => setIsOpen(true)
  const [confirmationModalIsOpen, setConfirmationModalIsOpen] = useState(false)

  const onConfirm = () => {
    dispatch(deleteTodo(id))
    setConfirmationModalIsOpen(false)
    onClose()
  }

  const changeStatus = () => {
    dispatch(updateTodo({ ...todo, status: status === "wip" ? "done" : "wip" }))
    onClose()
  }

  const toggleFavourite = () => {
    dispatch(updateTodo({ ...todo, favourite: !favourite }))
    onClose()
  }

  const edit = () => {
    editTodoName()
    onClose()
  }

  return (
    <div
      className='todo-menu-container'
      onMouseOver={onOpen}
      onMouseOut={onClose}
    >
      <Button label={<MenuIcon size='md' />} variant='icon' />
      {isOpen && (
        <div className='todo-menu'>
          <button className='todo-menu__option' onClick={changeStatus}>
            {status === "wip" ? "Пометить как выполненное" : "Вернуть в работу"}
          </button>
          <button className='todo-menu__option' onClick={toggleFavourite}>
            {favourite ? "Убрать из избранного" : "В избранное"}
          </button>
          <button className='todo-menu__option' onClick={edit}>
            Редактировать
          </button>
          <button
            className='todo-menu__option'
            onClick={() => setConfirmationModalIsOpen(true)}
          >
            Удалить задачу
          </button>
        </div>
      )}
      {confirmationModalIsOpen && (
        <Modal
          onClose={() => setConfirmationModalIsOpen(false)}
          onConfirm={onConfirm}
        >
          <div>
            Вы действительно хотите удалить задачу{" "}
            <span className='todo-name'>"{name}"</span>? <br />
            <span className='todo-date'>
              (добавлена {moment(createdAt).format("DD.MM.YY")})
            </span>
          </div>
        </Modal>
      )}
    </div>
  )
}
