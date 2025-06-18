import { useSelector } from 'react-redux'
import { useTrainingContext } from '../../../contexts/TrainingContext'
import { selectPlannedData } from '../../../redux/planning/selectors'
import s from './GoalToReadPanel.module.css'
import clsx from 'clsx'

const GoalToReadPanel = () => {
	const { plannedBooks, duration } = useSelector(selectPlannedData)
	const { isTraining } = useTrainingContext()

	const getListClassByStatus = (s, isTraining) =>
		clsx(!isTraining && s.defaultCountList, isTraining && s.trainingCountList)

	const getCounterClassByStatus = (s, isTraining) =>
		clsx(!isTraining && s.defaultCounter, isTraining && s.trainingCounter)

	const getCounterDescriptionClassByStatus = (s, isTraining) =>
		clsx(
			!isTraining && s.defaultCounterDescription,
			isTraining && s.trainingCounterDescription
		)

	const getCounterItemClassByStatus = (s, isTraining) =>
		clsx(!isTraining && s.defaultCountItem, isTraining && s.trainingCountItem)

	return (
		<>
			<div className={s.goalHeader}>
				<h3 className={s.title}>Моя мета прочитати</h3>
			</div>
			<div className={s.countWrapper}>
				<ul className={getListClassByStatus(s, isTraining)}>
					<li>
						<div className={getCounterItemClassByStatus(s, isTraining)}>
							<span className={getCounterClassByStatus(s, isTraining)}>
								{plannedBooks.length || '0'}
							</span>
						</div>
						<span className={getCounterDescriptionClassByStatus(s, isTraining)}>
							Кількість книжок
						</span>
					</li>
					<li>
						<div className={getCounterItemClassByStatus(s, isTraining)}>
							<span className={getCounterClassByStatus(s, isTraining)}>
								{duration || '0'}
							</span>
						</div>
						<span className={getCounterDescriptionClassByStatus(s, isTraining)}>
							Кількість днів
						</span>
					</li>
					{isTraining && (
						<li>
							<div className={getCounterItemClassByStatus(s, isTraining)}>
								<span className={getCounterClassByStatus(s, isTraining)}>
									{duration || '0'}
								</span>
							</div>
							<span
								className={getCounterDescriptionClassByStatus(s, isTraining)}
							>
								Залишилось книжок
							</span>
						</li>
					)}
				</ul>
			</div>
		</>
	)
}

export default GoalToReadPanel
