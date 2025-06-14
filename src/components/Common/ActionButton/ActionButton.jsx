import s from './ActionButton.module.css'

const ActionButton = ({className, type, title, children, onClick}) => {
  return (
    <button className={s[className]} type={type} onClick={onClick}>{title}{children}</button>
  )
}

export default ActionButton