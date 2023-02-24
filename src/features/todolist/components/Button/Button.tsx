import "./Button.css"

interface IButtonProps extends Pick<IInputProps, "label"> {
  variant: "primary" | "danger" | "success"
  onClick?: (event: React.FormEvent<HTMLButtonElement>) => void
}

export function Button({ label, variant, onClick }: IButtonProps) {
  return (
    <button className={`btn ${variant}`} onClick={onClick}>
      {label}
    </button>
  )
}
