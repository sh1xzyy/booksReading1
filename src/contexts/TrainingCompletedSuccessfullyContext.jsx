import { createContext, useContext, useState } from 'react'

const TrainingCompletedSuccessfullyContext = createContext()

export const TrainingCompletedSuccessfullyContextProvider = ({ children }) => {
	const [isTrainingCompletedSuccessfully, setIsTrainingCompletedSuccessfully] =
		useState(false)

	return (
		<TrainingCompletedSuccessfullyContext.Provider
			value={{
				isTrainingCompletedSuccessfully,
				setIsTrainingCompletedSuccessfully,
			}}
		>
			{children}
		</TrainingCompletedSuccessfullyContext.Provider>
	)
}

export const useTrainingCompletedSuccessfullyContext = () =>
	useContext(TrainingCompletedSuccessfullyContext)
