import { useDispatch, useSelector } from 'react-redux'
import { GoPlus } from 'react-icons/go'
import toast from 'react-hot-toast'
import { useEffect } from 'react'
import { useMyTrainingFormContext } from '../../contexts/MyTrainingFormContext'
import ActionFormModal from '../../components/ActionFormModal/ActionFormModal'
import MyTrainingForm from '../../components/MyTrainingForm/MyTrainingForm'
import ActionButton from '../../components/ActionButton/ActionButton'
import { useWindowWidth } from '../../contexts/WindowWidthContext'
import GoalToRead from '../../components/GoalToRead/GoalToRead'
import { selectPlanningData } from '../../redux/planning/selectors'
import { planningThunk } from '../../redux/planning/operations'
import Container from '../../components/Container/Container'
import BookList from '../../components/BookList/BookList'
import Section from '../../components/Section/Section'
import s from './StatisticsPage.module.css'

const StatisticsPage = () => {
	const { isMyTrainingFormOpen, setIsMyTrainingFormOpen } =
		useMyTrainingFormContext()
	const { books } = useSelector(selectPlanningData)
	const { windowWidth } = useWindowWidth()
	const dispatch = useDispatch()

	useEffect(() => {
		const fetchData = async () => {
			try {
				await dispatch(planningThunk({ method: 'GET' })).unwrap()
			} catch (error) {
				toast.error(error.message)
			}
		}
		fetchData()
	}, [dispatch])

	return (
		<>
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
				<div className={s.statisticsWrapper}>
					<div className={s.rightColumn}>
						<Section className='readingGoalSection'>
							<Container className='innerContainer'>
								<GoalToRead />
							</Container>
						</Section>
					</div>

					<div className={s.leftColumn}>
						{windowWidth > 768 && (
							<Section className='trainingFormSection'>
								<Container className='innerContainer'>
									<MyTrainingForm />
								</Container>
							</Section>
						)}

						<Section className='planningListSection'>
							<Container className='container'>
								<BookList
									items={books}
									sectionTitle='Planning'
									status='planning'
								/>
								{books?.length > 0 && (
									<ActionButton
										className='startTrainingButton'
										type='button'
										title='Почати тренування'
										onClick={() => console.log('Start training Clicked')}
									/>
								)}
							</Container>
						</Section>
					</div>
				</div>
			</Container>
		</>
	)
}

export default StatisticsPage
