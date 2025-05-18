import { createSlice, isAnyOf } from '@reduxjs/toolkit'
import { addBookThunk } from './operations'

const initialState = {
	books: [],
	isLoading: false,
}

const bookSlice = createSlice({
	name: 'book',
	initialState,
	extraReducers: builder => {
		builder
			.addCase(addBookThunk.fulfilled, (state, action) => {
				state.books.push(action.payload)
				console.log(action.payload)
				console.log(state.books)
			})
			.addMatcher(isAnyOf(addBookThunk.pending), state => {
				state.isLoading = true
			})
			.addMatcher(isAnyOf(addBookThunk.rejected), state => {
				state.isLoading = false
			})
	},
})

export default bookSlice.reducer
