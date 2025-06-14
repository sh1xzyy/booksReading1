import { useWindowWidth } from '../../../contexts/WindowWidthContext'
import { getHeaderClassByStatus } from '../../../utils/bookList/getHeaderClassByStatus'
import s from './BookListHeader.module.css'

const BookListHeader = ({ status }) => {
	const { windowWidth } = useWindowWidth()

	return (
		<ul className={s.headerList}>
			{status === 'finished' ? (
				<li className={s.finishingHeaderList}>
					<span>Назва книги</span>
					<span>Автор</span>
					<span>Рік</span>
					<span>Стор.</span>
					<span>{windowWidth < 1268 ? 'Рейтинг' : 'Рейтинг книги'}</span>
				</li>
			) : (
				<li className={getHeaderClassByStatus(s, status)}>
					<span>Назва книги</span>
					<span>Автор</span>
					<span>Рік</span>
					<span>Стор.</span>
				</li>
			)}
		</ul>
	)
}

export default BookListHeader
