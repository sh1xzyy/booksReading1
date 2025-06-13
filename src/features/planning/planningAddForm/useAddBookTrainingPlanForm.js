import { useDispatch } from 'react-redux'
import toast from 'react-hot-toast'
import { validationSchema } from './validationSchema'
import { initialValues } from './initialValues'
import { planningThunk } from '../../../redux/planning/operations'
import { useMyTrainingFormContext } from '../../../contexts/MyTrainingFormContext'
import { userDataThunk } from '../../../redux/auth/operations'

export const useAddBookTrainingPlanForm = () => {
	const { setIsMyTrainingFormOpen } = useMyTrainingFormContext()
	const dispatch = useDispatch()

	const handleSubmit = async (value, { resetForm }) => {
		try {
			await dispatch(planningThunk({ method: 'POST', body: value })).unwrap()
			toast.success('You have add a new plan!')
			setIsMyTrainingFormOpen(false)
			await dispatch(userDataThunk()).unwrap()
		} catch (error) {
			toast.error(error.message)
		} finally {
			resetForm()
		}
	}

	return { initialValues, validationSchema, handleSubmit }
}
