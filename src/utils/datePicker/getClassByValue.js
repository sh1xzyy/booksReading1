import clsx from 'clsx'

export const getClassByValue = (s, className) =>
	clsx(
		s.datePicker,
		className === 'trainingDatePicker' && s.trainingDatePicker,
		className === 'resultsDatePicker' && s.resultsDatePicker
	)
