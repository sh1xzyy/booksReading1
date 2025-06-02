import { useDispatch } from "react-redux"
import toast from "react-hot-toast"
import { registerThunk } from "../../../redux/auth/operations"
import { validationSchema } from "./validationSchema"
import { initialValues } from "./initialValues"

export const useRegisterForm = () => {
        const dispatch = useDispatch()
    
        const handleSubmit = async ({ name, email, password }, actions) => {
            try {
                await dispatch(registerThunk({ name, email, password })).unwrap()
                toast.success('You have successfully registered.')
            } catch (error) {
                toast.error(error)
            } finally {
                actions.resetForm()
            }
        }
    return {initialValues, validationSchema, handleSubmit}
}