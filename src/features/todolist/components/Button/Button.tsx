import "./Button.css"

interface IButtonProps extends Pick<IInputProps, "label"> {
  variant: "primary" | "danger" | "success" | "icon"
  onClick?: (event: React.FormEvent<HTMLButtonElement>) => void
  disabled?: boolean
}

export function Button({ label, variant, onClick, disabled }: IButtonProps) {
  return (
    <button
      className={`${variant === "icon" ? "btn-icon" : "btn3D"} ${variant}`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  )
}
