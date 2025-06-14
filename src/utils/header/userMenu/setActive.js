import clsx from 'clsx'

export const setActive = (s, isActive) => clsx(s.navLink, isActive && s.active)
