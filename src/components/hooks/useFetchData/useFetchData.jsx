import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { planningThunk } from '../../../redux/planning/operations'

const useFetchData = () => {
	const dispatch = useDispatch()

	useEffect(() => {
		const fetchData = async () => {
			try {
				await dispatch(planningThunk({ method: 'GET' })).unwrap()
			} catch (error) {
				console.error(error)
			}
		}
		fetchData()
	}, [dispatch])
}

export default useFetchData
