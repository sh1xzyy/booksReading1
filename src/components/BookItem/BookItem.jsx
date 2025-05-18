import { IoMdStarOutline } from 'react-icons/io'
import { MdMenuBook } from 'react-icons/md'
import { getDetailsWrapperClass } from '../../utils/bookList/getDetailsWrapperClass'
import { croppedAuthorByWidth } from '../../utils/bookList/croppedAuthorByWidth'
import { croppedTitleByWidth } from '../../utils/bookList/croppedTitleByWidth'
import { getInfoListClass } from '../../utils/bookList/getInfoListClass'
import { getBookIconClass } from '../../utils/bookList/getBookIconClass'
import { getAuthorClass } from '../../utils/bookList/getAuthorClass'
import { getTitleClass } from '../../utils/bookList/getTitleClass'
import s from './BookItem.module.css'

const BookItem = ({
	data: { title, author, publishYear, pagesTotal },
	status,
	windowWidth,
}) => {
	return (
		<li className={s.item}>
			<MdMenuBook className={getBookIconClass(s, status)} />
			<div className={getDetailsWrapperClass(s, status)}>
				<span className={getTitleClass(s, status)} title={title}>
					{croppedTitleByWidth(title, windowWidth, status)}
				</span>
				<ul className={getInfoListClass(s, status)}>
					<li className={s.infoItem}>
						<div className={s.infoRow}>
							<span className={s.label}>Автор:</span>
							<span className={getAuthorClass(s, status)} title={author}>
								{croppedAuthorByWidth(author, windowWidth, status)}
							</span>
						</div>
					</li>
					<li className={s.infoItem}>
						<div className={s.infoRow}>
							<span className={s.label}>Рік:</span>
							<span className={s.description}>{publishYear}</span>
						</div>
					</li>
					<li className={s.infoItem}>
						<div className={s.infoRow}>
							<span className={s.label}>Стор.:</span>
							<span className={s.description}>{pagesTotal}</span>
						</div>
					</li>
					{status === 'finished' && (
						<li className={s.infoItem}>
							<div className={s.ratingWrapper}>
								<div className={s.infoRow}>
									<span className={s.label}>Рейтинг:</span>
									<span className={s.stars}>
										<IoMdStarOutline className={s.starIcon} />
										<IoMdStarOutline className={s.starIcon} />
										<IoMdStarOutline className={s.starIcon} />
										<IoMdStarOutline className={s.starIcon} />
										<IoMdStarOutline className={s.starIcon} />
									</span>
								</div>
								<button className={s.summaryButton} type='button'>
									Резюме
								</button>
							</div>
						</li>
					)}
				</ul>
			</div>
		</li>
	)
}

export default BookItem
