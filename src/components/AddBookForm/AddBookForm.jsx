import { HiArrowLongLeft } from 'react-icons/hi2'
import { useDispatch } from 'react-redux'
import { Form, Formik } from 'formik'
import toast from 'react-hot-toast'
import { useBookFormVisibility } from '../../contexts/BookFormVisibilityContext'
import { validationSchema } from '../../utils/bookForm/validationSchema'
import { addBookThunk } from '../../redux/book/operations'
import ActionButton from '../ActionButton/ActionButton'
import FormField from '../FormField/FormField'
import s from './AddBookForm.module.css'

const AddBookForm = () => {
	const { setIsBookFormOpen } = useBookFormVisibility()
	const dispatch = useDispatch()
	const initialValues = {
		title: '',
		author: '',
		publishYear: '',
		pagesTotal: '',
	}

	const handleSubmit = async (values, { resetForm }) => {
		try {
			await dispatch(addBookThunk(values)).unwrap()
			toast.success('You have successfully added a book')
			setIsBookFormOpen(false)
		} catch (error) {
			toast.error(error)
		} finally {
			resetForm()
		}
	}

	return (
		<Formik
			initialValues={initialValues}
			onSubmit={handleSubmit}
			validationSchema={validationSchema}
		>
			<Form className={s.form}>
				<ActionButton
					className='goBackButton'
					type='button'
					onClick={() => {
						setIsBookFormOpen(false)
					}}
				>
					<HiArrowLongLeft color='#ff6b08' size={24} />
				</ActionButton>
				<div className={s.fields}>
					<FormField
						classField='libraryField'
						classLabel='libraryLabel'
						name='title'
						type='text'
						labelTitle='Назва книги'
						placeholder='...'
					/>
					<FormField
						classField='libraryField'
						classLabel='libraryLabel'
						name='author'
						type='text'
						labelTitle='Автор книги'
						placeholder='...'
					/>
					<FormField
						classField='libraryField'
						classLabel='libraryLabel'
						name='publishYear'
						type='number'
						labelTitle='Рік випуску'
						placeholder='...'
					/>
					<FormField
						classField='libraryField'
						classLabel='libraryLabel'
						name='pagesTotal'
						type='number'
						labelTitle='Кількість сторінок'
						placeholder='...'
					/>
				</div>
				<ActionButton className='addBookButton' type='submit' title='Додати' />
			</Form>
		</Formik>
	)
}

export default AddBookForm
