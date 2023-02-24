import { MenuIcon, StarIcon } from "../../../icons"
import "./Todo.css"

interface ITodoProps extends ITodo {}

export function Todo({ id, name, status, favourite, createdAt }: ITodoProps) {
  return (
    <div className={`single-todo ${status === "done" && "done"}`}>
      <div className='todo-info'>
        {name}
        <span className='wip'>{status === "wip" && "[В работе]"}</span>
        {favourite && <StarIcon size='sm' />}
      </div>
      <div className='menu'>
        <MenuIcon size='md' />
      </div>
    </div>
  )
}
