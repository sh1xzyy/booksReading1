import {
	LineChart,
	Line,
	Tooltip,
	ResponsiveContainer,
	CartesianGrid,
	ReferenceLine,
	YAxis,
} from 'recharts'
import { CustomDot } from '../CustomDot/CustomDot'
import s from './CustomRechart.module.css'
import './CustomRechart.css'

const data = [
	{ plan: 25, fact: 20 },
	{ plan: 32, fact: 34 },
	{ plan: 28, fact: 30 },
	{ plan: 34, fact: 22 },
	{ plan: 45, fact: 18 },
	{ plan: 45, fact: 18 },
	{ plan: 1000, fact: 800 },
]

const CustomRechart = () => {
	return (
		<div className={s.chartWrapper}>
			<div className={s.chartDescription}>
				<span className={s.chartTitle}>Кількість сторінок / День</span>
				<span className={s.pagesCount}>34</span>
			</div>

			<ResponsiveContainer>
				<LineChart data={data}>
					<CartesianGrid stroke='#b1b5c2' horizontal={false} vertical={true} />

					<ReferenceLine y={0} stroke='#b1b5c2' strokeWidth={1} />
					<Tooltip />
					{data && (
						<>
							<Line
								type='monotone'
								dataKey='plan'
								strokeWidth={3}
								dot={<CustomDot stroke='#001F54' />}
								className={s.planLine}
								style={{
									stroke: '#091e3f',
									boxShadow: '0 4px 4px 0 rgba(0,0,0, .25)',
								}}
							/>
							<Line
								type='monotone'
								dataKey='fact'
								strokeWidth={3}
								dot={<CustomDot stroke='#FA7A47' />}
								style={{
									stroke: '#ff6b08',
									boxShadow: '0 4px 4px 0 rgba(0,0,0, .25)',
								}}
							/>
						</>
					)}
				</LineChart>
			</ResponsiveContainer>

			<div className={s.hour}>Час</div>
		</div>
	)
}

export default CustomRechart
