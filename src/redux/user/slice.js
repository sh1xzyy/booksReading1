import { createSlice } from '@reduxjs/toolkit'
import { userDataThunk } from './operations'

const initialState = {
	userData: {
		name: '',
		email: '',
		goingToRead: [],
		currentlyReading: [],
		finishedReading: [],
	},
}

const userSlice = createSlice({
	name: 'user',
	initialState,
	extraReducers: builder => {
		builder.addCase(userDataThunk.fulfilled, (state, action) => {
			state.userData = action.payload
		})
	},
})

export default userSlice.reducer
