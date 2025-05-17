import { useSelector } from 'react-redux'
import { selectIsLoggedIn } from '../../redux/auth/selectors'
import Container from '../Container/Container'
import UserMenu from '../UserMenu/UserMenu'
import AuthNav from '../AuthNav/AuthNav'
import s from './AppBar.module.css'

const AppBar = () => {
	const isLoggedIn = useSelector(selectIsLoggedIn)
	return (
		<header className={s.header}>
			<Container className={s.headerContainer}>
				{isLoggedIn ? <UserMenu /> : <AuthNav />}
			</Container>
		</header>
	)
}

export default AppBar
