import * as Yup from 'yup'

export const validationSchema = Yup.object({
	email: Yup.string().required('Enter you email'),
	password: Yup.string()
		.min(8, 'Min 8 letter')
		.max(32, 'Max 32 letter')
		.required('Enter you password'),
})
