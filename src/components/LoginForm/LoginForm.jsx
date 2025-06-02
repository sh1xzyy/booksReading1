import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Form, Formik } from 'formik'
import { selectIsLoading, selectIsLoggedIn } from '../../redux/auth/selectors'
import { useLoginForm } from '../../features/auth/LoginForm/useLoginForm'
import NavigationButton from '../NavigationButton/NavigationButton'
import ActionButton from '../ActionButton/ActionButton'
import FormField from '../FormField/FormField'
import s from './LoginForm.module.css'
import Loader from '../Loader/Loader'

const LoginForm = () => {
	const {initialValues, validationSchema, handleSubmit} = useLoginForm()
	const isLoggedIn = useSelector(selectIsLoggedIn)
	const isLoading = useSelector(selectIsLoading)

	if (isLoggedIn) {
		return <Navigate to='/library' />
	}

	return (
		<>
			{isLoading && <Loader />}
			<div className={s.formWrapper}>
				<Formik
					initialValues={initialValues}
					onSubmit={handleSubmit}
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
