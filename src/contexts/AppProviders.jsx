import { AddStatisticToLocaleStorageProvider } from './AddStatisticToLocaleStorageContext'
import { BookFormVisibilityProvider } from './BookFormVisibilityContext'
import { MyTrainingFormContextProvider } from './MyTrainingFormContext'
import { WindowWidthProvider } from './WindowWidthContext'

const AppProviders = ({ children }) => {
	return (
		<AddStatisticToLocaleStorageProvider>
			<MyTrainingFormContextProvider>
				<BookFormVisibilityProvider>
					<WindowWidthProvider>{children}</WindowWidthProvider>
				</BookFormVisibilityProvider>
			</MyTrainingFormContextProvider>
		</AddStatisticToLocaleStorageProvider>
	)
}

export default AppProviders
