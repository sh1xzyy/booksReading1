import clsx from 'clsx'

export const getInfoListClass = (s, status) =>
	clsx(s.infoList, status === 'finished' && s.infoListFinished)
