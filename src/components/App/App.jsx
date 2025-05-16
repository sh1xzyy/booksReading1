import { lazy, Suspense } from 'react'
import './App.css'
import Loader from '../Loader/Loader'
import { Route, Routes } from 'react-router-dom'
const HomePage = lazy(() => import('../../pages/HomePage/HomePage'))
const LibraryPage = lazy(() => import('../../pages/LibraryPage/LibraryPage'))
const StatisticsPage = lazy(() =>
	import('../../pages/StatisticsPage/StatisticsPage')
)
const LoginPage = lazy(() => import('../../pages/LoginPage/LoginPage'))
const RegisterPage = lazy(() => import('../../pages/RegisterPage/RegisterPage'))

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
