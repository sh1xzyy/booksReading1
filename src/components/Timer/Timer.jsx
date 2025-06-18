import s from './Timer.module.css'

const Timer = ({ timer: { days, hours, minutes, seconds }, title }) => {
	return (
		<>
			<div className={s.timer}>
				<h3 className={s.timerTitle}>{title}</h3>
				<div className={s.timerWrapper}>
					<ul className={s.timeList}>
						<li className={s.timeItem}>
							<div className={s.timeBox}>
								<span className={s.timeValue}>{days || '0'}</span>
								<span className={s.timeLabel}>дн</span>
							</div>
						</li>
						<li className={s.timeItem}>
							<div className={s.timeBox}>
								<span className={s.timeValue}>{hours || '0'}</span>
								<span className={s.timeLabel}>год</span>
							</div>
						</li>
						<li className={s.timeItem}>
							<div className={s.timeBox}>
								<span className={s.timeValue}>{minutes || '0'}</span>
								<span className={s.timeLabel}>хв</span>
							</div>
						</li>
						<li className={s.timeItem}>
							<div className={s.timeBox}>
								<span className={s.timeValue}>{seconds || '0'}</span>
								<span className={s.timeLabel}>сек</span>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</>
	)
}

export default Timer
