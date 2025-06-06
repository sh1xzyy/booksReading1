import clsx from 'clsx'
import s from './BaseModal.module.css'
import { handleOverlayClick } from '../../utils/modal/handleOverlayClick'

const BaseModal = ({ children, className, isModalOpen }) => {
	return (
		<div
			className={s.overlay}
			onClick={e => handleOverlayClick(e, isModalOpen)}
		>
			<div className={clsx(s.modal, className && s[className])}>{children}</div>
		</div>
	)
}

export default BaseModal
