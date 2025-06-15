import ActionButton from '../../../Common/ActionButton/ActionButton'
import { guideSteps } from '../guideSteps/guideSteps'
import StepItem from '../StepItem/StepItem'
import s from './WelcomeGuide.module.css'

const WelcomeGuide = ({ setCloseGuide }) => {
	return (
		<div className={s.welcomeGuideWrapper}>
			<div className={s.modal}>
				<ul className={s.stepsList}>
					{guideSteps.map((step, index) => (
						<StepItem key={index} step={step} />
					))}
				</ul>
				<ActionButton
					className='acceptKnowledge'
					type='submit'
					title='Ok'
					onClick={() => setCloseGuide(false)}
				/>
			</div>
		</div>
	)
}

export default WelcomeGuide
