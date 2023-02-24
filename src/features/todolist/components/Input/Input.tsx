import "./Input.css"

export function Input({
  id,
  name,
  label,
  onChange,
  value,
  placeholder,
}: IInputProps) {
  return (
    <div className='input-container'>
      <input
        id={id}
        name={name}
        type='text'
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        autoComplete='off'
      />
      {label && <label htmlFor={id}>{label}</label>}
    </div>
  )
}
