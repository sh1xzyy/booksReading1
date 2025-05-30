import { createSlice, isAnyOf } from '@reduxjs/toolkit'
import { addBookReviewThunk, addBookThunk } from './operations'
import { userDataThunk } from '../auth/operations'

const initialState = {
	goingToRead: [],
	currentlyReading: [],
	finishedReading: [],
	isLoading: false,
}

const bookSlice = createSlice({
	name: 'book',
	initialState,
	extraReducers: builder => {
		builder
			.addCase(addBookThunk.fulfilled, (state, action) => {
				state.goingToRead.push(action.payload)
			})
			.addCase(addBookReviewThunk.fulfilled, (state, action) => {
				state.userBooks.finishedReading = state.finishedReading.filter(
					book => book._id !== action.payload._id
				)
			})
			.addCase(userDataThunk.fulfilled, (state, action) => {
				state.goingToRead = action.payload.goingToRead
				state.currentlyReading = action.payload.currentlyReading
				state.finishedReading = action.payload.finishedReading
			})
			.addMatcher(
				isAnyOf(addBookThunk.pending, addBookReviewThunk.pending),
				state => {
					state.isLoading = true
				}
			)
			.addMatcher(
				isAnyOf(addBookThunk.rejected, addBookReviewThunk.rejected),
				state => {
					state.isLoading = false
				}
			)
	},
})

export default bookSlice.reducer
