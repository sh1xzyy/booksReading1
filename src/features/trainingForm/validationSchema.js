import * as Yup from 'yup'

export const validationSchema = Yup.object().shape({
	startDate: Yup.string()
		.matches(/^\d{4}-\d{2}-\d{2}$/, 'Неправильна дата')
		.required('Оберіть дату початку'),
	endDate: Yup.string()
		.matches(/^\d{4}-\d{2}-\d{2}$/, 'Неправильна дата')
		.required('Оберіть дату завершення'),
	books: Yup.array()
		.of(Yup.string())
		.min(1, 'Оберіть щонайменше одну книгу')
		.required('Оберіть книгу'),
})
