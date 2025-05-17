import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import Container from '../../components/Container/Container'
import { selectIsLoading } from '../../redux/user/selectors'
import { userDataThunk } from '../../redux/user/operations'
import BookForm from '../../components/BookForm/BookForm'
import Section from '../../components/Section/Section'
import Loader from '../../components/Loader/Loader'

const LibraryPage = () => {
	const dispatch = useDispatch()
	const isLoading = useSelector(selectIsLoading)

	useEffect(() => {
		const fetchData = async () => {
			await dispatch(userDataThunk()).unwrap()
		}
		fetchData()
	}, [dispatch])

	return (
		<>
			{isLoading && <Loader />}
			<Section className='formSection'>
				<Container>
					<BookForm />
				</Container>
			</Section>
		</>
	)
}

export default LibraryPage
