import { HiArrowLongLeft } from 'react-icons/hi2'
import ActionButton from '../ActionButton/ActionButton'
import { useMyTrainingFormContext } from '../../contexts/MyTrainingFormContext'
import { Form, Formik } from 'formik'
import s from './MyTrainingForm.module.css'
import CustomDatePicker from '../CustomDatePicker/CustomDatePicker'
import { useState } from 'react'

const MyTrainingForm = () => {
	const [isStartDateSelected, setIsStartDateSelected] = useState(false)
	const [isSLastDateSelected, setIsLastDateSelected] = useState(false)

	const { setIsMyTrainingFormOpen } = useMyTrainingFormContext()
	return (
		<>
			<Formik>
				<Form>
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
					<div className={s.fields}>
						<CustomDatePicker
							selectedDate={isStartDateSelected}
							handleDateChange={setIsStartDateSelected}
						/>
						<CustomDatePicker
							selectedDate={isSLastDateSelected}
							handleDateChange={setIsLastDateSelected}
						/>
					</div>
				</Form>
			</Formik>
		</>
	)
}

export default MyTrainingForm
