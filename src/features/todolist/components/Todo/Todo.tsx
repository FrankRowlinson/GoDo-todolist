import { MenuIcon, StarIcon } from "../../../icons"
import { Button } from "../"
import "./Todo.css"

interface ITodoProps extends ITodo {}

export function Todo({ id, name, status, favourite, createdAt }: ITodoProps) {
  return (
    <div className={`single-todo ${status === "done" && "done"}`}>
      <div className='todo-info'>
        {name}
        <span className='wip'>{status === "wip" && "[В работе]"}</span>
        {favourite && <Button label={<StarIcon size='sm' />} variant='icon' />}
      </div>
      <div className='menu'>
        <Button label={<MenuIcon size='md' />} variant='icon' />
      </div>
    </div>
  )
}
