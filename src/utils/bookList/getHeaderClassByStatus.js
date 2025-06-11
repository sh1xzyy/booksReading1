import clsx from 'clsx'

export const getHeaderClassByStatus = (s, status) =>
	clsx(status === 'planning' ? s.planningHeaderList : s.defaultHeaderList)
