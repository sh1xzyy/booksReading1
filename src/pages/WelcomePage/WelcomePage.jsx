import RegisterGuide from '../../components/Guide/RegisterGuide/RegisterGuide/RegisterGuide'
import s from './WelcomePage.module.css'
const WelcomePage = () => {
	return (
		<div className={s.welcomeGuideWrapper}>
			<RegisterGuide />
		</div>
	)
}

export default WelcomePage
