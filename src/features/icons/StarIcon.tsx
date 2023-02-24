import { IIconProps } from "."
import { ReactComponent as Icon } from "./svg/star.svg"
import "./icons.css"

export function StarIcon({ size = "md" }: IIconProps) {
  return (
    <div className={`icon-container star ${size}`}>
      <Icon className='icon' />
    </div>
  )
}
