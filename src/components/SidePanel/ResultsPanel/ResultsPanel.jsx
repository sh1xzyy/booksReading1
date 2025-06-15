import s from './ResultsPanel.module.css'
import ResultsPanelForm from '../../Form/ResultsPanelForm/ResultsPanelForm'
import StatisticsList from '../../Statistics/StatisticsList'

const ResultsPanel = () => {
	return (
		<>
			<h3 className={s.resultsTitle}>Результати</h3>
			<ResultsPanelForm />
			<StatisticsList />
		</>
	)
}

export default ResultsPanel
