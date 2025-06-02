import clsx from "clsx";

export const setActive = (isActive, s) => clsx(s.navLink, isActive && s.active)
