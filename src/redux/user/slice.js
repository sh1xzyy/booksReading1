import { createSlice, isAnyOf } from '@reduxjs/toolkit'
import { userDataThunk } from './operations'

const initialState = {
	userData: {
		name: '',
		email: '',
		goingToRead: [],
		currentlyReading: [],
		finishedReading: [],
	},
	isLoading: false,
}

const userSlice = createSlice({
	name: 'user',
	initialState,
	extraReducers: builder => {
		builder
			.addCase(userDataThunk.fulfilled, (state, action) => {
				state.userData = action.payload
				state.isLoading = false
			})
			.addMatcher(isAnyOf(userDataThunk.pending), state => {
				state.isLoading = true
			})
			.addMatcher(isAnyOf(userDataThunk.rejected), state => {
				state.isLoading = false
			})
	},
})

export default userSlice.reducer
