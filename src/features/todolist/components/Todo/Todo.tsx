import { ITodo } from "../../todoSlice"
import "./Todo.css"

interface ITodoProps extends ITodo {}

export function Todo({ id, name, status, favourite, createdAt }: ITodoProps) {
  return <div className={`single-todo ${status}`}>{name}</div>
}
