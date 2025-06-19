import { useTrainingCompletedSuccessfullyContext } from '../../../../contexts/TrainingCompletedSuccessfullyContext'
import BaseModal from '../../BaseModal/BaseModal'
import TrainingFailureModal from '../TrainingFailureModal/TrainingFailureModal'
import TrainingSuccessModal from '../TrainingSuccessModal/TrainingSuccessModal'

const TrainingResultModal = () => {
	const { setIsTrainingCompletedSuccessfully } =
		useTrainingCompletedSuccessfullyContext()

	const status = true
	return (
		<BaseModal
			className='trainingResultModal'
			isModalOpen={setIsTrainingCompletedSuccessfully}
		>
			{status ? <TrainingSuccessModal /> : <TrainingFailureModal />}
		</BaseModal>
	)
}

export default TrainingResultModal
