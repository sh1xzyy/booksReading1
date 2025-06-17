import clsx from 'clsx'
import s from './Section.module.css'

const Section = ({ children, className, moduleClass }) => {
	return (
		<section className={clsx(s[className], moduleClass && moduleClass)}>
			{children}
		</section>
	)
}

export default Section
