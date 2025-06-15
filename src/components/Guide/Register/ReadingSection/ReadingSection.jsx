import s from './ReadingSection.module.css'

const RegisterGuideSection = ({ section: { title, messages } }) => {
	return (
		<li className={s.readingSection}>
			<h3 className={s.readingSectionTitle}>{title}</h3>
			<ul className={s.readingBenefitsList}>
				{messages.map((item, index) => (
					<li className={s.readingBenefitItem} key={index}>
						<p className={s.readingBenefitText}>{item}</p>
					</li>
				))}
			</ul>
		</li>
	)
}

export default RegisterGuideSection
