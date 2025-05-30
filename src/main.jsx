import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import { Toaster } from 'react-hot-toast'
import { StrictMode } from 'react'
import App from './components/App/App.jsx'
import { store } from './redux/store.js'
import { Provider } from 'react-redux'
import './index.css'

createRoot(document.getElementById('root')).render(
	<Provider store={store}>
		<BrowserRouter>
			<StrictMode>
				<App />
				<Toaster/>
			</StrictMode>
		</BrowserRouter>
	</Provider>
)
