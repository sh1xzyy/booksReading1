import s from './CustomDatePickerCover.module.css'
import 'react-datepicker/dist/react-datepicker.css'
import enUS from 'date-fns/locale/en-US'
import DatePicker, { registerLocale } from 'react-datepicker'
import './CustomDatePicker.css'

const CustomDatePicker = ({ selectedDate, handleDateChange }) => {
	const customLocale = {
		...enUS,
		options: {
			...enUS.options,
			weekStartsOn: 1,
		},
	}
	registerLocale('custom-en', customLocale)

	return (
		<>
			<DatePicker
				className={s.datePicker}
				dateFormat='dd/MM/yyyy'
				locale='custom-en'
				selected={selectedDate}
				onChange={date => handleDateChange(date)}
			/>
		</>
	)
}

export default CustomDatePicker
