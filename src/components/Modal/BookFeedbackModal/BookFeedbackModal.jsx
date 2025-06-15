import AddBookFeedBackForm from '../../Form/AddBookFeedbackForm/AddBookFeedbackForm'
import s from './BookFeedbackModal.module.css'

const BookFeedbackModal = ({ isModalOpen, modalData }) => {
	return (
		<BaseModal className='bookFeedback'>
			<h3 className={s.chooseRating}>Обрати рейтинг книги</h3>
			<AddBookFeedBackForm isModalOpen={isModalOpen} modalData={modalData} />
		</BaseModal>
	)
}

export default BookFeedbackModal
