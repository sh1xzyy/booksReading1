import { Form, Formik } from 'formik'
import { useState } from 'react'
import CustomDatePicker from '../../Custom/DatePicker/CustomDatePicker/CustomDatePicker'
import ActionButton from '../../Common/ActionButton/ActionButton'
import FormField from '../FormField/FormField'
import s from './ResultsPanelForm.module.css'

const initialValues = {
	date: '',
	pages: '',
}

const ResultsPanelForm = () => {
	const [hasUserStartDataChange, setHasUserStartDataChange] = useState(false)

	const handleSubmit = async value => {
		try {
			console.log('Hola Amigo', value)
		} catch (error) {
			console.log('something went wrong')
		}
	}

	return (
		<Formik initialValues={initialValues} onSubmit={handleSubmit}>
			<Form className={s.form}>
				<div className={s.fields}>
					<label>
						<span className={s.label}>Дата</span>
						<div className={s.fieldWrapper}>
							<CustomDatePicker
								hasUserDataChange={hasUserStartDataChange}
								setHasUserDataChange={setHasUserStartDataChange}
								name='date'
								className='resultsDatePicker'
								placeholder='Date'
							/>
						</div>
					</label>
					<FormField
						name='pages'
						type='number'
						classField='resultsField'
						classLabel='resultsPanelLabel'
						isErrorMessage={false}
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
