import "./RadioButton.css"

export function RadioButton({ id, name, label }: IInputProps) {
  return (
    <>
      <input type='radio' name={name} id={id} />
      {label && <label htmlFor={id}>{label}</label>}
    </>
  )
}
