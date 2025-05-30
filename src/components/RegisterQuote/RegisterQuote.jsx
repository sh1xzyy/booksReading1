import NavigationButton from '../NavigationButton/NavigationButton'
import s from './RegisterQuote.module.css'
import { Link } from 'react-router-dom'

const RegisterQuote = () => {
	return (
		<div className={s.readingInfo}>
			<h2 className={s.title}>Books Reading</h2>
			<ul className={s.sectionList}>
				<li className={s.sectionItem}>
					<h3 className={s.sectionTitle}>Допоможе вам</h3>
					<ul className={s.benefitList}>
						<li className={s.benefitItem}>
							<p className={s.benefitText}>
								Швидше сформулювати свою ціль і розпочати читати
							</p>
						</li>
						<li className={s.benefitItem}>
							<p className={s.benefitText}>
								Пропорційно розподілити навантаження на кожний день
							</p>
						</li>
						<li className={s.benefitItem}>
							<p className={s.benefitText}>Відстежувати особистий успіх</p>
						</li>
					</ul>
				</li>
				<li className={s.sectionItem}>
					<h3 className={s.sectionTitle}>Також ви зможете</h3>
					<ul className={s.benefitList}>
						<li className={s.benefitItem}>
							<p className={s.benefitText}>
								Формувати особисту думку незалежну від інших
							</p>
						</li>
						<li className={s.benefitItem}>
							<p className={s.benefitText}>
								Підвищити свої професійні якості опираючись на нові знання
							</p>
						</li>
						<li className={s.benefitItem}>
							<p className={s.benefitText}>Стати цікавим співрозмовником</p>
						</li>
					</ul>
				</li>
			</ul>
			<div className={s.authButtons}>
				<NavigationButton to='/login' className="loginButton" title="Увійти"/>
				<NavigationButton to='/register' className="registerButton" title="Реєстрація"/>
			</div>
		</div>
	)
}

export default RegisterQuote
