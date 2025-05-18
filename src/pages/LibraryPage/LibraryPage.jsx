import { selectIsLoading } from '../../redux/auth/selectors'
import { selectUserData } from '../../redux/auth/selectors'
import { useSelector } from 'react-redux'
import WelcomeGuide from '../../components/WelcomeGuide/WelcomeGuide'
import Container from '../../components/Container/Container'
import BookForm from '../../components/BookForm/BookForm'
import BookList from '../../components/BookList/BookList'
import Section from '../../components/Section/Section'
import Loader from '../../components/Loader/Loader'

const LibraryPage = () => {
	const userData = useSelector(selectUserData)
	const isLoading = useSelector(selectIsLoading)
	const { goingToRead, currentlyReading, finishedReading } = userData

	if (isLoading || !userData) {
		return <Loader />
	}

	return (
		<>
			{goingToRead.length === 0 &&
			currentlyReading.length === 0 &&
			finishedReading.length === 0 ? (
				<WelcomeGuide />
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
		</>
	)
}

export default LibraryPage
