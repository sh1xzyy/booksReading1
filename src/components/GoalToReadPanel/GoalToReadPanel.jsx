import { useSelector } from 'react-redux'
import { selectPlanningData } from '../../redux/planning/selectors'
import s from './GoalToReadPanel.module.css'

const GoalToReadPanel = () => {
	const { books, duration } = useSelector(selectPlanningData)
	return (
		<>
			<div className={s.goalHeader}>
				<h3 className={s.title}>Моя мета прочитати</h3>
			</div>
			<div className={s.countWrapper}>
				<ul className={s.countList}>
					<li>
						<div className={s.countItem}>
							<span className={s.counter}>{books.length || '0'}</span>
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
