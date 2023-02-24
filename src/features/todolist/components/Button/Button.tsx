import "./Button.css"

interface IButtonProps extends Pick<IInputProps, "label"> {
  variant: "primary" | "danger" | "success"
}

export function Button({ label, variant }: IButtonProps) {
  return <button className={`btn ${variant}`}>{label}</button>
}
