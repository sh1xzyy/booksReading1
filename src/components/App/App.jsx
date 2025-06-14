import { Route, Routes } from 'react-router-dom'
import { lazy, Suspense, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { refreshThunk, userDataThunk } from '../../redux/auth/operations'
import {
	selectIsLoggedIn,
	selectIsRefreshing,
} from '../../redux/auth/selectors.js'
import AppBar from '../Header/AppBar/AppBar.jsx'
import PrivateRoutes from '../PrivateRoutes.jsx'
import RestrictedRoutes from '../RestrictedRoutes.jsx'
import Loader from '../Common/Loader/Loader.jsx'
const HomePage = lazy(() => import('../../pages/HomePage/HomePage.jsx'))
const LibraryPage = lazy(() =>
	import('../../pages/LibraryPage/LibraryPage.jsx')
)
const StatisticsPage = lazy(() =>
	import('../../pages/StatisticsPage/StatisticsPage.jsx')
)
const LoginPage = lazy(() => import('../../pages/LoginPage/LoginPage.jsx'))
const RegisterPage = lazy(() =>
	import('../../pages/RegisterPage/RegisterPage.jsx')
)
const NotFoundPage = lazy(() =>
	import('../../pages/NotFoundPage/NothingFoundPage.jsx')
)

function App() {
	const dispatch = useDispatch()
	const isRefreshing = useSelector(selectIsRefreshing)
	const isLoggedIn = useSelector(selectIsLoggedIn)

	useEffect(() => {
		const fetchData = async () => {
			try {
				await dispatch(refreshThunk()).unwrap()
				if (isLoggedIn) await dispatch(userDataThunk()).unwrap()
			} catch (error) {
				console.error(error)
			}
		}
		fetchData()
	}, [dispatch, isLoggedIn])

	return (
		<>
			{isRefreshing ? null : (
				<>
					<AppBar />
					<Suspense fallback={<Loader />}>
						<Routes>
							<Route path='/' element={<HomePage />} />
							<Route
								path='/library'
								element={
									<PrivateRoutes redirectTo='/login'>
										<LibraryPage />
									</PrivateRoutes>
								}
							/>
							<Route
								path='/statistics'
								element={
									<PrivateRoutes redirectTo='/login'>
										<StatisticsPage />
									</PrivateRoutes>
								}
							/>
							<Route
								path='/login'
								element={
									<RestrictedRoutes redirectTo='/library'>
										<LoginPage />
									</RestrictedRoutes>
								}
							/>
							<Route
								path='/register'
								element={
									<RestrictedRoutes redirectTo='/library'>
										<RegisterPage />
									</RestrictedRoutes>
								}
							/>
							<Route path='*' element={<NotFoundPage />} />
						</Routes>
					</Suspense>
				</>
			)}
		</>
	)
}

export default App
