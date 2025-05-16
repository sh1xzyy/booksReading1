import s from './LoginQuote.module.css'

const LoginQuote = () => {
	return (
		<div className={s.loginQuote}>
			<span className={s.quoteMark}>“</span>
			<p className={s.quoteText}>
				Книги — это корабли мысли, странствующие по волнам времени и бережно
				несущие свой драгоценный груз от поколения к поколению.
			</p>
			<span className={s.quoteAuthor}>Бэкон Ф.</span>
		</div>
	)
}

export default LoginQuote
