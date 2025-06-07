import { useDispatch } from 'react-redux'
import toast from 'react-hot-toast'
import { validationSchema } from './validationSchema'
import { initialValues } from './initialValues'
import { addBookTrainingPlanThunk } from '../../redux/planning/operations'
import { useMyTrainingFormContext } from '../../contexts/MyTrainingFormContext'

export const useAddBookTrainingPlanForm = () => {
	const { setIsMyTrainingFormOpen } = useMyTrainingFormContext()
	const dispatch = useDispatch()

	const handleSubmit = async(value, {resetForm}) => {
		try {
			await dispatch(addBookTrainingPlanThunk(value)).unwrap()
			setIsMyTrainingFormOpen(false)
			toast.success("You have add a new plan!")
		} catch (error) {
			toast.error(error.message)			
		}finally{
			resetForm()
		}
	}

	return { initialValues, validationSchema, handleSubmit }
}
