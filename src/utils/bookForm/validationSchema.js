import * as Yup from 'yup'

export const validationSchema = Yup.object().shape({
	title: Yup.string().required('Fill Name'),
	author: Yup.string().required('Fill Author'),
	publishYear: Yup.string()
		.min(1000, 'Not less than 1000!')
		.required('Fill Publish Year'),
	pagesTotal: Yup.string().required('Fill Pages Total'),
})
