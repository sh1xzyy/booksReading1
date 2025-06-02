import * as Yup from 'yup'

export const validationSchema = Yup.object().shape({
    name: Yup.string().required('Enter your name'),
    email: Yup.string().required('Enter your email'),
    password: Yup.string()
        .min(6, 'Min 6 letter')
        .max(32, 'Max 32 letter')
        .matches(/[A-Z]/, 'At least one capital letter')
        .matches(/[a-z]/, 'At least one lowercase letter')
        .matches(/\d/, 'At least one digit')
        .matches(/[@$!%*?&]/, 'At least one special character (@$!%*?&)')
        .required('Enter your password'),
    confirmPassword: Yup.string()
        .min(6, 'Min 6 letter')
        .max(32, 'Max 32 letter')
        .required('Confirm your password'),
})
