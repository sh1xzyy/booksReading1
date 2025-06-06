import { createContext, useContext, useState } from 'react'

const BookFormVisibilityContext = createContext()

export const BookFormVisibilityProvider = ({ children }) => {
	const [isBookFormOpen, setIsBookFormOpen] = useState(false)

	return (
		<BookFormVisibilityContext.Provider
			value={{ isBookFormOpen, setIsBookFormOpen }}
		>
			{children}
		</BookFormVisibilityContext.Provider>
	)
}

export const useBookFormVisibility = () => useContext(BookFormVisibilityContext)
