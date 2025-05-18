import clsx from 'clsx'

export const getDetailsWrapperClass = (s, status) =>
	clsx(s.detailsWrapper, status === 'finished' && s.detailsFinished)
