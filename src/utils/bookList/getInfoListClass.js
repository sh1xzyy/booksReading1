import clsx from 'clsx'

export const getInfoListClass = (s, status) =>
	clsx(
		status === 'finished'
			? s.finishedInfoList
			: status === 'planning'
			? s.planningInfoList
			: s.defaultInfoList
	)
