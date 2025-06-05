import { PiHouseLineBold } from 'react-icons/pi'
import { MdMenuBook } from 'react-icons/md'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import NavigationButton from '../NavigationButton/NavigationButton'
import { useLogout } from '../../features/auth/Logout/useLogout'
import { selectUserData } from '../../redux/auth/selectors'
import { setActive } from '../../utils/userMenu/setActive'
import ActionButton from '../ActionButton/ActionButton'
import s from './UserMenu.module.css'
import ConfirmModal from '../ConfirmModal/ConfirmModal'
import { useState } from 'react'

const UserMenu = () => {
	const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false)
	const { name } = useSelector(selectUserData)
	const {handleLogout} = useLogout()

	
	return (
		<>
		{isConfirmModalOpen && 
		<ConfirmModal title="Якщо Ви вийдете з програми незбережені дані будуть втрачені" 
		onClick={handleLogout}
		setIsConfirmModalOpen={setIsConfirmModalOpen}/>
		}
			<NavigationButton className="logo" to='/' title="BR"/>
			<div className={s.userDesktopInfo}>
				<span className={s.shortName}>{name?.[0].toUpperCase() || ''}</span>
				<span className={s.userName}>
					{name?.[0].toUpperCase() + name?.slice(1) || ''}
				</span>
			</div>
			<nav className={s.nav}>
				<ul className={s.navList}>
					<li className={s.navLinkItem}>
						<NavLink to='/statistics' className={({isActive}) => setActive(isActive, s)}>
							<MdMenuBook color='#A6ABB9' size={22} />
						</NavLink>
					</li>
					<li className={s.navLinkItem}>
						<NavLink to='/library' className={({isActive}) => setActive(isActive, s)}>
							<PiHouseLineBold color='#A6ABB9' size={20} />
						</NavLink>
					</li>
				</ul>
				<div className={s.userInfo}>
					<span className={s.shortName}>{name?.[0].toUpperCase() || ''}</span>
				</div>
				<ActionButton className="logout" type='button' title="Выход" onClick={() => setIsConfirmModalOpen(true)}/>
			</nav>
			</>
	)
}

export default UserMenu
