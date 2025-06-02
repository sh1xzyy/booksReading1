import { useDispatch } from "react-redux"
import { logoutThunk } from "../../../redux/auth/operations"
import toast from "react-hot-toast"

export const useLogout = () => {
    const dispatch = useDispatch()

    const handleLogout = async () => {
        try {
            await dispatch(logoutThunk()).unwrap()
            toast.success('You have successfully logout!')
        } catch (error) {
            toast.error('Something went wrong!')
            console.dir(error)
        }
    }
    return {handleLogout}
}