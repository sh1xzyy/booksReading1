import s from './Timer.module.css'

const Timer = ({ title }) => {
	return (
		<>
			<div className={s.timer}>
				<h3 className={s.timerTitle}>{title}</h3>
				<div className={s.timerWrapper}>
					<ul className={s.timeList}>
						<li className={s.timeItem}>
							<div className={s.timeBox}>
								<span className={s.timeValue}>150</span>
								<span className={s.timeLabel}>дн</span>
							</div>
						</li>
						<li className={s.timeItem}>
							<div className={s.timeBox}>
								<span className={s.timeValue}>15</span>
								<span className={s.timeLabel}>год</span>
							</div>
						</li>
						<li className={s.timeItem}>
							<div className={s.timeBox}>
								<span className={s.timeValue}>03</span>
								<span className={s.timeLabel}>хв</span>
							</div>
						</li>
						<li className={s.timeItem}>
							<div className={s.timeBox}>
								<span className={s.timeValue}>02</span>
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
