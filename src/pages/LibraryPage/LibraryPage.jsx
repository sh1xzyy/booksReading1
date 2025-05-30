import { selectIsLoading } from '../../redux/auth/selectors'
import { selectUserData } from '../../redux/auth/selectors'
import { useSelector } from 'react-redux'
import BookReviewModal from '../../components/BookReviewModal/BookReviewModal'
import WelcomeGuide from '../../components/WelcomeGuide/WelcomeGuide'
import Container from '../../components/Container/Container'
import BookForm from '../../components/BookForm/BookForm'
import BookList from '../../components/BookList/BookList'
import Section from '../../components/Section/Section'
import Loader from '../../components/Loader/Loader'
import { useState } from 'react'
import {
	selectCurrentlyReadingBooksSorted,
	selectFinishedReadingBooksSorted,
	selectGoingToReadBooksSorted,
} from '../../redux/book/selectors'
import OpenFormButton from '../../components/OpenFormButton/OpenFormButton'

const LibraryPage = () => {
	const userData = useSelector(selectUserData)
	const isLoading = useSelector(selectIsLoading)
	const [closeGuide, setCloseGuide] = useState(true)
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [modalData, setModalData] = useState({})
	const goingToRead = useSelector(selectGoingToReadBooksSorted)
	const currentlyReading = useSelector(selectCurrentlyReadingBooksSorted)
	const finishedReading = useSelector(selectFinishedReadingBooksSorted)

	if (isLoading || !userData) {
		return <Loader />
	}

	const handleResumeClick = book => {
		setIsModalOpen(true)
		setModalData(book)
	}

	return (
		<>
			{isModalOpen && (
				<BookReviewModal
					setIsModalOpen={setIsModalOpen}
					modalData={modalData}
				/>
			)}

			{goingToRead.length === 0 &&
			currentlyReading.length === 0 &&
			finishedReading.length === 0 &&
			closeGuide ? (
				<WelcomeGuide setCloseGuide={setCloseGuide} />
			) : null}

			<Section className='formSection'>
				<Container>
					<BookForm />
				</Container>
			</Section>

			{finishedReading.length > 0 && (
				<Section className='bookSection'>
					<Container>
						<BookList
							sectionTitle='Прочитано'
							handleResumeClick={handleResumeClick}
							items={finishedReading}
							status='finished'
						/>
					</Container>
				</Section>
			)}

			{currentlyReading.length > 0 && (
				<Section className='bookSection'>
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
				<Section className='bookSection'>
					<Container>
						<BookList
							sectionTitle='Маю намір прочитати'
							items={goingToRead}
							status='goingToReading'
						/>
					</Container>
				</Section>
			)}

			<OpenFormButton />
		</>
	)
}

export default LibraryPage
