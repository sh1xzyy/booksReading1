import ActionButton from '../../components/ActionButton/ActionButton'
import Container from '../../components/Container/Container'
import GoalToRead from '../../components/GoalToRead/GoalToRead'
import { useWindowWidth } from '../../contexts/WindowWidthContext'
import { GoPlus } from 'react-icons/go'
import ActionFormModal from '../../components/ActionFormModal/ActionFormModal'
import { useMyTrainingFormContext } from '../../contexts/MyTrainingFormContext'
import Section from '../../components/Section/Section'
import MyTrainingForm from '../../components/MyTrainingForm/MyTrainingForm'
import s from "./StatisticsPage.module.css"

const StatisticsPage = () => {
	const {isMyTrainingFormOpen, setIsMyTrainingFormOpen} = useMyTrainingFormContext()
	const { windowWidth } = useWindowWidth()

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

		<Container className="statisticsPageContainer">
			<div className={s.statisticsWrapper}>
				<div className={s.rightColumn}>
					<Section className='readingGoalSection'>
						<Container className="innerContainer">
							<GoalToRead />
						</Container>
					</Section>
				</div>
				<div className={s.leftColumn}>
					{windowWidth > 768 && (
					<Section className='trainingFormSection'>
						<Container className="innerContainer">
							<MyTrainingForm/>
						</Container>
					</Section>
					)}
				</div>
			</div>
		</Container>


		</>
	)
}

export default StatisticsPage
