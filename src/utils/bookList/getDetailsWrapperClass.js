import clsx from 'clsx'

export const getDetailsWrapperClass = (s, status) =>
	clsx(
		status === 'finished'
			? s.finishedDetailsWrapper
			: status === 'planning'
			? s.planningDetailsWrapper
			: s.defaultDetailsWrapper
	)
