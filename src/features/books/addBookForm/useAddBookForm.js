import { useDispatch } from 'react-redux'
import toast from 'react-hot-toast'
import { useBookFormVisibility } from '../../../contexts/BookFormVisibilityContext'
import { addBookThunk } from '../../../redux/book/operations'
import { validationSchema } from './validationSchema'
import { initialValues } from './initialValues'

export const useAddBookForm = () => {
	const { setIsBookFormOpen } = useBookFormVisibility()
	const dispatch = useDispatch()

	const handleSubmit = async (values, { resetForm }) => {
		try {
			await dispatch(addBookThunk(values)).unwrap()
			toast.success('Ви успішно додали книгу!')
			setIsBookFormOpen(false)
		} catch (error) {
			toast.error(error)
		} finally {
			resetForm()
		}
	}

	return { initialValues, validationSchema, handleSubmit }
}
