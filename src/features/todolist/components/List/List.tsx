interface IListProps {
  children: React.ReactNode
}

export function List({ children }: IListProps) {
  return <div>{children}</div>
}
