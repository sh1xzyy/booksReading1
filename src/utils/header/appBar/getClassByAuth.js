import clsx from 'clsx'

export const getClassByAuth = isLoggedIn => {
	const className = clsx(
		isLoggedIn && 'headerContainer',
		!isLoggedIn && 'authHeaderContainer'
	)

	return className
}
