import { configureStore } from '@reduxjs/toolkit'
import authReducer from './auth/slice'
import bookReducer from './book/slice'
import planningReducer from './planning/slice'
import userReducer from './user/slice'
import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
	key: 'root',
	version: 1,
	storage,
}

const persistAuthReducer = persistReducer(persistConfig, authReducer)

export const store = configureStore({
	reducer: {
		auth: persistAuthReducer,
		book: bookReducer,
		planning: planningReducer,
		user: userReducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
})

export const persistor = persistStore(store)
