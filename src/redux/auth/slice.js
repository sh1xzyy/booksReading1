import { createSlice, isAnyOf } from '@reduxjs/toolkit'
import {
	loginThunk,
	logoutThunk,
	refreshThunk,
	registerThunk,
	userDataThunk,
} from './operations'

const initialState = {
	userData: {
		name: null,
		email: null,
	},
	accessToken: null,
	refreshToken: null,
	sid: null,
	isLoading: false,
	isLoggedIn: false,
	isRefreshing: false,
}

const authSlice = createSlice({
	name: 'auth',
	initialState,
	extraReducers: builder => {
		builder
			.addCase(registerThunk.fulfilled, (state, action) => {
				state.userData.name = action.payload.name
				state.userData.email = action.payload.email
				state.isLoading = false
			})
			.addCase(loginThunk.fulfilled, (state, action) => {
				state.userData = {
					name: action.payload.userData.name,
					email: action.payload.userData.email,
				}
				state.accessToken = action.payload.accessToken
				state.refreshToken = action.payload.refreshToken
				state.sid = action.payload.sid
				state.isLoading = false
				state.isLoggedIn = true
			})
			.addCase(logoutThunk.fulfilled, () => {
				return initialState
			})
			.addCase(refreshThunk.fulfilled, (state, action) => {
				state.accessToken = action.payload.newAccessToken
				state.refreshToken = action.payload.newRefreshToken
				state.sid = action.payload.newSid
				state.isRefreshing = false
				state.isLoading = false
			})
			.addCase(refreshThunk.pending, state => {
				state.isRefreshing = true
				state.isLoading = true
			})
			.addCase(refreshThunk.rejected, state => {
				state.isRefreshing = false
				state.isLoading = false
				state.isLoggedIn = false
			})
			.addCase(userDataThunk.fulfilled, (state, action) => {
				state.userData = {
					name: action.payload.name,
					email: action.payload.email,
				}
				state.isLoading = false
			})
			.addMatcher(
				isAnyOf(
					registerThunk.pending,
					loginThunk.pending,
					logoutThunk.pending,
					userDataThunk.pending
				),
				state => {
					state.isLoading = true
				}
			)
			.addMatcher(
				isAnyOf(
					registerThunk.rejected,
					loginThunk.rejected,
					logoutThunk.rejected,
					userDataThunk.rejected
				),
				state => {
					state.isLoading = false
				}
			)
	},
})

export default authSlice.reducer
