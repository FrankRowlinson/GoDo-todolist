import { IIconProps } from "."
import { ReactComponent as Icon } from "./svg/plus.svg"
import "./icons.css"

export function PlusIcon({ size = "md" }: IIconProps) {
  return (
    <div className={`icon-container ${size}`}>
      <Icon className='icon' />
    </div>
  )
}
