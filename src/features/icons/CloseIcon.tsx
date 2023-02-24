import { IIconProps } from "."
import { ReactComponent as Icon } from "./svg/close.svg"
import "./icons.css"

export function CloseIcon({ size }: IIconProps) {
  return (
    <div className={`icon-container ${size}`}>
      <Icon className='icon' />
    </div>
  )
}
