import s from './Section.module.css'

const Section = ({ children, className = 'section' }) => {
	return <section className={s[className]}>{children}</section>
}

export default Section
