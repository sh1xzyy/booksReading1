import { HiArrowLongLeft } from 'react-icons/hi2'
import ActionButton from '../ActionButton/ActionButton'
import { useMyTrainingFormContext } from '../../contexts/MyTrainingFormContext'
import { Form, Formik } from 'formik'
import s from './MyTrainingForm.module.css'
import CustomDatePicker from '../CustomDatePicker/CustomDatePicker'
import { useState } from 'react'
import CustomSelector from '../CustomSelector/CustomSelector'
import { useAddBookTrainingPlanForm } from '../../features/trainingForm/useAddBookTrainingPlanForm'

const MyTrainingForm = () => {
	const [hasUserStartDataChange, setHasUserStartDataChange] = useState(false)
	const [hasUserEndDataChange, setHasUserEndDataChange] = useState(false)
	const { setIsMyTrainingFormOpen } = useMyTrainingFormContext()
	const {initialValues, validationSchema, handleSubmit} = useAddBookTrainingPlanForm()
	

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
			<Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
				<Form className={s.form}>
					<div className={s.fields}>
						<div className={s.fieldWrapper}>
							<CustomDatePicker
								hasUserDataChange={hasUserStartDataChange}
								setHasUserDataChange={setHasUserStartDataChange}
								name="startDate"
								placeholder="Початок"
								/>
							<svg className={s.calendar} width={17} height={17}>
								<use href='/icons/icons.svg#icon-calendar'></use>
							</svg>
						</div>
						<div className={s.fieldWrapper}>
							<CustomDatePicker
								hasUserDataChange={hasUserEndDataChange}
								setHasUserDataChange={setHasUserEndDataChange}
								name="endDate"
								placeholder="Завершення"
							/>
							<svg className={s.calendar} width={17} height={17}>
								<use href='/icons/icons.svg#icon-calendar'></use>
							</svg>
						</div>
						<div className={s.fieldWrapper}>
							<CustomSelector name="books" placeholder={"Обрати книги з бібліотеки"}/>
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
