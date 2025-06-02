import { useSelector } from 'react-redux'
import { Form, Formik } from 'formik'
import { useRegisterForm } from '../../features/auth/RegisterForm/useRegisterForm'
import NavigationButton from '../NavigationButton/NavigationButton'
import { selectIsLoading } from '../../redux/auth/selectors'
import ActionButton from '../ActionButton/ActionButton'
import FormField from '../FormField/FormField'
import s from './RegisterForm.module.css'
import Loader from '../Loader/Loader'

const RegisterForm = () => {
	const {initialValues, validationSchema, handleSubmit} = useRegisterForm()
	const isLoading = useSelector(selectIsLoading)

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
