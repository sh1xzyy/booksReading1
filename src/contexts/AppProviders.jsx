import { BookFormVisibilityProvider } from './BookFormVisibilityContext'
import { MyTrainingFormContextProvider } from './MyTrainingFormContext'
import { WindowWidthProvider } from './WindowWidthContext'

const AppProviders = ({ children }) => {
	return (
		<MyTrainingFormContextProvider>
			<BookFormVisibilityProvider>
				<WindowWidthProvider>{children}</WindowWidthProvider>
			</BookFormVisibilityProvider>
		</MyTrainingFormContextProvider>
	)
}

export default AppProviders
