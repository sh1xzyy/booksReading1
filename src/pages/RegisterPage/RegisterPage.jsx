import Container from '../../components/Container/Container'
import RegisterForm from '../../components/RegisterForm/RegisterForm'
import RegisterQuote from '../../components/RegisterQuote/RegisterQuote'
import Section from '../../components/Section/Section'
import s from './RegisterPage.module.css'

const RegisterPage = () => {
	return (
		<Section className='authSection'>
			<Container className='authContainer'>
				<div className={s.registerWrapper}>
					<RegisterForm />
					<RegisterQuote />
				</div>
			</Container>
		</Section>
	)
}

export default RegisterPage
