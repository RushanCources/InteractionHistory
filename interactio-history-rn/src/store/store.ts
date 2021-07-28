import { combineReducers, configureStore } from '@reduxjs/toolkit';
import reducer from './slice';

export const rootReducer = combineReducers({
  interactions: reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type ТRootState = ReturnType<typeof rootReducer>;
