import { createSlice, isAnyOf } from '@reduxjs/toolkit'
import { registerThunk } from './operations'

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
			.addMatcher(isAnyOf(registerThunk.pending), state => {
				state.isLoading = true
			})
			.addMatcher(isAnyOf(registerThunk.rejected), state => {
				state.isLoading = false
			})
	},
})

export default authSlice.reducer
