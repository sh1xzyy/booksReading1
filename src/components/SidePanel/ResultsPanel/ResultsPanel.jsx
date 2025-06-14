import { Form, Formik } from 'formik'
import s from './ResultsPanel.module.css'
import { useState } from 'react'
import CustomDatePicker from '../../Custom/DatePicker/CustomDatePicker/CustomDatePicker'
import { datePrettier } from '../../../utils/sidePanel/resultsPanel/datePrettier'
import ActionButton from '../../Common/ActionButton/ActionButton'
import FormField from '../../Form/FormField/FormField'

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

const initialValues = {
	date: '',
	pages: '',
}

const ResultsPanel = () => {
	const [hasUserStartDataChange, setHasUserStartDataChange] = useState(false)
	return (
		<>
			<h3 className={s.resultsTitle}>Результати</h3>
			<Formik initialValues={initialValues}>
				<Form className={s.form}>
					<div className={s.fields}>
						<label>
							<span className={s.label}>Дата</span>
							<div className={s.fieldWrapper}>
								<CustomDatePicker
									hasUserDataChange={hasUserStartDataChange}
									setHasUserDataChange={setHasUserStartDataChange}
									name='date'
									className='resultsDatePicker'
									placeholder='Date'
								/>
							</div>
						</label>
						<FormField
							name='pages'
							type='number'
							classField='resultsField'
							classLabel='resultsPanelLabel'
							isErrorMessage={false}
							labelTitle='Кількість сторінок'
						/>
					</div>
					<ActionButton
						className='addResultButton'
						type='submit'
						title='Додати результат'
					/>
				</Form>
			</Formik>
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
		</>
	)
}

export default ResultsPanel
