import { createSlice, isAnyOf } from '@reduxjs/toolkit'
import { deleteBookFromTrainingPlanThunk, planningThunk } from './operations'

const initialState = {
	startDate: '',
	endDate: '',
	duration: '',
	pagesPerDay: '',
	plannedBooks: [],
	stats: [],
	isLoading: false,
}

const planningSlice = createSlice({
	name: 'planning',
	initialState,
	extraReducers: builder => {
		builder
			.addCase(planningThunk.fulfilled, (state, action) => {
				const { payload } = action

				switch (action.meta.arg.method) {
					case 'GET':
						state.plannedBooks = payload.planning.books
						state.duration = payload.planning.duration
						state.startDate = payload.planning.startDate
						state.endDate = payload.planning.endDate
						state.pagesPerDay = payload.planning.pagesPerDay
						break
					case 'POST':
						state.plannedBooks = payload.books
						state.duration = payload.duration
						state.startDate = payload.startDate
						state.endDate = payload.endDate
						state.pagesPerDay = payload.pagesPerDay
						break
					default:
						throw new Error('Sorry you used the wrong HTTP method!')
				}

				state.isLoading = false
			})
			.addCase(deleteBookFromTrainingPlanThunk.fulfilled, (state, action) => {
				console.log(action.payload)

				state.isLoading = false
				state.books = state.books.filter(book => book.id !== action.payload)
			})

			.addMatcher(
				isAnyOf(planningThunk.pending, deleteBookFromTrainingPlanThunk.pending),
				state => {
					state.isLoading = true
				}
			)
			.addMatcher(
				isAnyOf(
					planningThunk.rejected,
					deleteBookFromTrainingPlanThunk.rejected
				),
				state => {
					state.isLoading = false
				}
			)
	},
})

export default planningSlice.reducer
