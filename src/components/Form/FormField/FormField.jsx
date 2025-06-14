import { nanoid } from '@reduxjs/toolkit'
import { Field } from 'formik'
import ErrorMsg from '../ErrorMsg/ErrorMsg'
import s from './FormField.module.css'
import clsx from 'clsx'

const FormField = ({
	labelTitle,
	type,
	name,
	placeholder,
	classLabel,
	classField,
	isSup = false,
	isErrorMessage = true,
	customFieldWrapper,
}) => {
	const fieldId = nanoid()
	return (
		<>
			<div
				className={clsx(
					s.fieldWrapper,
					customFieldWrapper && s[customFieldWrapper]
				)}
			>
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
				{isErrorMessage && <ErrorMsg name={name} />}
			</div>
		</>
	)
}

export default FormField
