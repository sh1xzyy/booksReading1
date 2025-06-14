import { useField, useFormikContext } from 'formik'
import { useSelector } from 'react-redux'
import Select from 'react-select'
import DropdownIndicator from '../DropDownIndicator/DropDownIndicator'
import { customStyles } from './customStyles'
import { selectGoingToReadBooksSorted } from '../../../../redux/book/selectors'

const CustomSelector = ({ name, placeholder }) => {
	const { setFieldValue } = useFormikContext()
	const [field] = useField(name)

	const books = useSelector(selectGoingToReadBooksSorted)
	const options = books.map(({ _id, title }) => ({ value: _id, label: title }))

	const handleChange = selectedOptions => {
		const valuesId = selectedOptions.map(option => option.value)
		setFieldValue(name, valuesId)
	}

	return (
		<Select
			isMulti
			options={options}
			styles={customStyles}
			key={field.value || ''}
			onChange={handleChange}
			placeholder={placeholder}
			components={{ DropdownIndicator }}
			value={options.filter(option => field.value?.includes(option.value))}
		/>
	)
}

export default CustomSelector
