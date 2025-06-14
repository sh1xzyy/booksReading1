import { useSelector } from 'react-redux'
import { selectIsLoggedIn } from '../../../redux/auth/selectors'
import Container from '../../Common/Container/Container'
import UserMenu from '../UserMenu/UserMenu'
import AuthNav from '../AuthNav/AuthNav'
import s from './AppBar.module.css'
import { getClassByAuth } from '../../../utils/header/appBar/getClassByAuth'

const AppBar = () => {
	const isLoggedIn = useSelector(selectIsLoggedIn)
	return (
		<header className={s.header}>
			<Container className={getClassByAuth(isLoggedIn)}>
				{isLoggedIn ? <UserMenu /> : <AuthNav />}
			</Container>
		</header>
	)
}

export default AppBar
