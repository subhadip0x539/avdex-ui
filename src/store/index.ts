import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { reducer as artifacts } from "./artifacts.slice";
const rootReducer = combineReducers({
  artifacts,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;
export type Action<T> = T | ((prev: T) => T);
