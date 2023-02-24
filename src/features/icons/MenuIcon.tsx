import { IIconProps } from "."
import { ReactComponent as Icon } from "./svg/menu.svg"
import "./icons.css"

export function MenuIcon({ size }: IIconProps) {
  return (
    <div className={`icon-container ${size}`}>
      <Icon className='icon' />
    </div>
  )
}
