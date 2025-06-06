import { createContext, useContext, useState } from 'react'

const MyTrainingFormContext = createContext()

export const MyTrainingFormContextProvider = ({ children }) => {
	const [isMyTrainingFormOpen, setIsMyTrainingFormOpen] = useState(false)

	return (
		<MyTrainingFormContext.Provider
			value={{ isMyTrainingFormOpen, setIsMyTrainingFormOpen }}
		>
			{children}
		</MyTrainingFormContext.Provider>
	)
}

export const useMyTrainingFormContext = () => useContext(MyTrainingFormContext)
