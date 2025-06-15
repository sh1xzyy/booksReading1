import { useSelector, useDispatch } from 'react-redux'
import { GoPlus } from 'react-icons/go'
import { useEffect, useState } from 'react'
import {
	selectIsLoading,
	selectPlannedData,
} from '../../redux/planning/selectors'
import CustomRechart from '../../components/Custom/Reacharts/CustomRechart/CustomRechart'
import ActionFormModal from '../../components/Modal/ActionFormModal/ActionFormModal'
import SidePanelCard from '../../components/SidePanel/SidePanelCard/SidePanelCard'
import MyTrainingForm from '../../components/Form/MyTrainingForm/MyTrainingForm'
import { useMyTrainingFormContext } from '../../contexts/MyTrainingFormContext'
import ActionButton from '../../components/Common/ActionButton/ActionButton'
import Container from '../../components/Common/Container/Container'
import { useWindowWidth } from '../../contexts/WindowWidthContext'
import useTimer from '../../components/hooks/useTimer/useTimer'
import BookList from '../../components/Book/BookList/BookList'
import Section from '../../components/Common/Section/Section'
import Loader from '../../components/Common/Loader/Loader'
import Timer from '../../components/Timer/Timer'
import s from './StatisticsPage.module.css'
import { planningThunk } from '../../redux/planning/operations'

const StatisticsPage = () => {
	const [isStartTrainingButtonClicked, setIsStartTrainingButtonClicked] =
		useState(false)
	const { isMyTrainingFormOpen, setIsMyTrainingFormOpen } =
		useMyTrainingFormContext()
	const { plannedBooks } = useSelector(selectPlannedData)
	const isLoading = useSelector(selectIsLoading)
	const { windowWidth } = useWindowWidth()
	const { newYearTime } = useTimer()
	const dispatch = useDispatch()

	useEffect(() => {
		const fetchData = async () => {
			try {
				await dispatch(planningThunk({ method: 'GET' })).unwrap()
			} catch (error) {
				console.error(error)
			}
		}
		fetchData()
	}, [dispatch])

	return (
		<>
			{isLoading && <Loader />}
			{isMyTrainingFormOpen && <ActionFormModal type='trainingForm' />}
			{windowWidth < 768 && !isMyTrainingFormOpen && (
				<ActionButton
					className='openFormButton'
					type='button'
					onClick={() => setIsMyTrainingFormOpen(true)}
				>
					<GoPlus color='#fff' size={24} />
				</ActionButton>
			)}

			<Container className='statisticsPageContainer'>
				<div className={s.pageLayout}>
					<div className={s.rightColumn}>
						<Section className='goalSection'>
							<Container className='innerContainer'>
								<SidePanelCard type='goalToRead' />
							</Container>
						</Section>
						<Section>
							<Container className='innerContainer'>
								<SidePanelCard type='results' />
							</Container>
						</Section>
					</div>

					<div className={s.leftColumn}>
						{isStartTrainingButtonClicked && (
							<Section className='timerSection'>
								<Container className='innerContainer'>
									<div className={s.timersGroup}>
										<Timer
											timer={newYearTime}
											title='До закінчення року залишилось'
										/>
										<Timer
											timer={{ days: 0, hours: 0, minutes: 0, seconds: 0 }}
											title='До досягнення мети залишилось'
										/>
									</div>
								</Container>
							</Section>
						)}

						{windowWidth > 768 && (
							<Section className='trainingFormSection'>
								<Container className='innerContainer'>
									<MyTrainingForm />
								</Container>
							</Section>
						)}

						<Section className='planningListSection'>
							<Container className='innerContainer'>
								<BookList
									items={plannedBooks}
									sectionTitle='Planning'
									status='planning'
								/>
								{plannedBooks?.length > 0 && !isStartTrainingButtonClicked && (
									<ActionButton
										className='startTrainingButton'
										type='button'
										title='Почати тренування'
										onClick={() => setIsStartTrainingButtonClicked(true)}
									/>
								)}
							</Container>
						</Section>

						<Section className='chartSection'>
							<Container className='innerContainer'>
								<CustomRechart />
							</Container>
						</Section>
					</div>
				</div>
			</Container>
		</>
	)
}

export default StatisticsPage
