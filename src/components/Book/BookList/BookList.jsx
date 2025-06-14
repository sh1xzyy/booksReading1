import { getBookListClassByStatus } from '../../../utils/bookList/getBookListClassByStatus'
import { getTitleClassByStatus } from '../../../utils/bookList/getTitleClassByStatus'
import { useWindowWidth } from '../../../contexts/WindowWidthContext'
import BookListHeader from '../BookListHeader/BookListHeader'
import BookItemEmpty from '../BookItemEmpty/BookItemEmpty'
import BookItem from '../BookItem/BookItem'
import s from './BookList.module.css'

const BookList = ({ sectionTitle, items, status, handleResumeClick }) => {
	const { windowWidth } = useWindowWidth()

	return (
		<>
			<h2 className={getTitleClassByStatus(s, status)}>{sectionTitle}</h2>
			<BookListHeader status={status} />
			<ul className={getBookListClassByStatus(s, status)}>
				{items.length > 0 ? (
					items.map(book => (
						<BookItem
							key={book._id}
							book={book}
							status={status}
							windowWidth={windowWidth}
							handleResumeClick={handleResumeClick}
						/>
					))
				) : (
					<BookItemEmpty />
				)}
			</ul>
		</>
	)
}

export default BookList
