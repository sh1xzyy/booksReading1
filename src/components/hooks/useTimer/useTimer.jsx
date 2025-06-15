import { useEffect, useState } from 'react'
import { calculateRemainingTimeToNewYear } from '../../../utils/timer/calculateRemainingTimeToNewYear'

const useTimer = () => {
	const [newYearTime, setNewYearTime] = useState(
		calculateRemainingTimeToNewYear()
	)
	useEffect(() => {
		const timer = setInterval(() => {
			setNewYearTime(calculateRemainingTimeToNewYear())
		}, 1000)

		return () => clearInterval(timer)
	}, [])
	return { newYearTime }
}

export default useTimer
