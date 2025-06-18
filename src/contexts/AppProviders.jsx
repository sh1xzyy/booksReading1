import { AddStatisticToLocaleStorageProvider } from './AddStatisticToLocaleStorageContext'
import { BookFeedbackModalProvider } from './BookFeedbackModalContext'
import { BookFormVisibilityProvider } from './BookFormVisibilityContext'
import { MyTrainingFormContextProvider } from './MyTrainingFormContext'
import { TrainingCompletedSuccessfullyContextProvider } from './TrainingCompletedSuccessfullyContext'
import { TrainingContextProvider } from './TrainingContext'
import { WindowWidthProvider } from './WindowWidthContext'

const AppProviders = ({ children }) => {
	return (
		<TrainingCompletedSuccessfullyContextProvider>
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
		</TrainingCompletedSuccessfullyContextProvider>
	)
}

export default AppProviders
