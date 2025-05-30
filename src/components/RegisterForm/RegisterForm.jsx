import { Form, Formik } from 'formik'
import s from './RegisterForm.module.css'
import { Link, Navigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import FormField from '../FormField/FormField'
import toast from 'react-hot-toast'
import { registerThunk } from '../../redux/auth/operations'
import { validationSchema } from '../../utils/register/validationSchema'
import { selectIsLoading } from '../../redux/auth/selectors'
import Loader from '../Loader/Loader'
import ActionButton from '../ActionButton/ActionButton'
import NavigationButton from '../NavigationButton/NavigationButton'

const RegisterForm = () => {
	const dispatch = useDispatch()
	const isLoading = useSelector(selectIsLoading)

	const initialValues = {
		name: '',
		email: '',
		password: '',
		confirmPassword: '',
	}

	const onFormSubmit = async ({ name, email, password }, actions) => {
		try {
			await dispatch(registerThunk({ name, email, password })).unwrap()
			toast.success('You have successfully registered.')
		} catch (error) {
			toast.error(error)
		} finally {
			actions.resetForm()
		}
	}

	return (
		<>
			{isLoading && <Loader />}
			<div className={s.formWrapper}>
				<Formik
					initialValues={initialValues}
					onSubmit={onFormSubmit}
					validationSchema={validationSchema}
				>
					<Form className={s.form}>
						<ActionButton className="googleButton" type='button' title="Google"/>
						<div className={s.fields}>
							<FormField
								classField='authfield'
								classLabel='authLabel'
								labelTitle='Ім’я '
								name='name'
								type='text'
								placeholder='...'
								isSup={true}
							/>
							<FormField
								classField='authfield'
								classLabel='authLabel'
								labelTitle='Електронна адреса '
								name='email'
								type='email'
								placeholder='your@email.com'
								isSup={true}
							/>
							<FormField
								classField='authfield'
								classLabel='authLabel'
								labelTitle='Пароль '
								name='password'
								type='password'
								placeholder='...'
								isSup={true}
							/>
							<FormField
								classField='authfield'
								classLabel='authLabel'
								labelTitle='Підтвердити пароль '
								name='confirmPassword'
								type='password'
								placeholder='...'
								isSup={true}
							/>
						</div>
						<ActionButton className="registerSubmitButton" type='submit' title='Зареєструватися'/>
						<p className={s.loginText}>
							Вже з нами?{' '}
							<NavigationButton className="loginLink" to='/login' title="Увійти"/>	
						</p>
					</Form>
				</Formik>
			</div>
		</>
	)
}

export default RegisterForm
