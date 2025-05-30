import { useDispatch, useSelector } from 'react-redux'
import { Link, Navigate } from 'react-router-dom'
import { Form, Formik } from 'formik'
import toast from 'react-hot-toast'
import { selectIsLoading, selectIsLoggedIn } from '../../redux/auth/selectors'
import { validationSchema } from '../../utils/login/validationSchema'
import { loginThunk } from '../../redux/auth/operations'
import FormField from '../FormField/FormField'
import s from './LoginForm.module.css'
import Loader from '../Loader/Loader'
import ActionButton from '../ActionButton/ActionButton'
import NavigationButton from '../NavigationButton/NavigationButton'

const LoginForm = () => {
	const dispatch = useDispatch()
	const isLoading = useSelector(selectIsLoading)
	const isLoggedIn = useSelector(selectIsLoggedIn)

	const initialValues = {
		email: '',
		password: '',
	}

	const onFormSubmit = async (value, actions) => {
		try {
			await dispatch(loginThunk(value)).unwrap()
			toast.success('You have successfully logged in')
		} catch (error) {
			toast.error(error)
		} finally {
			actions.resetForm()
		}
	}

	if (isLoggedIn) {
		return <Navigate to='/library' />
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
								placeholder='Пароль'
								isSup={true}
							/>
						</div>
						<ActionButton className="loginSubmitButton" type='submit' title='Увійти'/>
						<NavigationButton className="registerLink" to='/register' title="Реєстрація"/>
					</Form>
				</Formik>
			</div>
		</>
	)
}

export default LoginForm
