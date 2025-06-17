import { createContext, useContext, useState } from 'react'

const BookFeedbackModalContext = createContext()

export const BookFeedbackModalProvider = ({ children }) => {
	const [isBookFeedbackModalOpen, setIsBookFeedbackModalOpen] = useState(false)

	return (
		<BookFeedbackModalContext.Provider
			value={{ isBookFeedbackModalOpen, setIsBookFeedbackModalOpen }}
		>
			{children}
		</BookFeedbackModalContext.Provider>
	)
}

export const useBookFeedbackModalContext = () =>
	useContext(BookFeedbackModalContext)
