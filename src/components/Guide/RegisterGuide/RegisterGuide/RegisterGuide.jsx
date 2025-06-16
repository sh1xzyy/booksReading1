import NavigationButton from '../../../Common/NavigationButton/NavigationButton'
import RegisterGuideSection from '../ReadingSection/ReadingSection'
import { sections } from '../readingSectionContent/readingSectionContent'
import s from './RegisterGuide.module.css'

const RegisterGuide = () => {
	return (
		<div className={s.registerGuideWrapper}>
			<h2 className={s.registerTitle}>Books Reading</h2>
			<ul className={s.registerSectionList}>
				{sections.map((section, index) => (
					<RegisterGuideSection key={index} section={section} />
				))}
			</ul>
			<div className={s.authButtons}>
				<NavigationButton to='/login' className='loginButton' title='Увійти' />
				<NavigationButton
					to='/register'
					className='registerButton'
					title='Реєстрація'
				/>
			</div>
		</div>
	)
}

export default RegisterGuide
