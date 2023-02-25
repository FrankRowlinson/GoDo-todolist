import "./Input.css"
import { useRef } from "react"
import { useEffect } from "react"

export function Input({
  id,
  name,
  label,
  onChange,
  value,
  placeholder,
}: IInputProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    inputRef.current?.focus()
  }, [])
  return (
    <div className='input-container'>
      <input
        ref={inputRef}
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
