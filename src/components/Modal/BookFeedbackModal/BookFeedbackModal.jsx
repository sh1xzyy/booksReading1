import { useBookFeedbackModalContext } from '../../../contexts/BookFeedbackModalContext'
import AddBookFeedBackForm from '../../Form/AddBookFeedbackForm/AddBookFeedbackForm'
import BaseModal from '../BaseModal/BaseModal'
import s from './BookFeedbackModal.module.css'

const BookFeedbackModal = ({ modalData }) => {
	const { setIsBookFeedbackModalOpen } = useBookFeedbackModalContext()

	return (
		<BaseModal
			className='bookFeedbackModal'
			isModalOpen={setIsBookFeedbackModalOpen}
		>
			<h3 className={s.chooseRating}>Обрати рейтинг книги</h3>
			<AddBookFeedBackForm
				isModalOpen={setIsBookFeedbackModalOpen}
				modalData={modalData}
			/>
		</BaseModal>
	)
}

export default BookFeedbackModal
