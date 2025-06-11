import clsx from 'clsx'

export const getTitleClassByStatus = (s, status) =>
	clsx(status === 'planning' ? 'visually-hidden' : s.sectionTitle)
