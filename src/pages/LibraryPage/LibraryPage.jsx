import { selectIsLoading } from '../../redux/auth/selectors'
import { selectUserData } from '../../redux/auth/selectors'
import { useSelector } from 'react-redux'
import { GoPlus } from 'react-icons/go'
import { useBookFormVisibility } from '../../contexts/BookFormVisibilityContext'
import {
	selectCurrentlyReadingBooksSorted,
	selectFinishedReadingBooksSorted,
	selectGoingToReadBooksSorted,
} from '../../redux/book/selectors'
import { useState } from 'react'
import BookFeedbackModal from '../../components/Modal/BookFeedbackModal/BookFeedbackModal'
import ActionFormModal from '../../components/Modal/ActionFormModal/ActionFormModal'
import ActionButton from '../../components/Common/ActionButton/ActionButton'
import WelcomeGuide from '../../components/Guide/WelcomeGuide/WelcomeGuide'
import AddBookForm from '../../components/Form/AddBookForm/AddBookForm'
import Container from '../../components/Common/Container/Container'
import { useWindowWidth } from '../../contexts/WindowWidthContext'
import BookList from '../../components/Book/BookList/BookList'
import Section from '../../components/Common/Section/Section'
import Loader from '../../components/Common/Loader/Loader'

const LibraryPage = () => {
	const { isBookFormOpen, setIsBookFormOpen } = useBookFormVisibility()
	const currentlyReading = useSelector(selectCurrentlyReadingBooksSorted)
	const finishedReading = useSelector(selectFinishedReadingBooksSorted)
	const goingToRead = useSelector(selectGoingToReadBooksSorted)
	const [isModalOpen, setIsModalOpen] = useState(false)
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
			{isModalOpen && (
				<BookFeedbackModal isModalOpen={setIsModalOpen} modalData={modalData} />
			)}

			{isListEmpty && closeGuide && (
				<WelcomeGuide setCloseGuide={setCloseGuide} />
			)}

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

			<Section className='bookListSection'>
				{finishedReading.length > 0 && (
					<Section>
						<Container className='container'>
							<BookList
								sectionTitle='Прочитано'
								handleResumeClick={book => {
									setIsModalOpen(true)
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
				{!isListEmpty && (
					<ActionButton
						className='myTrainingButton'
						type='button'
						title='Моє тренування'
						onClick={() => console.log('My Training Clicked')}
					/>
				)}
			</Section>

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
