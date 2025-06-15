import * as Yup from 'yup'

export const validationSchema = Yup.object({
	email: Yup.string().required('Введіть свою електронну адресу'),
	password: Yup.string()
		.min(8, 'Мінімальна 8 літера')
		.max(32, 'Максимум 32 літери')
		.required('Введіть свій пароль'),
})
