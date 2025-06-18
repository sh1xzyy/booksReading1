import clsx from 'clsx'
import GoalToReadPanel from '../GoalToReadPanel/GoalToReadPanel'
import ResultsPanel from '../ResultsPanel/ResultsPanel'
import s from './SidePanelCard.module.css'
import { useTrainingContext } from '../../../contexts/TrainingContext'

const SidePanelCard = ({ type }) => {
	const { isTraining } = useTrainingContext()

	const getWrapperClassByType = type =>
		clsx(
			s.panelWrapper,
			type === 'goalToRead' && s.goalToReadWrapper,
			type === 'goalToRead' && !isTraining && s.goalToReadTrainingWrapper,
			type === 'results' && s.resultsWrapper
		)

	return (
		<div className={getWrapperClassByType(type)}>
			{type === 'goalToRead' ? <GoalToReadPanel /> : <ResultsPanel />}
		</div>
	)
}

export default SidePanelCard
