import { useAddStatisticToLocaleStorage } from '../../contexts/AddStatisticToLocaleStorageContext'
import { datePrettier } from '../../utils/sidePanel/resultsPanel/datePrettier'
import s from './StatisticsList.module.css'

const StatisticsList = () => {
	const { statistics } = useAddStatisticToLocaleStorage()
	return (
		statistics.length > 0 && (
			<div className={s.statisticsWrapper}>
				<h3 className={s.statisticsTitle}>Статистика</h3>
				<ul className={s.statisticsList}>
					{statistics.map((statistic, index) => (
						<li key={index}>
							<ul className={s.statisticItemDetails}>
								<li className={s.item}>
									<span className={s.statDate}>
										{datePrettier(statistic.statDate)}
									</span>
								</li>
								<li className={s.item}>
									<span className={s.statTime}>{statistic.statTime}</span>
								</li>
								<li className={s.item}>
									<span className={s.statPages}>{statistic.statPages}</span>
									&nbsp;
									<span className={s.statPagesLabel}>стор.</span>
								</li>
							</ul>
						</li>
					))}
				</ul>
			</div>
		)
	)
}

export default StatisticsList
