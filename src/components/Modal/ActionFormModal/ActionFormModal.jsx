import { useEffect } from 'react'
import MyTrainingForm from '../../Form/MyTrainingForm/MyTrainingForm'
import AddBookForm from '../../Form/AddBookForm/AddBookForm'
import Container from '../../Common/Container/Container'
import s from './ActionFormModal.module.css'

const ActionFormModal = ({ type }) => {
	useEffect(() => {
		document.body.setAttribute('data-scroll', 'no-scroll')
		return () => document.body.setAttribute('data-scroll', 'scroll')
	}, [])

	return (
		<div className={s.modalOverlay}>
			<Container className='container'>
				{type === 'addBookForm' ? <AddBookForm /> : <MyTrainingForm />}
			</Container>
		</div>
	)
}

export default ActionFormModal
