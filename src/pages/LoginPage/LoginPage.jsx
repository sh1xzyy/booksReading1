import Container from '../../components/Container/Container'
import LoginForm from '../../components/LoginForm/LoginForm'
import LoginQuote from '../../components/LoginQuote/LoginQuote'
import s from './LoginPage.module.css'

const LoginPage = () => {
	return (
		<Container className={s.loginContainer}>
			<div className={s.loginWrapper}>
				<LoginForm />
				<LoginQuote />
			</div>
		</Container>
	)
}

export default LoginPage
