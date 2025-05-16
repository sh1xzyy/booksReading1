import { createSlice, isAnyOf } from '@reduxjs/toolkit'
import { loginThunk, refreshThunk, registerThunk } from './operations'

const initialState = {
	userData: {
		name: null,
		email: null,
		goingToRead: [],
		currentlyReading: [],
		finishedReading: [],
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
				state.userData = action.payload.userData
				state.accessToken = action.payload.accessToken
				state.refreshToken = action.payload.refreshToken
				state.sid = action.payload.sid
				state.isLoading = false
				state.isLoggedIn = true
			})
			.addCase(refreshThunk.fulfilled, (state, action) => {
				state.accessToken = action.payload.newAccessToken
				state.refreshToken = action.payload.newRefreshToken
				state.sid = action.payload.newSid
				state.isRefreshing = false
				state.isLoading = false
			})
			.addMatcher(
				isAnyOf(
					registerThunk.pending,
					loginThunk.pending,
					refreshThunk.pending
				),
				state => {
					state.isLoading = true
				}
			)
			.addMatcher(
				isAnyOf(
					registerThunk.rejected,
					loginThunk.rejected,
					refreshThunk.rejected
				),
				state => {
					state.isLoading = false
				}
			)
	},
})

export default authSlice.reducer
