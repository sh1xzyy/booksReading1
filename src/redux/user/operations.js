import { createAsyncThunk } from '@reduxjs/toolkit'
import { authInstance } from '../auth/operations'

export const userDataThunk = createAsyncThunk(
	'/user/books',
	async (_, thunkAPI) => {
		try {
			const { accessToken } = thunkAPI.getState().auth
			if (!accessToken) {
				return thunkAPI.rejectWithValue('No accessToken')
			}

			const response = await authInstance.get('/user/books', {
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
