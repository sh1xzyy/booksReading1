export const datePrettier = date => {
	return date
		.split('-')
		.map(data => data.padStart(2, '0'))
		.reverse()
		.join('.')
}
