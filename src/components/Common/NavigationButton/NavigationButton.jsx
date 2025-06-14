import { Link } from "react-router-dom"
import s from "./NavigationButton.module.css"

const NavigationButton = ({className, to, title}) => {
  return (
    <Link className={s[className]} to={to}>{title}</Link>
  )
}

export default NavigationButton