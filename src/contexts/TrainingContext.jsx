import { createContext, useContext, useState } from 'react'

const TrainingContext = createContext()

export const TrainingContextProvider = ({ children }) => {
	const [isTraining, setIsTraining] = useState(
		() => localStorage.getItem('isTraining') === 'true'
	)

	const onStartTrainingButtonClick = async () => {
		setIsTraining(true)
		localStorage.setItem('isTraining', 'true')
	}

	return (
		<TrainingContext.Provider
			value={{ isTraining, onStartTrainingButtonClick }}
		>
			{children}
		</TrainingContext.Provider>
	)
}

export const useTrainingContext = () => useContext(TrainingContext)
