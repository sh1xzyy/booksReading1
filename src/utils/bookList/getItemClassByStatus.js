import clsx from 'clsx'

export const getItemClassByStatus = (s, status) =>
	clsx(status === 'planning' || status === 'empty' ? s.planningItem : s.item)
