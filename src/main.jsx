import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import { Toaster } from 'react-hot-toast'
import { Provider } from 'react-redux'
import { StrictMode } from 'react'
import AppProviders from './contexts/AppProviders.jsx'
import App from './components/App/App.jsx'
import { store } from './redux/store.js'
import './styles/index.css'

createRoot(document.getElementById('root')).render(
	<Provider store={store}>
		<BrowserRouter>
			<AppProviders>
				<StrictMode>
					<App />
					<Toaster />
				</StrictMode>
			</AppProviders>
		</BrowserRouter>
	</Provider>
)
