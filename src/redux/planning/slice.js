import { createSlice, isAnyOf } from '@reduxjs/toolkit'
import { planningThunk } from './operations'

const initialState = {
	startDate: '',
	endDate: '',
	duration: '',
	pagesPerDay: '',
	books: [],
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
						state.books = payload.planning.books
						state.duration = payload.planning.duration
						state.startDate = payload.planning.startDate
						state.endDate = payload.planning.endDate
						state.pagesPerDay = payload.planning.pagesPerDay
						break
					case 'POST':
						state.books = payload.books
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

			.addMatcher(isAnyOf(planningThunk.pending), state => {
				state.isLoading = true
			})
			.addMatcher(isAnyOf(planningThunk.rejected), state => {
				state.isLoading = false
			})
	},
})

export default planningSlice.reducer
