import { Form, Formik } from 'formik'
import s from './ResultsPanel.module.css'
import CustomDatePicker from '../CustomDatePicker/CustomDatePicker'
import ActionButton from '../ActionButton/ActionButton'
import FormField from '../FormField/FormField'
import { useState } from 'react'

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
		statPagesCount: 32,
	},
	{
		statDate: '31.12.2017',
		statTime: '08:10:23',
		statPagesCount: 32,
	},
]

const ResultsPanel = () => {
	const [hasUserStartDataChange, setHasUserStartDataChange] = useState(false)
	return (
		<>
			<h3 className={s.resultsTitle}>Результати</h3>
			<Formik>
				<Form>
					<div className={s.fields}>
						<label>
							<span className={s.label}>Дата</span>
							<div className={s.fieldWrapper}>
								<CustomDatePicker
									hasUserDataChange={hasUserStartDataChange}
									setHasUserDataChange={setHasUserStartDataChange}
									name='date'
									isDefault={true}
									placeholder='Date'
								/>
							</div>
						</label>
						<div className={s.fieldWrapper}>
							<FormField
								type='number'
								classField='resultsField'
								isErrorMessage={false}
								labelTitle='Кількість сторінок'
								classLabel='resultsPanelLabel'
							/>
						</div>
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
						<li>
							<ul className={s.statisticItemDetails}>
								<li key={index}>
									<span className={s.statDate}>
										{statistic.statDate.padStart(2, '0')}
									</span>
								</li>
								<li>
									<span className={s.statTime}>
										{statistic.statTime.padStart(2, '0')}
									</span>
								</li>
								<li>
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
