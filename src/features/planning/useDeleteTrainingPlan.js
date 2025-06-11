import { useDispatch } from 'react-redux'
import { deleteBookFromTrainingPlanThunk } from '../../redux/book/operations'
import toast from 'react-hot-toast'

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
