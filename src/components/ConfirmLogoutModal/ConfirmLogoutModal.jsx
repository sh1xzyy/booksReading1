import ActionButton from '../ActionButton/ActionButton'
import BaseModal from '../BaseModal/BaseModal'
import s from './ConfirmLogoutModal.module.css'

const ConfirmLogoutModal = ({ onClick, title, isModalOpen }) => {
	return (
		<BaseModal className='confirmLogoutModal' isModalOpen={isModalOpen}>
			<p className={s.title}>{title}</p>
			<div className={s.buttonsWrapper}>
				<ActionButton
					className='cancelButton'
					type='button'
					title='Відміна'
					onClick={() => isModalOpen(false)}
				/>
				<ActionButton
					className='confirmButton'
					type='button'
					title='Вийти'
					onClick={() => {
						onClick()
						isModalOpen(false)
					}}
				/>
			</div>
		</BaseModal>
	)
}

export default ConfirmLogoutModal
