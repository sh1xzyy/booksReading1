import { selectIsLoading } from '../../redux/auth/selectors'
import { selectUserData } from '../../redux/auth/selectors'
import { useSelector } from 'react-redux'
import { GoPlus } from 'react-icons/go'
import { useState } from 'react'
import {
	selectCurrentlyReadingBooksSorted,
	selectFinishedReadingBooksSorted,
	selectGoingToReadBooksSorted,
} from '../../redux/book/selectors'
import BookFeedbackModal from '../../components/Modal/BookFeedbackModal/BookFeedbackModal'
import ActionFormModal from '../../components/Modal/ActionFormModal/ActionFormModal'
import { useBookFormVisibility } from '../../contexts/BookFormVisibilityContext'
import ActionButton from '../../components/Common/ActionButton/ActionButton'
import AddBookForm from '../../components/Form/AddBookForm/AddBookForm'
import Container from '../../components/Common/Container/Container'
import { useWindowWidth } from '../../contexts/WindowWidthContext'
import BookList from '../../components/Book/BookList/BookList'
import Section from '../../components/Common/Section/Section'
import Loader from '../../components/Common/Loader/Loader'
import s from './LibraryPage.module.css'
import WelcomeGuide from '../../components/Guide/Welcome/WelcomeGuide/WelcomeGuide'
import { useBookFeedbackModalContext } from '../../contexts/BookFeedbackModalContext'

const LibraryPage = () => {
	const { isBookFormOpen, setIsBookFormOpen } = useBookFormVisibility()
	const currentlyReading = useSelector(selectCurrentlyReadingBooksSorted)
	const finishedReading = useSelector(selectFinishedReadingBooksSorted)
	const goingToRead = useSelector(selectGoingToReadBooksSorted)
	const { isBookFeedbackModalOpen, setIsBookFeedbackModalOpen } =
		useBookFeedbackModalContext()
	const [closeGuide, setCloseGuide] = useState(true)
	const isLoading = useSelector(selectIsLoading)
	const [modalData, setModalData] = useState({})
	const userData = useSelector(selectUserData)
	const { windowWidth } = useWindowWidth()
	const isListEmpty =
		goingToRead.length === 0 &&
		currentlyReading.length === 0 &&
		finishedReading.length === 0

	if (isLoading || !userData) {
		return <Loader />
	}

	return (
		<>
			{isBookFeedbackModalOpen && <BookFeedbackModal modalData={modalData} />}

			{isListEmpty && closeGuide && (
				<WelcomeGuide setCloseGuide={setCloseGuide} />
			)}
			<div className={s.libraryPageWrapper}>
				{windowWidth < 768 ? (
					isListEmpty || isBookFormOpen ? (
						<ActionFormModal type='addBookForm' />
					) : null
				) : (
					<Section className='formSection'>
						<Container className='container'>
							<AddBookForm />
						</Container>
					</Section>
				)}

				<div className={s.bookListWrapper}>
					{finishedReading.length > 0 && (
						<Section>
							<Container className='container'>
								<BookList
									sectionTitle='Прочитано'
									handleResumeClick={book => {
										setIsBookFeedbackModalOpen(true)
										setModalData(book)
									}}
									items={finishedReading}
									status='finished'
								/>
							</Container>
						</Section>
					)}

					{currentlyReading.length > 0 && (
						<Section>
							<Container className='container'>
								<BookList
									sectionTitle='Читаю'
									items={currentlyReading}
									status='reading'
								/>
							</Container>
						</Section>
					)}

					{goingToRead.length > 0 && (
						<Section>
							<Container className='container'>
								<BookList
									sectionTitle='Маю намір прочитати'
									items={goingToRead}
									status='goingToReading'
								/>
							</Container>
						</Section>
					)}
				</div>

				{!isListEmpty && (
					<ActionButton
						className='myTrainingButton'
						type='button'
						title='Моє тренування'
						onClick={() => console.log('My Training Clicked')}
					/>
				)}
			</div>

			{windowWidth < 768 && !isBookFormOpen && !isListEmpty && (
				<ActionButton
					className='openFormButton'
					type='button'
					onClick={() => setIsBookFormOpen(true)}
				>
					<GoPlus color='#fff' size={24} />
				</ActionButton>
			)}
		</>
	)
}

export default LibraryPage
