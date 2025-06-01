import { useEffect } from 'react'
import AddBookForm from '../AddBookForm/AddBookForm'
import Container from '../Container/Container'
import s from './ActionFormModal.module.css'

const ActionFormModal = () => {
	useEffect(() => {
		document.body.setAttribute('data-scroll', 'no-scroll')
		return () => document.body.setAttribute('data-scroll', 'scroll')
	}, [])

	return (
		<div className={s.modalOverlay}>
			<Container>
				<AddBookForm />
			</Container>
		</div>
	)
}

export default ActionFormModal
