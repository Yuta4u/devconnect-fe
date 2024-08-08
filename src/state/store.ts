import { combineReducers, configureStore } from "@reduxjs/toolkit"
import userSlice from "./counter/userSlice"
import postSlice from "./counter/postSlice"

const rootReducer = combineReducers({
  userSlice,
  postSlice,
})

export const store = configureStore({
  reducer: {
    counter: rootReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
