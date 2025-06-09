import s from './Container.module.css'

const Container = ({ children, className}) => {
	return <div className={s[className]}>{children}</div>
}

export default Container
