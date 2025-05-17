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
				console.log(action.payload)
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
