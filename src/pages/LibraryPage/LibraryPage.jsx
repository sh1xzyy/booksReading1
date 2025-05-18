import { useSelector } from 'react-redux'
import Container from '../../components/Container/Container'
import { selectIsLoading, selectUserData } from '../../redux/user/selectors'
import BookForm from '../../components/BookForm/BookForm'
import Section from '../../components/Section/Section'
import Loader from '../../components/Loader/Loader'
import BookList from '../../components/BookList/BookList'

const LibraryPage = () => {
	const { goingToRead, currentlyReading, finishedReading } =
		useSelector(selectUserData)
	const isLoading = useSelector(selectIsLoading)

	return (
		<>
			{isLoading && <Loader />}
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
