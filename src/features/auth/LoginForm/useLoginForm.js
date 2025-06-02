import { useDispatch } from "react-redux"
import toast from "react-hot-toast"
import { loginThunk } from "../../../redux/auth/operations"
import { validationSchema } from "./validationSchema"
import { initialValues } from "./initialValues"

export const useLoginForm = () => {
    const dispatch = useDispatch()

	const handleSubmit = async (value, actions) => {
		try {
			await dispatch(loginThunk(value)).unwrap()
			toast.success('You have successfully logged in')
		} catch (error) {
			toast.error(error)
		} finally {
			actions.resetForm()
		}
	}

    return {initialValues, validationSchema, handleSubmit}
}