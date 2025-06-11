import clsx from 'clsx'

export const getAuthorClass = (s, status) =>
	clsx(status === 'finished' ? s.authorFinished : s.defaultAuthor)
