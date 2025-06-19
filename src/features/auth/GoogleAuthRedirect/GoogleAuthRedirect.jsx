import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { userDataThunk } from '../../../redux/auth/operations'

const GoogleAuthRedirect = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()

	useEffect(() => {
		const query = new URLSearchParams(window.location.search)
		const accessToken = query.get('accessToken')
		const refreshToken = query.get('refreshToken')
		const sid = query.get('sid')

		if (accessToken && refreshToken && sid) {
			dispatch({
				type: 'auth/login/fulfilled',
				payload: {
					userData: { name: 'Google User', email: '' },
					accessToken,
					refreshToken,
					sid,
				},
			})

			dispatch(userDataThunk()).then(() => {
				navigate('/library')
			})
		} else {
			navigate('/login')
		}
	}, [dispatch, navigate])

	return <p>Вхід через Google...</p>
}

export default GoogleAuthRedirect
