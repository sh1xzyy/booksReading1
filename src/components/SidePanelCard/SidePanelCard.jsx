import clsx from 'clsx'
import GoalToReadPanel from '../GoalToReadPanel/GoalToReadPanel'
import ResultsPanel from '../ResultsPanel/ResultsPanel'
import s from './SidePanelCard.module.css'

const SidePanelCard = ({ type }) => {
	const getWrapperClassByType = type =>
		clsx(
			s.panelWrapper,
			type === 'goalToRead' && s.goalToReadWrapper,
			type === 'results' && s.resultsWrapper
		)

	return (
		<div className={getWrapperClassByType(type)}>
			{type === 'goalToRead' ? <GoalToReadPanel /> : <ResultsPanel />}
		</div>
	)
}

export default SidePanelCard
