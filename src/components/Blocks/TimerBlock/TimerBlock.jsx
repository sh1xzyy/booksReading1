import { useDeadlineTimer } from '../../hooks/useDeadlineTimer/useDeadlineTimer'
import useTimer from '../../hooks/useTimer/useTimer'
import Timer from '../../Timer/Timer'
import s from './TimerBlock.module.css'

const TimerBlock = () => {
	const { newYearTime } = useTimer()
	const { timeLeft } = useDeadlineTimer()

	return (
		<div className={s.timersGroup}>
			<Timer timer={newYearTime} title='До закінчення року залишилось' />
			<Timer timer={timeLeft} title='До досягнення мети залишилось' />
		</div>
	)
}

export default TimerBlock
