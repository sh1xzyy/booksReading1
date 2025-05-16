import { configureStore } from '@reduxjs/toolkit'
import authReducer from './auth/slice'
import bookReducer from './book/slice'
import planningReducer from './planning/slice'
import userReducer from './user/slice'

export const store = configureStore({
	reducer: {
		auth: authReducer,
		book: bookReducer,
		planning: planningReducer,
		user: userReducer,
	},
})
