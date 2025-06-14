import Container from '../../components/Common/Container/Container'
import Section from '../../components/Common/Section/Section'
import RegisterForm from '../../components/Form/RegisterForm/RegisterForm'
import RegisterGuide from '../../components/Guide/RegisterGuide/RegisterGuide'
import s from './RegisterPage.module.css'

const RegisterPage = () => {
	return (
		<Section className='authSection'>
			<Container className='authContainer'>
				<div className={s.registerWrapper}>
					<RegisterForm />
					<RegisterGuide />
				</div>
			</Container>
		</Section>
	)
}

export default RegisterPage
