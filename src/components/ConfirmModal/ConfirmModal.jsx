import ActionButton from "../ActionButton/ActionButton"
import s from "./ConfirmModal.module.css"

const ConfirmModal = ({onClick, title, setIsConfirmModalOpen}) => {
  return (
    <div className={s.modalOverlay}>
      <div className={s.modal}>
        <p className={s.title}>{title}</p>
        <div className={s.buttonsWrapper}>
          <ActionButton className="cancelButton" type="button" title="Відміна" onClick={() => setIsConfirmModalOpen(false)}/>
          <ActionButton className="confirmButton" type="button" title="Вийти" onClick={() => {
            onClick();
            setIsConfirmModalOpen(false);
          }}/>
        </div>
      </div>
    </div>
  )
}

export default ConfirmModal