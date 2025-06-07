import * as Yup from 'yup'

export const validationSchema = Yup.object().shape({
  startDate: Yup.string()
    .matches(/^\d{4}-\d{2}-\d{2}$/, 'Невірна дата')
    .required('Обовʼязково'),
  endDate: Yup.string()
    .matches(/^\d{4}-\d{2}-\d{2}$/, 'Невірна дата')
    .required('Обовʼязково'),
  books: Yup.array()
    .of(Yup.string())
    .min(1, 'Виберіть хоча б одну книгу')
    .required('Обовʼязково'),
})
