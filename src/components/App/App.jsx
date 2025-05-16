import { Suspense } from 'react'
import './App.css'
import Loader from '../Loader/Loader'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../../pages/HomePage/HomePage'
import LibraryPage from '../../pages/LibraryPage/LibraryPage'
import StatisticsPage from '../../pages/StatisticsPage/StatisticsPage'
import LoginPage from '../../pages/LoginPage/LoginPage'
import RegisterPage from '../../pages/RegisterPage/RegisterPage'

function App() {
	return (
		<>
			<Suspense fallback={<Loader />}>
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/library' element={<LibraryPage />} />
					<Route path='/statistics' element={<StatisticsPage />} />
					<Route path='/login' element={<LoginPage />} />
					<Route path='/register' element={<RegisterPage />} />
				</Routes>
			</Suspense>
		</>
	)
}

export default App
