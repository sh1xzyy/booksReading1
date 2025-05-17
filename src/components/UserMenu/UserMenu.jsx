import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import { PiHouseLineBold } from 'react-icons/pi'
import { MdMenuBook } from 'react-icons/md'
import toast from 'react-hot-toast'
import clsx from 'clsx'
import { selectUserData } from '../../redux/user/selectors'
import { logoutThunk } from '../../redux/auth/operations'
import s from './UserMenu.module.css'

const UserMenu = () => {
	const dispatch = useDispatch()
	const { name } = useSelector(selectUserData)

	const setActive = ({ isActive }) => clsx(s.navLink, isActive && s.active)

	const handleLogout = async () => {
		try {
			await dispatch(logoutThunk()).unwrap()
			toast.success('You have successfully logout!')
		} catch (error) {
			toast.error('Something went wrong!')
			console.dir(error)
		}
	}

	return (
		<>
			<Link className={s.logo} to='/'>
				BR
			</Link>
			<div className={s.userDesktopInfo}>
				<span className={s.shortName}>{name[0]?.toUpperCase() || ''}</span>
				<span className={s.userName}>
					{name[0]?.toUpperCase() + name.slice(1) || ''}
				</span>
			</div>
			<nav className={s.nav}>
				<ul className={s.navList}>
					<li className={s.navLinkItem}>
						<NavLink to='/statistics' className={setActive}>
							<MdMenuBook color='#A6ABB9' size={22} />
						</NavLink>
					</li>
					<li className={s.navLinkItem}>
						<NavLink to='/library' className={setActive}>
							<PiHouseLineBold color='#A6ABB9' size={20} />
						</NavLink>
					</li>
				</ul>
				<div className={s.userInfo}>
					<span className={s.shortName}>{name[0]?.toUpperCase() || ''}</span>
				</div>
				<button type='button' className={s.logout} onClick={handleLogout}>
					Выход
				</button>
			</nav>
		</>
	)
}

export default UserMenu
