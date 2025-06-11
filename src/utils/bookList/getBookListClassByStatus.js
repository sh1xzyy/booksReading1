import clsx from 'clsx'

export const getBookListClassByStatus = (s, status) =>
	clsx(status === 'planning' ? s.planningBookList : s.defaultBookList)
