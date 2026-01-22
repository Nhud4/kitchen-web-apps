import { configureStore } from '@reduxjs/toolkit'

import app from './slices/appSlice'
import auth from './slices/auth'
import transaction from './slices/transaction'

export const store = configureStore({
  reducer: {
    app,
    auth,
    transaction,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
