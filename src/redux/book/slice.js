import { createSlice, isAnyOf } from '@reduxjs/toolkit'
import { addBookReviewThunk, addBookThunk } from './operations'
import { loginThunk, userDataThunk } from '../auth/operations'

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
					state.isLoading = false
			})
			.addCase(addBookReviewThunk.fulfilled, (state, action) => {
				state.userBooks.finishedReading = state.finishedReading.filter(
					book => book._id !== action.payload._id
				)
				state.isLoading = false
			})
			.addMatcher(
				isAnyOf(loginThunk.fulfilled, userDataThunk.fulfilled),
				(state, action) => {
				const data = action.payload.userData || action.payload
				state.goingToRead = data.goingToRead
				state.currentlyReading = data.currentlyReading
				state.finishedReading = data.finishedReading
				}
			)
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
