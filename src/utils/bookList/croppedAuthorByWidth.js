export const croppedAuthorByWidth = (author, windowWidth, status) => {
	if (status === 'finished') {
		if (windowWidth < 767) {
			return author.length > 25 ? author.slice(0, 25).padEnd(28, '...') : author
		}
		if (windowWidth >= 768 && windowWidth <= 1267) {
			return author.length > 20 ? author.slice(0, 20).padEnd(23, '...') : author
		}
		if (windowWidth >= 1268) {
			return author.length > 50 ? author.slice(0, 50).padEnd(53, '...') : author
		}
	}
	if (
		status === 'reading' ||
		status === 'goingToReading' ||
		status === 'planning'
	) {
		if (windowWidth <= 1267) {
			return author.length > 35 ? author.slice(0, 35).padEnd(38, '...') : author
		}
		if (windowWidth >= 1268) {
			return author.length > 80 ? author.slice(0, 80).padEnd(83, '...') : author
		}
	}
	if (status === 'planning') {
		if (windowWidth <= 1267) {
			return author.length > 25 ? author.slice(0, 25).padEnd(28, '...') : author
		}
		if (windowWidth >= 1268) {
			return author.length > 40 ? author.slice(0, 40).padEnd(43, '...') : author
		}
	}
}
