import { createSlice, isAnyOf } from '@reduxjs/toolkit'
import { addBookTrainingPlanThunk } from './operations'

const initialState = {
	books: [],
	isLoading: false
}

const planningSlice = createSlice({
	name: 'planning',
	initialState,
	extraReducers: builder => {
		builder.addCase(addBookTrainingPlanThunk.fulfilled, (state, action) => {
			state.books.push(action.payload)
			state.isLoading = false
		})
		.addMatcher(isAnyOf(addBookTrainingPlanThunk.pending), state => {
			state.isLoading = true
		})
		.addMatcher(isAnyOf(addBookTrainingPlanThunk.rejected), state => {
			state.isLoading = false
		})
	}
})

export default planningSlice.reducer
