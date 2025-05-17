import { HiArrowLongLeft } from 'react-icons/hi2'
import { useDispatch } from 'react-redux'
import { Form, Formik } from 'formik'
import toast from 'react-hot-toast'
import { validationSchema } from '../../utils/bookForm/validationSchema'
import { addBookThunk } from '../../redux/book/operations'
import FormField from '../FormField/FormField'
import s from './BookForm.module.css'

const BookForm = () => {
	const dispatch = useDispatch()
	const initialValues = {
		title: '',
		author: '',
		publishYear: '',
		pagesTotal: '',
	}

	const handleSubmit = async (values, actions) => {
		try {
			await dispatch(addBookThunk(values)).unwrap()
			toast.success('You have successfully added a book')
		} catch (error) {
			toast.error('Something went wrong')
		} finally {
			actions.resetForm()
		}
	}

	return (
		<Formik
			initialValues={initialValues}
			onSubmit={handleSubmit}
			validationSchema={validationSchema}
		>
			<Form className={s.form}>
				<button className={s.goBackBtn} type='button'>
					<HiArrowLongLeft color=' #ff6b08' size={24} />
				</button>
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
				<button className={s.submitBtn} type='submit'>
					Додати
				</button>
			</Form>
		</Formik>
	)
}

export default BookForm
