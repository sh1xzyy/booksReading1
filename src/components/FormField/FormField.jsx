import { ErrorMessage, Field } from 'formik'
import s from './FormField.module.css'
import { nanoid } from '@reduxjs/toolkit'

const FormField = ({
	labelTitle,
	type,
	name,
	placeholder,
	classLabel,
	classField,
	classError = 'error',
	isSup = false,
}) => {
	const fieldId = nanoid()
	return (
		<>
			<div className={s.fieldWrapper}>
				<label className={s[classLabel]} htmlFor={fieldId}>
					{labelTitle}
					{isSup && <sup>*</sup>}
				</label>
				<Field
					className={s[classField]}
					type={type}
					name={name}
					id={fieldId}
					placeholder={placeholder}
				/>
				<ErrorMessage
					className={s[classError]}
					name={name}
					component={'span'}
				/>
			</div>
		</>
	)
}

export default FormField
