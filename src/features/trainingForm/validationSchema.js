import * as Yup from 'yup'

export const validationSchema = Yup.object().shape({
  startDate: Yup.string()
    .matches(/^\d{4}-\d{2}-\d{2}$/, 'Wrong date')
    .required('Select the start date'),
  endDate: Yup.string()
    .matches(/^\d{4}-\d{2}-\d{2}$/, 'Wrong date')
    .required('Select the last date'),
  books: Yup.array()
    .of(Yup.string())
    .min(1, 'Select at least 1 book')
    .required('Select a book'),
})
