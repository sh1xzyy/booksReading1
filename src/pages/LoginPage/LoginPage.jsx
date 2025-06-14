import Container from '../../components/Common/Container/Container'
import Section from '../../components/Common/Section/Section'
import LoginForm from '../../components/Form/LoginForm/LoginForm'
import LoginGuide from '../../components/Guide/LoginGuide/LoginGuide'
import s from './LoginPage.module.css'

const LoginPage = () => {
	return (
		<Section className='authSection'>
			<Container className='authContainer'>
				<div className={s.loginWrapper}>
					<LoginForm />
					<LoginGuide />
				</div>
			</Container>
		</Section>
	)
}

export default LoginPage
