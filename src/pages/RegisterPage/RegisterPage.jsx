import RegisterGuide from '../../components/Guide/RegisterGuide/RegisterGuide/RegisterGuide'
import RegisterForm from '../../components/Form/RegisterForm/RegisterForm'
import Container from '../../components/Common/Container/Container'
import { useWindowWidth } from '../../contexts/WindowWidthContext'
import Section from '../../components/Common/Section/Section'
import s from './RegisterPage.module.css'

const RegisterPage = () => {
	const { windowWidth } = useWindowWidth()

	return (
		<Section className='authSection'>
			<Container className='authContainer'>
				<div className={s.registerWrapper}>
					<RegisterForm />
					{windowWidth >= 768 && <RegisterGuide />}
				</div>
			</Container>
		</Section>
	)
}

export default RegisterPage
