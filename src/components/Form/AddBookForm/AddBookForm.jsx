import { HiArrowLongLeft } from 'react-icons/hi2'
import { useSelector } from 'react-redux'
import { Form, Formik } from 'formik'
import { useAddBookForm } from '../../../features/books/addBookForm/useAddBookForm'
import { useBookFormVisibility } from '../../../contexts/BookFormVisibilityContext'
import ActionButton from '../../Common/ActionButton/ActionButton'
import { selectIsLoading } from '../../../redux/book/selectors'
import FormField from '../FormField/FormField'
import Loader from '../../Common/Loader/Loader'
import s from './AddBookForm.module.css'

const AddBookForm = () => {
	const { initialValues, validationSchema, handleSubmit } = useAddBookForm()
	const { setIsBookFormOpen } = useBookFormVisibility()
	const isLoading = useSelector(selectIsLoading)

	return (
		<>
			{isLoading && <Loader />}
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
							customFieldWrapper='libraryFieldWrapper'
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
					<ActionButton
						className='addBookButton'
						type='submit'
						title='Додати'
					/>
				</Form>
			</Formik>
		</>
	)
}

export default AddBookForm
