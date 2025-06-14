import { PiHouseLineBold } from 'react-icons/pi'
import { MdMenuBook } from 'react-icons/md'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import ConfirmLogoutModal from '../../Modal/ConfirmLogoutModal/ConfirmLogoutModal'
import NavigationButton from '../../Common/NavigationButton/NavigationButton'
import { setActive } from '../../../utils/header/userMenu/setActive'
import { useLogout } from '../../../features/auth/Logout/useLogout'
import ActionButton from '../../Common/ActionButton/ActionButton'
import { selectUserData } from '../../../redux/auth/selectors'
import s from './UserMenu.module.css'

const UserMenu = () => {
	const [isConfirmModalOpen, setIsConfirmLogoutModalOpen] = useState(false)
	const { name } = useSelector(selectUserData)
	const { handleLogout } = useLogout()

	return (
		<>
			{isConfirmModalOpen && (
				<ConfirmLogoutModal
					title='Якщо Ви вийдете з програми незбережені дані будуть втрачені'
					onClick={handleLogout}
					isModalOpen={setIsConfirmLogoutModalOpen}
				/>
			)}
			<NavigationButton className='logo' to='/' title='BR' />
			<div className={s.userDesktopInfo}>
				<span className={s.shortName}>{name?.[0].toUpperCase() || ''}</span>
				<span className={s.userName}>
					{name?.[0].toUpperCase() + name?.slice(1) || ''}
				</span>
			</div>
			<nav className={s.nav}>
				<ul className={s.navList}>
					<li className={s.navLinkItem}>
						<NavLink
							to='/statistics'
							className={({ isActive }) => setActive(s, isActive)}
						>
							<MdMenuBook color='#A6ABB9' size={22} />
						</NavLink>
					</li>
					<li className={s.navLinkItem}>
						<NavLink
							to='/library'
							className={({ isActive }) => setActive(s, isActive)}
						>
							<PiHouseLineBold color='#A6ABB9' size={20} />
						</NavLink>
					</li>
				</ul>
				<div className={s.userInfo}>
					<span className={s.shortName}>{name?.[0].toUpperCase() || ''}</span>
				</div>
				<ActionButton
					className='logout'
					type='button'
					title='Выход'
					onClick={() => setIsConfirmLogoutModalOpen(true)}
				/>
			</nav>
		</>
	)
}

export default UserMenu
