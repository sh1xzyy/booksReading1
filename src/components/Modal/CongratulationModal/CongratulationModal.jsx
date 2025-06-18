import { useTrainingCompletedSuccessfullyContext } from '../../../contexts/TrainingCompletedSuccessfullyContext'
import ActionButton from '../../Common/ActionButton/ActionButton'
import BaseModal from '../BaseModal/BaseModal'
import s from './CongratulationModal.module.css'
const CongratulationModal = () => {
	const { setIsTrainingCompletedSuccessfully } =
		useTrainingCompletedSuccessfullyContext()
	return (
		<BaseModal
			className='congratulationModal'
			isModalOpen={setIsTrainingCompletedSuccessfully}
		>
			<svg width={54} height={54}>
				<use href='/icons/icons.svg#icon-like-palm'></use>
			</svg>
			<p className={s.text}>
				Ти молодчина,
				<br /> але потрібно швидше!
				<br /> Наступного разу тобі все вдасться)
			</p>
			<div className={s.buttonsWrapper}>
				<ActionButton
					className='confirmButton'
					type='button'
					title='Новє тренування'
					onClick={() => console.log('Go out')}
				/>
				<ActionButton
					className='cancelButton'
					type='button'
					title='Назад'
					onClick={() => console.log('Cancel')}
				/>
			</div>
		</BaseModal>
	)
}

export default CongratulationModal
