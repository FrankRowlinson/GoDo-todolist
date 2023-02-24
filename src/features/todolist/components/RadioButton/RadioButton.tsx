import "./RadioButton.css"

interface IRadioButtonProps extends IInputProps {
  checked: boolean
}

export function RadioButton({
  id,
  name,
  label,
  value,
  onChange,
  checked,
}: IRadioButtonProps) {
  return (
    <>
      <input
        type='radio'
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        checked={checked}
      />
      {label && <label htmlFor={id}>{label}</label>}
    </>
  )
}
