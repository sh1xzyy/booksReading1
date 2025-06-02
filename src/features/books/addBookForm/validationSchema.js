import * as Yup from 'yup'

export const validationSchema = Yup.object().shape({
    title: Yup.string().required('Fill Name'),
    author: Yup.string().required('Fill Author'),
    publishYear: Yup.string().required('Fill Publish Year'),
    pagesTotal: Yup.string().required('Fill Pages Total'),
})
