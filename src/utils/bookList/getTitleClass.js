import clsx from 'clsx'

export const getTitleClass = (s, status) =>
	clsx(s.title, status === 'finished' && s.titleFinished)
