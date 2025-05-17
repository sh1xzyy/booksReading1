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
			thunkAPI.dispatch(
				loginThunk({ email: body.email, password: body.password })
			)
			return response.data
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message)
		}
	}
)

export const loginThunk = createAsyncThunk(
	'auth/login',
	async (body, thunkAPI) => {
		try {
			const response = await authInstance.post('/auth/login', body)
			return response.data
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message)
		}
	}
)

export const logoutThunk = createAsyncThunk(
	'/auth/logout',
	async (_, thunkAPI) => {
		try {
			const { accessToken } = thunkAPI.getState().auth
			if (!accessToken) {
				return thunkAPI.rejectWithValue('No accessToken')
			}

			const response = await authInstance.post('/auth/logout', null, {
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

export const refreshThunk = createAsyncThunk(
	'/auth/refresh',
	async (_, thunkAPI) => {
		try {
			const { refreshToken, sid } = thunkAPI.getState().auth
			if (!refreshToken || !sid) {
				return thunkAPI.rejectWithValue('No token or session id')
			}

			const response = await authInstance.post(
				'/auth/refresh',
				{ sid },
				{
					headers: {
						Authorization: `Bearer ${refreshToken}`,
					},
				}
			)
			return response.data
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message)
		}
	}
)
