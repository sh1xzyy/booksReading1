import Container from '../../components/Container/Container'
import RegisterForm from '../../components/RegisterForm/RegisterForm'
import RegisterQuote from '../../components/RegisterQuote/RegisterQuote'
import s from './RegisterPage.module.css'

const RegisterPage = () => {
	return (
		<Container className={s.registerContainer}>
			<div className={s.registerWrapper}>
				<RegisterForm />
				<RegisterQuote />
			</div>
		</Container>
	)
}

export default RegisterPage
