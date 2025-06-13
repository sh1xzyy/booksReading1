import { useSelector } from 'react-redux'
import { selectIsLoggedIn } from '../../redux/auth/selectors'
import Container from '../Container/Container'
import UserMenu from '../UserMenu/UserMenu'
import AuthNav from '../AuthNav/AuthNav'
import s from './AppBar.module.css'
import clsx from 'clsx'

const AppBar = () => {
	const isLoggedIn = useSelector(selectIsLoggedIn)

	return (
		<header className={s.header}>
			<Container
				className={clsx(
					isLoggedIn && 'headerContainer',
					!isLoggedIn && 'authHeaderContainer'
				)}
			>
				{isLoggedIn ? <UserMenu /> : <AuthNav />}
			</Container>
		</header>
	)
}

export default AppBar
