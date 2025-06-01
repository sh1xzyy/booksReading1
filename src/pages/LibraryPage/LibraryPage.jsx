import { selectIsLoading } from '../../redux/auth/selectors'
import { selectUserData } from '../../redux/auth/selectors'
import { useSelector } from 'react-redux'
import { GoPlus } from 'react-icons/go'
import { useBookFormVisibility } from '../../contexts/BookFormVisibilityContext'
import BookReviewModal from '../../components/BookReviewModal/BookReviewModal'
import ActionButton from '../../components/ActionButton/ActionButton'
import WelcomeGuide from '../../components/WelcomeGuide/WelcomeGuide'
import { useWindowWidth } from '../../contexts/WindowWidthContext'
import AddBookForm from '../../components/AddBookForm/AddBookForm'
import Container from '../../components/Container/Container'
import BookList from '../../components/BookList/BookList'
import Section from '../../components/Section/Section'
import Loader from '../../components/Loader/Loader'
import { useState } from 'react'
import {
	selectCurrentlyReadingBooksSorted,
	selectFinishedReadingBooksSorted,
	selectGoingToReadBooksSorted,
} from '../../redux/book/selectors'
import ActionFormModal from '../../components/ActionFormModal/ActionFormModal'

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
				<BookReviewModal
					setIsModalOpen={setIsModalOpen}
					modalData={modalData}
				/>
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
					<Container>
						<AddBookForm />
					</Container>
				</Section>
			)}

			<Section className='bookListSection'>
				{finishedReading.length > 0 && (
					<Section>
						<Container>
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
						<Container>
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
						<Container>
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
						onClick={console.log('My Training Clicked')}
					/>
				)}
			</Section>

			{windowWidth < 768 && !isBookFormOpen && (
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
