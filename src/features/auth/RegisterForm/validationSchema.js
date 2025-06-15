import * as Yup from 'yup'

export const validationSchema = Yup.object().shape({
	name: Yup.string().required('Введіть ваше ім’я'),
	email: Yup.string().required('Введіть вашу електронну пошту'),
	password: Yup.string()
		.min(6, 'Мінімум 6 символів')
		.max(32, 'Максимум 32 символи')
		.matches(/[A-Z]/, 'Щонайменше одна велика літера')
		.matches(/[a-z]/, 'Щонайменше одна маленька літера')
		.matches(/\d/, 'Щонайменше одна цифра')
		.matches(/[@$!%*?&]/, 'Щонайменше один спеціальний символ (@$!%*?&)')
		.required('Введіть ваш пароль'),
	confirmPassword: Yup.string()
		.min(6, 'Мінімум 6 символів')
		.max(32, 'Максимум 32 символи')
		.required('Підтвердіть ваш пароль'),
})
