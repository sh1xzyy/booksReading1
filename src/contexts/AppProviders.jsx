import { BookFormVisibilityProvider } from './BookFormVisibilityContext'
import { WindowWidthProvider } from './WindowWidthContext'

const AppProviders = ({ children }) => {
	return (
			<BookFormVisibilityProvider>
				<WindowWidthProvider>{children}</WindowWidthProvider>
			</BookFormVisibilityProvider>
	)
}

export default AppProviders
