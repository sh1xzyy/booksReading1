import { useDispatch } from 'react-redux'
import { logoutThunk } from '../../../redux/auth/operations'
import toast from 'react-hot-toast'

export const useLogout = () => {
	const dispatch = useDispatch()

	const handleLogout = async () => {
		try {
			await dispatch(logoutThunk()).unwrap()
			toast.success('Ви успішно вийшли з системи!')
		} catch (error) {
			toast.error('Щось пішло не так!')
		}
	}
	return { handleLogout }
}
