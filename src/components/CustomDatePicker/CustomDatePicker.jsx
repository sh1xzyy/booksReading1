import s from './CustomDatePickerCover.module.css'
import 'react-datepicker/dist/react-datepicker.css'
import enUS from 'date-fns/locale/en-US'
import DatePicker, { registerLocale } from 'react-datepicker'
import './CustomDatePicker.css'
import { useField, useFormikContext } from 'formik'

const CustomDatePicker = ({hasUserDataChange, setHasUserDataChange, name, placeholder }) => {
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

	const handleDataChange = (date) => {
		const normalizeData = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`

		setFieldValue(name, normalizeData)
		setHasUserDataChange(true)
	}

	return (
		<>
			<DatePicker
				className={s.datePicker}
				dateFormat='dd/MM/yyyy'
				locale='custom-en'
				selected={hasUserDataChange && field.value}
				placeholderText={placeholder}
				onChange={handleDataChange}
			/>
		</>
	)
}

export default CustomDatePicker
