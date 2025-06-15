export const calculateRemainingTimeToNewYear = () => {
	const newYear = new Date(new Date().getFullYear() + 1, 0, 1)
	const now = new Date()
	const daysLeft = newYear - now

	if (daysLeft <= 0) {
		return { days: 0, hours: 0, minutes: 0, seconds: 0 }
	}

	const days = Math.floor(daysLeft / (1000 * 60 * 60 * 24))
	const hours = Math.floor((daysLeft / (1000 * 60 * 60)) % 24)
	const minutes = Math.floor((daysLeft / (1000 * 60)) % 60)
	const seconds = Math.floor((daysLeft / 1000) % 60)

	return { days, hours, minutes, seconds }
}
