export const croppedTitleByWidth = (title, windowWidth, status) => {
	if (status === 'finished') {
		if (windowWidth < 767) {
			return title.length > 60 ? title.slice(0, 60).padEnd(63, '...') : title
		}
		if (windowWidth >= 768) {
			return title.length > 30 ? title.slice(0, 30).padEnd(33, '...') : title
		}
	}
	if (status === 'reading' || status === 'goingToReading') {
		if (windowWidth < 767) {
			return title.length > 60 ? title.slice(0, 60).padEnd(63, '...') : title
		}
		if (windowWidth >= 768 && windowWidth <= 1267) {
			return title.length > 65 ? title.slice(0, 65).padEnd(68, '...') : title
		}
		if (windowWidth >= 1268) {
			return title.length > 125 ? title.slice(0, 125).padEnd(128, '...') : title
		}
	}
}
