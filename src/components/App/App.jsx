import { Route, Routes } from 'react-router-dom'
import { lazy, Suspense, useEffect } from 'react'
import RestrictedRoutes from '../RestrictedRoutes'
import PrivateRoutes from '../PrivateRoutes'
import Loader from '../Loader/Loader'
import { useDispatch, useSelector } from 'react-redux'
import { refreshThunk } from '../../redux/auth/operations'
import { selectIsRefreshing } from '../../redux/auth/selectors'
import Layout from '../Layout/Layout'
import { userDataThunk } from '../../redux/user/operations'
const HomePage = lazy(() => import('../../pages/HomePage/HomePage'))
const LibraryPage = lazy(() => import('../../pages/LibraryPage/LibraryPage'))
const StatisticsPage = lazy(() =>
	import('../../pages/StatisticsPage/StatisticsPage')
)
const LoginPage = lazy(() => import('../../pages/LoginPage/LoginPage'))
const RegisterPage = lazy(() => import('../../pages/RegisterPage/RegisterPage'))

function App() {
	const dispatch = useDispatch()
	const isRefreshing = useSelector(selectIsRefreshing)

	useEffect(() => {
		const fetchData = async () => {
			await dispatch(refreshThunk()).unwrap()
			await dispatch(userDataThunk()).unwrap()
		}
		fetchData()
	}, [dispatch])

	return (
		<>
			{isRefreshing ? null : (
				<>
					<Layout />
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
						</Routes>
					</Suspense>
				</>
			)}
		</>
	)
}

export default App
