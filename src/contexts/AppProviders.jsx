import { AddStatisticToLocaleStorageProvider } from './AddStatisticToLocaleStorageContext'
import { BookFeedbackModalProvider } from './BookFeedbackModalContext'
import { BookFormVisibilityProvider } from './BookFormVisibilityContext'
import { MyTrainingFormContextProvider } from './MyTrainingFormContext'
import { TrainingContextProvider } from './TrainingContext'
import { WindowWidthProvider } from './WindowWidthContext'

const AppProviders = ({ children }) => {
	return (
		<TrainingContextProvider>
			<BookFeedbackModalProvider>
				<AddStatisticToLocaleStorageProvider>
					<MyTrainingFormContextProvider>
						<BookFormVisibilityProvider>
							<WindowWidthProvider>{children}</WindowWidthProvider>
						</BookFormVisibilityProvider>
					</MyTrainingFormContextProvider>
				</AddStatisticToLocaleStorageProvider>
			</BookFeedbackModalProvider>
		</TrainingContextProvider>
	)
}

export default AppProviders
