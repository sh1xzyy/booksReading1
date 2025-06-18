import { MdMenuBook, MdOutlineStar } from 'react-icons/md'
import { Rating } from 'react-simple-star-rating'
import s from './BookItem.module.css'
import { useDeleteTrainingPlan } from '../../../features/planning/useDeleteTrainingPlan'
import { getItemClassByStatus } from '../../../utils/bookList/getItemClassByStatus'
import { getBookIconClass } from '../../../utils/bookList/getBookIconClass'
import { getDetailsWrapperClass } from '../../../utils/bookList/getDetailsWrapperClass'
import { getTitleClass } from '../../../utils/bookList/getTitleClass'
import { croppedTitleByWidth } from '../../../utils/bookList/croppedTitleByWidth'
import ActionButton from '../../Common/ActionButton/ActionButton'
import { getInfoListClass } from '../../../utils/bookList/getInfoListClass'
import { getAuthorClass } from '../../../utils/bookList/getAuthorClass'
import { croppedAuthorByWidth } from '../../../utils/bookList/croppedAuthorByWidth'
import { useTrainingContext } from '../../../contexts/TrainingContext'
import { Formik } from 'formik'
import { nanoid } from '@reduxjs/toolkit'
import clsx from 'clsx'

const BookItem = ({ book, status, windowWidth, handleResumeClick }) => {
	const {
		_id = '',
		title = '',
		author = '',
		publishYear = '',
		pagesTotal = '',
		rating = 0,
		feedback = '',
	} = book || {}
	const { deleteBookFromPlan } = useDeleteTrainingPlan()
	const { isTraining } = useTrainingContext()

	const id = nanoid()

	return (
		<li className={getItemClassByStatus(s, status)}>
			{status === 'planning' && isTraining ? (
				<div className={s.fieldWrapper}>
					<label className={s.checkboxLabel} htmlFor={id}>
						<input
							className={clsx('visually-hidden', s.checkbox)}
							type='checkbox'
							name='checkbox'
							id={id}
						/>
						<span className={s.customCheckbox}></span>
						<svg className={s.checkMark} width={12} height={12}>
							<use href='/icons/icons.svg#icon-check-mark'></use>
						</svg>
					</label>
				</div>
			) : (
				<MdMenuBook className={getBookIconClass(s, status)} />
			)}
			{status === 'empty' ? (
				<span className={s.emptySpan}>...</span>
			) : (
				<div className={getDetailsWrapperClass(s, status)}>
					<span className={getTitleClass(s, status)} title={title}>
						{croppedTitleByWidth(title, windowWidth, status)}
					</span>
					<ActionButton
						className='mobileDeleteButton'
						type='button'
						onClick={() => deleteBookFromPlan(_id)}
					>
						<svg width={14} height={18}>
							<use href='/icons/icons.svg#icon-delete'></use>
						</svg>
					</ActionButton>
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
						{status === 'planning' && (
							<li className={s.infoItem}>
								<ActionButton
									className='deleteButton'
									type='button'
									onClick={() => deleteBookFromPlan(_id)}
								>
									<svg width={14} height={18}>
										<use href='/icons/icons.svg#icon-delete'></use>
									</svg>
								</ActionButton>
							</li>
						)}
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
										className='summaryButton'
										type='button'
										title='Резюме'
										onClick={() => handleResumeClick({ _id, rating, feedback })}
									/>
								</div>
							</li>
						)}
					</ul>
				</div>
			)}
		</li>
	)
}

export default BookItem
