import s from './CustomDatePickerCover.module.css'
import 'react-datepicker/dist/react-datepicker.css'
import enUS from 'date-fns/locale/en-US'
import DatePicker, { registerLocale } from 'react-datepicker'
import './CustomDatePicker.css'
import { useField, useFormikContext } from 'formik'
import { useState } from 'react'
import clsx from 'clsx'

const CustomDatePicker = ({
	hasUserDataChange,
	setHasUserDataChange,
	name,
	placeholder,
	isDefault = false,
}) => {
	const [isCalendarOpen, setIsCalendarOpen] = useState(false)

	const { setFieldValue } = useFormikContext()
	const [field] = useField(name)

	const customLocale = {
		...enUS,
		options: {
			...enUS.options,
			weekStartsOn: 1,
		},
	}
	registerLocale('custom-en', customLocale)

	const handleDataChange = date => {
		const normalizeData = `${date.getFullYear()}-${String(
			date.getMonth() + 1
		).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`

		setFieldValue(name, normalizeData)
		setHasUserDataChange(true)
	}

	const onCalendarClose = () => setIsCalendarOpen(false)
	const onCalendarOpen = () => setIsCalendarOpen(true)

	return (
		<>
			<DatePicker
				className={clsx(s.datePicker, isDefault && s.resultsDatePicker)}
				dateFormat='dd/MM/yyyy'
				locale='custom-en'
				selected={hasUserDataChange && field.value}
				placeholderText={placeholder}
				onChange={handleDataChange}
				onCalendarClose={onCalendarClose}
				onCalendarOpen={onCalendarOpen}
			/>
			{!isDefault && (
				<svg className={s.calendar} width={17} height={17}>
					<use href='/icons/icons.svg#icon-calendar'></use>
				</svg>
			)}
			<svg
				className={clsx(s.arrowDown, isCalendarOpen && s.rotate)}
				width={13}
				height={13}
			>
				<use href='/icons/icons.svg#icon-arrow-down'></use>
			</svg>
		</>
	)
}

export default CustomDatePicker
