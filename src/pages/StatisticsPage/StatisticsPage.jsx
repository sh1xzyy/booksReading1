import ActionButton from '../../components/ActionButton/ActionButton'
import Container from '../../components/Container/Container'
import GoalToRead from '../../components/GoalToRead/GoalToRead'
import { useWindowWidth } from '../../contexts/WindowWidthContext'
import { GoPlus } from 'react-icons/go'
import ActionFormModal from '../../components/ActionFormModal/ActionFormModal'
import { useMyTrainingFormContext } from '../../contexts/MyTrainingFormContext'
import Section from '../../components/Section/Section'
import MyTrainingForm from '../../components/MyTrainingForm/MyTrainingForm'

const StatisticsPage = () => {
	const {isMyTrainingFormOpen, setIsMyTrainingFormOpen} = useMyTrainingFormContext()
	const { windowWidth } = useWindowWidth()

	return (
		<>
			<Container>
				<GoalToRead />
			</Container>

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

{windowWidth > 768 && (
		<Section>
			<Container>
				<MyTrainingForm/>
			</Container>
		</Section>
	)}
		</>
	)
}

export default StatisticsPage
