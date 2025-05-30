import { Rating } from 'react-simple-star-rating'
import { MdOutlineStar } from 'react-icons/md'
import { Field, Form, Formik } from 'formik'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import s from './BookReviewModal.module.css'
import { addBookReviewThunk } from '../../redux/book/operations'
import ActionButton from '../ActionButton/ActionButton'

const BookReviewModal = ({
	setIsModalOpen,
	modalData: { _id, rating, feedback },
}) => {
	const [bookRating, setBookRating] = useState(rating || 0)
	const dispatch = useDispatch()

	const handleSubmit = async ({ feedback }) => {
		try {
			await dispatch(
				addBookReviewThunk({
					_id,
					rating: bookRating,
					feedback,
				})
			).unwrap()
			setIsModalOpen(false)
		} catch (error) {
			console.error(error)
		}
	}

	const handleOverlayClick = e => {
		if (e.target === e.currentTarget) {
			setIsModalOpen(false)
		}
	}

	return (
		<>
			<div className={s.overlay} onClick={handleOverlayClick}>
				<div className={s.modal}>
					<h3 className={s.chooseRating}>Обрати рейтинг книги</h3>
					<Formik onSubmit={handleSubmit} initialValues={{ feedback }}>
						<Form>
							<Rating
								className={s.stars}
								onClick={rate => setBookRating(rate)}
								initialValue={bookRating}
								emptyIcon={<MdOutlineStar className={s.emptyIcon} />}
								fillIcon={<MdOutlineStar className={s.fillIcon} />}
							/>
							<div className={s.textareaWrapper}>
								<label htmlFor='feedback'>Резюме</label>
								<Field
									className={s.textarea}
									as='textarea'
									name='feedback'
									id='feedback'
									placeholder='...'
								/>
							</div>
							<div className={s.buttonsWrapper}>
								<ActionButton
									className="reviewGoBackButton"
									type='button'
									title="Назад"
									onClick={() => setIsModalOpen(false)}
								/>
								<ActionButton className="reviewSaveButton" type='submit' title="Зберегти"/>									Зберегти
							</div>
						</Form>
					</Formik>
				</div>
			</div>
		</>
	)
}

export default BookReviewModal
