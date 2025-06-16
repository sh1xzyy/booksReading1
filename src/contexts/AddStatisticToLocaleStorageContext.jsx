import { createContext, useContext, useEffect, useState } from 'react'

const AddStatisticToLocaleStorageContext = createContext()

export const AddStatisticToLocaleStorageProvider = ({ children }) => {
	const [statistics, setStatistics] = useState([])

	useEffect(() => {
		const stored = JSON.parse(localStorage.getItem('user-statistic')) || []
		setStatistics(stored)
	}, [])

	const onSubmit = value => {
		const currentTime = new Date().toLocaleTimeString('uk-UA', {
			hour: '2-digit',
			minute: '2-digit',
			second: '2-digit',
		})

		const newValue = { ...value, statTime: currentTime }
		const updated = [...statistics, newValue]

		setStatistics(updated)
		localStorage.setItem('user-statistic', JSON.stringify(updated))
	}

	return (
		<AddStatisticToLocaleStorageContext.Provider
			value={{ onSubmit, statistics }}
		>
			{children}
		</AddStatisticToLocaleStorageContext.Provider>
	)
}

export const useAddStatisticToLocaleStorage = () =>
	useContext(AddStatisticToLocaleStorageContext)
