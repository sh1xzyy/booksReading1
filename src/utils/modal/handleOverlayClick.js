export const handleOverlayClick = (e, isModalOpen) => {
	if (e.target === e.currentTarget) {
		isModalOpen(false)
	}
}