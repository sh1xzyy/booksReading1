import { datePrettier } from '../../utils/sidePanel/resultsPanel/datePrettier'
import s from './StatisticsList.module.css'

const StatisticsList = () => {
	const statistics = [
		{
			statDate: '10.10.2019',
			statTime: '08:10:23',
			statPagesCount: 32,
		},
		{
			statDate: '5.12.2015',
			statTime: '08:10:23',
			statPagesCount: 32,
		},
		{
			statDate: '22.1.2022',
			statTime: '08:10:23',
			statPagesCount: 1100,
		},
		{
			statDate: '31.12.2017',
			statTime: '08:10:23',
			statPagesCount: 169,
		},
	]
	return (
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
								<span className={s.statTime}>
									{datePrettier(statistic.statTime)}
								</span>
							</li>
							<li className={s.item}>
								<span className={s.statPagesCount}>
									{statistic.statPagesCount}
								</span>
								&nbsp;
								<span className={s.statPagesLabel}>стор.</span>
							</li>
						</ul>
					</li>
				))}
			</ul>
		</div>
	)
}

export default StatisticsList
