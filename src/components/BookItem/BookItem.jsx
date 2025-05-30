import { MdMenuBook, MdOutlineStar } from 'react-icons/md'
import { Rating } from 'react-simple-star-rating'
import { getDetailsWrapperClass } from '../../utils/bookList/getDetailsWrapperClass'
import { croppedAuthorByWidth } from '../../utils/bookList/croppedAuthorByWidth'
import { croppedTitleByWidth } from '../../utils/bookList/croppedTitleByWidth'
import { getInfoListClass } from '../../utils/bookList/getInfoListClass'
import { getBookIconClass } from '../../utils/bookList/getBookIconClass'
import { getAuthorClass } from '../../utils/bookList/getAuthorClass'
import { getTitleClass } from '../../utils/bookList/getTitleClass'
import s from './BookItem.module.css'
import ActionButton from '../ActionButton/ActionButton'

const BookItem = ({
	book: { _id, title, author, publishYear, pagesTotal, rating, feedback },
	status,
	windowWidth,
	handleResumeClick,
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
									<Rating
										initialValue={rating}
										readonly={true}
										emptyIcon={<MdOutlineStar className={s.emptyIcon} />}
										fillIcon={<MdOutlineStar className={s.fillIcon} />}
									/>
								</div>
								<ActionButton
									className="summaryButton"
									type='button'
									title="Резюме"
									onClick={() => handleResumeClick({ _id, rating, feedback })}
								/>									
							</div>
						</li>
					)}
				</ul>
			</div>
		</li>
	)
}

export default BookItem
