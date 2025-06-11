import clsx from 'clsx'

export const getTitleClass = (s, status) =>
	clsx(status === 'finished' ? s.titleFinished : s.defaultTitle)
