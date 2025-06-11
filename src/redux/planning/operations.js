import { createAsyncThunk } from '@reduxjs/toolkit'
import { authInstance } from '../auth/operations'

export const planningThunk = createAsyncThunk(
	'/planning',
	async ({ method, body }, thunkAPI) => {
		try {
			const { accessToken } = thunkAPI.getState().auth
			if (!accessToken) {
				return thunkAPI.rejectWithValue('No accessToken')
			}

			const config = {
				headers: {
					Authorization: `Bearer ${accessToken}`,
				},
			}

			let response

			switch (method) {
				case 'GET':
					response = await authInstance.get('/planning', config)
					break
				case 'POST':
					response = await authInstance.post('/planning', body, config)
					break
				case 'PATCH':
					response = await authInstance.patch('/planning', body, config)
					break
				default:
					return thunkAPI.rejectWithValue('Unsupported method')
			}
			return response.data
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message)
		}
	}
)
