import { useEffect } from 'react'
import { handleOverlayClick } from '../../../utils/modal/handleOverlayClick'
import s from './BaseModal.module.css'
import clsx from 'clsx'

const BaseModal = ({ children, className, isModalOpen }) => {
	useEffect(() => {
		const onKeydownClick = event => event.key === 'Escape' && isModalOpen(false)

		addEventListener('keydown', onKeydownClick)
		return () => removeEventListener('keydown', onKeydownClick)
	}, [isModalOpen])

	return (
		<div
			className={s.modalOverlay}
			onClick={e => handleOverlayClick(e, isModalOpen)}
		>
			<div className={clsx(s.modal, className && s[className])}>{children}</div>
		</div>
	)
}

export default BaseModal
