import { useSelector } from 'react-redux'
import { selectPlannedData } from '../../../redux/planning/selectors'
import s from './GoalToReadPanel.module.css'

const GoalToReadPanel = () => {
	const { plannedBooks, duration } = useSelector(selectPlannedData)
	return (
		<>
			<div className={s.goalHeader}>
				<h3 className={s.title}>Моя мета прочитати</h3>
			</div>
			<div className={s.countWrapper}>
				<ul className={s.countList}>
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
				</ul>
			</div>
		</>
	)
}

export default GoalToReadPanel
