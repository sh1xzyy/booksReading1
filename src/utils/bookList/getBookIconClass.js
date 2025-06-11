import clsx from 'clsx'

export const getBookIconClass = (s, status) => {
	return clsx(
		s.defaultIcon,
		status === 'finished' && s.iconFinished,
		status === 'reading' && s.iconReading
	)
}
