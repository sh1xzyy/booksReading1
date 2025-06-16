import s from './LoginGuide.module.css'

const LoginGuide = () => {
	return (
		<div className={s.loginGuideWrapper}>
			<span className={s.quoteMark}>“</span>
			<p className={s.quoteText}>
				Книги — это корабли мысли, странствующие по волнам времени и бережно
				несущие свой драгоценный груз от поколения к поколению.
			</p>
			<span className={s.quoteAuthor}>Бэкон Ф.</span>
		</div>
	)
}

export default LoginGuide
