import { NavLink } from 'react-router-dom'
import NavigationButton from '../NavigationButton/NavigationButton'
import s from './AuthNav.module.css'
import clsx from 'clsx'

const AuthNav = () => {
	const setActive = ({ isActive }) => clsx(s.navLink, isActive && s.active)

	return (
		<>
			<NavigationButton className="logo" to='/' title="BR"/>
			<nav className={s.nav}>
				<ul className={s.navList}>
					<li className={s.navLinkItem}>
						<NavLink className={setActive} to='/register'>
							Register
						</NavLink>
					</li>
					<li className={s.navLink}>
						<NavLink className={setActive} to='/login'>
							Login
						</NavLink>
					</li>
				</ul>
			</nav>
		</>
	)
}

export default AuthNav
