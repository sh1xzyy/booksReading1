import { useDispatch, useSelector } from 'react-redux'
import { GoPlus } from 'react-icons/go'
import { useEffect } from 'react'
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
import { planningThunk } from '../../redux/planning/operations'
import BookList from '../../components/Book/BookList/BookList'
import Section from '../../components/Common/Section/Section'
import Loader from '../../components/Common/Loader/Loader'
import s from './StatisticsPage.module.css'
import Timer from '../../components/Timer/Timer'

const StatisticsPage = () => {
	const { isMyTrainingFormOpen, setIsMyTrainingFormOpen } =
		useMyTrainingFormContext()
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
						<Section className='timerSection'>
							<Container className='innerContainer'>
								<div className={s.timersGroup}>
									<Timer title='До закінчення року залишилось' />
									<Timer title='До досягнення мети залишилось' />
								</div>
							</Container>
						</Section>

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
								{plannedBooks?.length > 0 && (
									<ActionButton
										className='startTrainingButton'
										type='button'
										title='Почати тренування'
										onClick={() => console.log('Start training Clicked')}
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
