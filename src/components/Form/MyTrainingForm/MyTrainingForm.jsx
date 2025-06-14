import { HiArrowLongLeft } from 'react-icons/hi2'
import { Form, Formik } from 'formik'
import { useState } from 'react'
import { useAddBookTrainingPlanForm } from '../../../features/planning/planningAddForm/useAddBookTrainingPlanForm'
import CustomDatePicker from '../../Custom/DatePicker/CustomDatePicker/CustomDatePicker'
import { useMyTrainingFormContext } from '../../../contexts/MyTrainingFormContext'
import CustomSelector from '../../Custom/Selector/CustomSelector/CustomSelector'
import ActionButton from '../../Common/ActionButton/ActionButton'
import ErrorMsg from '../ErrorMsg/ErrorMsg'
import s from './MyTrainingForm.module.css'

const MyTrainingForm = () => {
	const [hasUserStartDataChange, setHasUserStartDataChange] = useState(false)
	const [hasUserEndDataChange, setHasUserEndDataChange] = useState(false)
	const { setIsMyTrainingFormOpen } = useMyTrainingFormContext()
	const { initialValues, validationSchema, handleSubmit } =
		useAddBookTrainingPlanForm()

	return (
		<>
			<ActionButton
				className='goBackButton'
				type='button'
				onClick={() => {
					setIsMyTrainingFormOpen(false)
				}}
			>
				<HiArrowLongLeft color='#ff6b08' size={24} />
			</ActionButton>
			<div className={s.trainingHeader}>
				<h3 className={s.title}>Моє тренування</h3>
			</div>
			<Formik
				initialValues={initialValues}
				onSubmit={handleSubmit}
				validationSchema={validationSchema}
			>
				<Form className={s.form}>
					<div className={s.fields}>
						<div className={s.fieldWrapper}>
							<CustomDatePicker
								className='trainingDatePicker'
								hasUserDataChange={hasUserStartDataChange}
								setHasUserDataChange={setHasUserStartDataChange}
								name='startDate'
								placeholder='Початок'
							/>
							<ErrorMsg name='startDate' />
						</div>
						<div className={s.fieldWrapper}>
							<CustomDatePicker
								className='trainingDatePicker'
								hasUserDataChange={hasUserEndDataChange}
								setHasUserDataChange={setHasUserEndDataChange}
								name='endDate'
								placeholder='Завершення'
							/>
							<ErrorMsg name='endDate' />
						</div>
						<div className={s.fieldWrapper}>
							<CustomSelector
								name='books'
								placeholder={'Обрати книги з бібліотеки'}
							/>
							<ErrorMsg name='books' />
						</div>
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

export default MyTrainingForm
