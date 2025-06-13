import NavigationButton from '../NavigationButton/NavigationButton'
import s from './AuthNav.module.css'

const AuthNav = () => {
	return (
		<>
			<nav className={s.nav}>
				<NavigationButton className='logo' to='/' title='BR' />
			</nav>
		</>
	)
}

export default AuthNav
