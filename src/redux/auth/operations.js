import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const authInstance = axios.create({
	baseURL: 'https://bookread-backend.goit.global/',
})

export const registerThunk = createAsyncThunk(
	'auth/register',
	async (body, thunkAPI) => {
		try {
			const response = await authInstance.post('/auth/register', body)
			return response.data
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message)
		}
	}
)
