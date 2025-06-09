import { useEffect } from 'react'
import AddBookForm from '../AddBookForm/AddBookForm'
import Container from '../Container/Container'
import s from './ActionFormModal.module.css'
import MyTrainingForm from '../MyTrainingForm/MyTrainingForm'

const ActionFormModal = ({ type }) => {
	useEffect(() => {
		document.body.setAttribute('data-scroll', 'no-scroll')
		return () => document.body.setAttribute('data-scroll', 'scroll')
	}, [])

	return (
		<div className={s.modalOverlay}>
			<Container className="container">
				{type === 'addBookForm' ? <AddBookForm /> : <MyTrainingForm />}
			</Container>
		</div>
	)
}

export default ActionFormModal
