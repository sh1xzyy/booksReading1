import * as Yup from 'yup'

export const validationSchema = Yup.object().shape({
	title: Yup.string().required('Введіть назву'),
	author: Yup.string().required('Введіть автора'),
	publishYear: Yup.string().required('Введіть рік'),
	pagesTotal: Yup.number()
		.typeError('Має бути число')
		.min(1, 'Мінімум 1 сторінка')
		.required('Введіть сторінки'),
})
