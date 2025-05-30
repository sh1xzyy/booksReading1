import { useWindowWidth } from '../../hooks/userWindowWidth/useWindowWidth'
import BookItem from '../BookItem/BookItem'
import s from './BookList.module.css'

const BookList = ({ sectionTitle, items, status, handleResumeClick }) => {
	const windowWidth = useWindowWidth()

	return (
		<>
			<h2 className={s.sectionTitle}>{sectionTitle}</h2>
			<ul className={s.bookList}>
				{status === 'finished' ? (
					<li className={s.listHeaderFinished}>
						<span>Назва книги</span>
						<span>Автор</span>
						<span>Рік</span>
						<span>Стор.</span>
						<span>{windowWidth < 1268 ? 'Рейтинг' : 'Рейтинг книги'}</span>
					</li>
				) : (
					<li className={s.listHeader}>
						<span>Назва книги</span>
						<span>Автор</span>
						<span>Рік</span>
						<span>Стор.</span>
					</li>
				)}
				{items?.map(book => (
					<BookItem
						key={book._id}
						book={book}
						status={status}
						windowWidth={windowWidth}
						handleResumeClick={handleResumeClick}
					/>
				))}
			</ul>
		</>
	)
}

export default BookList
