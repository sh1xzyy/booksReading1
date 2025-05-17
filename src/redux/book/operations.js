import { createAsyncThunk } from '@reduxjs/toolkit'
import { authInstance } from '../auth/operations'

export const addBookThunk = createAsyncThunk(
	'/book',
	async (body, thunkAPI) => {
		try {
			const { accessToken } = thunkAPI.getState().auth
			if (!accessToken) {
				return thunkAPI.rejectWithValue('No accessToken')
			}

			const response = await authInstance.post('/book', body, {
				headers: {
					Authorization: `Bearer ${accessToken}`,
				},
			})
			return response.data
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message)
		}
	}
)
