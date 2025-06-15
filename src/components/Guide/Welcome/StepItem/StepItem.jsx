import { HiMiniArrowTurnDownRight } from 'react-icons/hi2'
import s from './StepItem.module.css'

const StepItem = ({ step: { title, headLine, hintText, Icon } }) => {
	return (
		<li className={s.stepItem}>
			<h3 className={s.stepTitle}>{title}</h3>
			<div className={s.stepContent}>
				<Icon size={22} color='#a6abb9' />
				<div>
					<p className={s.stepHeadline}>{headLine}</p>
					<div className={s.stepHint}>
						<HiMiniArrowTurnDownRight color='#ff6b08' size={12} />
						<p className={s.stepHintText}>{hintText}</p>
					</div>
				</div>
			</div>
		</li>
	)
}

export default StepItem
