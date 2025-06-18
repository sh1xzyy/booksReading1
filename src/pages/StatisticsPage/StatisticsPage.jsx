import { useSelector, useDispatch } from 'react-redux'
import { GoPlus } from 'react-icons/go'
import { useEffect } from 'react'
import {
	selectIsLoading,
	selectPlannedData,
} from '../../redux/planning/selectors'
import CustomRechart from '../../components/Custom/Recharts/CustomRechart/CustomRechart'
import ActionFormModal from '../../components/Modal/ActionFormModal/ActionFormModal'
import SidePanelCard from '../../components/SidePanel/SidePanelCard/SidePanelCard'
import { useMyTrainingFormContext } from '../../contexts/MyTrainingFormContext'
import ActionButton from '../../components/Common/ActionButton/ActionButton'
import Container from '../../components/Common/Container/Container'
import { useWindowWidth } from '../../contexts/WindowWidthContext'
import BookList from '../../components/Book/BookList/BookList'
import Section from '../../components/Common/Section/Section'
import Loader from '../../components/Common/Loader/Loader'
import s from './StatisticsPage.module.css'
import { planningThunk } from '../../redux/planning/operations'
import TimerBlock from '../../components/Blocks/TimerBlock/TimerBlock'
import clsx from 'clsx'
import MyTrainingForm from '../../components/Form/MyTrainingForm/MyTrainingForm'
import { useTrainingContext } from '../../contexts/TrainingContext'
import CongratulationModal from '../../components/Modal/CongratulationModal/CongratulationModal'
import { useTrainingCompletedSuccessfullyContext } from '../../contexts/TrainingCompletedSuccessfullyContext'

const StatisticsPage = () => {
	const { isMyTrainingFormOpen, setIsMyTrainingFormOpen } =
		useMyTrainingFormContext()
	const { isTraining, onStartTrainingButtonClick } = useTrainingContext()
	const { isTrainingCompletedSuccessfully } =
		useTrainingCompletedSuccessfullyContext()
	const { plannedBooks } = useSelector(selectPlannedData)
	const isLoading = useSelector(selectIsLoading)
	const { windowWidth } = useWindowWidth()
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
			{isTrainingCompletedSuccessfully && <CongratulationModal />}
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
				<div
					className={clsx(
						s.pageLayout,
						isTraining ? s.pageLayoutTraining : s.pageLayoutDefault
					)}
				>
					{isTraining && (
						<Section className='timerSection' moduleClass={s.timerArea}>
							<Container className='innerContainer'>
								<TimerBlock />
							</Container>
						</Section>
					)}

					<Section className='goalSection' moduleClass={s.goalArea}>
						<Container className='innerContainer'>
							<SidePanelCard type='goalToRead' />
						</Container>
					</Section>

					{windowWidth > 768 && !isTraining && (
						<Section className='trainingFormSection' moduleClass={s.formArea}>
							<Container className='innerContainer'>
								<MyTrainingForm />
							</Container>
						</Section>
					)}

					<Section className='planningListSection' moduleClass={s.listArea}>
						<Container className='innerContainer'>
							<BookList
								items={plannedBooks}
								sectionTitle='Planning'
								status='planning'
							/>
							{plannedBooks?.length > 0 && !isTraining && (
								<ActionButton
									className='startTrainingButton'
									type='button'
									title='Почати тренування'
									onClick={onStartTrainingButtonClick}
								/>
							)}
						</Container>
					</Section>

					<Section className='chartSection' moduleClass={s.chartArea}>
						<Container className='innerContainer'>
							<CustomRechart />
						</Container>
					</Section>

					{isTraining && (
						<Section className='resultsSection' moduleClass={s.resultsArea}>
							<Container className='innerContainer'>
								<SidePanelCard type='results' />
							</Container>
						</Section>
					)}

					<Section className='emptySection' moduleClass={s.emptyArea} />
				</div>
			</Container>
		</>
	)
}

export default StatisticsPage
