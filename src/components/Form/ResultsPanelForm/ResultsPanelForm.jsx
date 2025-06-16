import { Form, Formik } from 'formik'
import { useState } from 'react'
import * as Yup from 'yup'
import CustomDatePicker from '../../Custom/DatePicker/CustomDatePicker/CustomDatePicker'
import ActionButton from '../../Common/ActionButton/ActionButton'
import FormField from '../FormField/FormField'
import s from './ResultsPanelForm.module.css'
import ErrorMsg from '../ErrorMsg/ErrorMsg'
import { useAddStatisticToLocaleStorage } from '../../../contexts/AddStatisticToLocaleStorageContext'

const initialValues = {
	statDate: '',
	statPages: '',
}

const ResultsPanelForm = () => {
	const [hasUserStartDataChange, setHasUserStartDataChange] = useState(false)
	const { onSubmit } = useAddStatisticToLocaleStorage()

	const handleSubmit = async (value, { resetForm }) => {
		onSubmit(value)
		resetForm()
	}

	const validationSchema = Yup.object().shape({
		statDate: Yup.string().required('Оберіть дату'),
		statPages: Yup.number().max(5000, 'Максимум 5000').required(`Обов'язково`),
	})

	return (
		<Formik
			initialValues={initialValues}
			onSubmit={handleSubmit}
			validationSchema={validationSchema}
		>
			<Form className={s.form}>
				<div className={s.fields}>
					<label>
						<span className={s.label}>Дата</span>
						<div className={s.fieldWrapper}>
							<CustomDatePicker
								hasUserDataChange={hasUserStartDataChange}
								setHasUserDataChange={setHasUserStartDataChange}
								name='statDate'
								className='resultsDatePicker'
								placeholder='Date'
							/>
							<ErrorMsg name='statDate' />
						</div>
					</label>
					<FormField
						name='statPages'
						type='number'
						placeholder='0'
						classField='resultsField'
						classLabel='resultsPanelLabel'
						labelTitle='Кількість сторінок'
					/>
				</div>
				<ActionButton
					className='addResultButton'
					type='submit'
					title='Додати результат'
				/>
			</Form>
		</Formik>
	)
}

export default ResultsPanelForm
