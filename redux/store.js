import { configureStore } from '@reduxjs/toolkit'
// import rootReducer from './reducers'
import navbarReducer from './slices/navbarSlice'
export const store = configureStore({
  reducer: {
    navbar: navbarReducer,
  },
})
