import clsx from 'clsx'

export const getAuthorClass = (s, status) =>
	clsx(s.description, status === 'finished' && s.descriptionFinished)
