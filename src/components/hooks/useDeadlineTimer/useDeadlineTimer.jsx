import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { calculateTimeLeft } from '../../../utils/timer/calculateTimeLeft'
import { selectPlannedData } from '../../../redux/planning/selectors'

export const useDeadlineTimer = () => {
	const { endDate } = useSelector(selectPlannedData)
	const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft(endDate))

	useEffect(() => {
		const timer = setInterval(() => {
			setTimeLeft(calculateTimeLeft(endDate))
		}, 1000)

		return () => clearInterval(timer)
	}, [endDate])

	return { timeLeft }
}
