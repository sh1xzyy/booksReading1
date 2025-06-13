import { useDispatch } from 'react-redux'
import toast from 'react-hot-toast'
import { deleteBookFromTrainingPlanThunk } from '../../redux/planning/operations'

export const useDeleteTrainingPlan = () => {
	const dispatch = useDispatch()

	const deleteBookFromPlan = async _id => {
		try {
			await dispatch(deleteBookFromTrainingPlanThunk(_id)).unwrap()
			toast.success('You have successfully delete a book plan!')
		} catch (error) {
			toast.error(error.message)
		}
	}
	return { deleteBookFromPlan }
}
