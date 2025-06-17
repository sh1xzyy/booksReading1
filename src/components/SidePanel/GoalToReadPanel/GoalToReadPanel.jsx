import { useSelector } from 'react-redux'
import { useTrainingContext } from '../../../contexts/TrainingContext'
import { selectPlannedData } from '../../../redux/planning/selectors'
import s from './GoalToReadPanel.module.css'
import clsx from 'clsx'

const GoalToReadPanel = () => {
	const { plannedBooks, duration } = useSelector(selectPlannedData)
	const { isTraining } = useTrainingContext()

	const getListClassByStatus = isTraining =>
		clsx(s.countList, isTraining && s.trainingCountClass)

	return (
		<>
			<div className={s.goalHeader}>
				<h3 className={s.title}>Моя мета прочитати</h3>
			</div>
			<div className={s.countWrapper}>
				<ul className={getListClassByStatus(isTraining)}>
					<li>
						<div className={s.countItem}>
							<span className={s.counter}>{plannedBooks.length || '0'}</span>
						</div>
						<span className={s.counterDescription}>Кількість книжок</span>
					</li>
					<li>
						<div className={s.countItem}>
							<span className={s.counter}>{duration || '0'}</span>
						</div>
						<span className={s.counterDescription}>Кількість днів</span>
					</li>
					{isTraining && (
						<li>
							<div className={s.countItem}>
								<span className={s.counter}>{duration || '0'}</span>
							</div>
							<span className={s.counterDescription}>Залишилось книжок</span>
						</li>
					)}
				</ul>
			</div>
		</>
	)
}

export default GoalToReadPanel
