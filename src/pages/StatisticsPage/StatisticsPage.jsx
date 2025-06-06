import { useState } from 'react'
import ActionButton from '../../components/ActionButton/ActionButton'
import Container from '../../components/Container/Container'
import GoalToRead from '../../components/GoalToRead/GoalToRead'
import { useWindowWidth } from '../../contexts/WindowWidthContext'
import { GoPlus } from 'react-icons/go'
import ActionFormModal from '../../components/ActionFormModal/ActionFormModal'

const StatisticsPage = () => {
	const [isMyTrainingFormOpen, setIsMyTrainingFormOpen] = useState(false)
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
		</>
	)
}

export default StatisticsPage
