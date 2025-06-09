import Container from '../../components/Container/Container'
import LoginForm from '../../components/LoginForm/LoginForm'
import LoginQuote from '../../components/LoginQuote/LoginQuote'
import Section from '../../components/Section/Section'
import s from './LoginPage.module.css'

const LoginPage = () => {
	return (
		<Section className='authSection'>
			<Container className="loginContainer">
				<div className={s.loginWrapper}>
					<LoginForm />
					<LoginQuote />
				</div>
			</Container>
		</Section>
	)
}

export default LoginPage
