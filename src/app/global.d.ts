interface ITodo {
  id: string
  name: string
  createdAt: Date
  favourite: boolean
  status: "wip" | "done"
}

interface IInputProps {
  id: string
  name: string
  label?: string | React.ReactNode
  value?: string
  onChange?: (event: React.FormEvent<HTMLInputElement>) => void
  placeholder?: string
  ref?: React.Ref
}
