import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter/slicecounter' 

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})