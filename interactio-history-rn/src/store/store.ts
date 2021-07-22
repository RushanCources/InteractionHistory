import { combineReducers, createStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './slice';

export const rootReducer = combineReducers({
  reducer,
});

export const store = createStore(rootReducer, composeWithDevTools());

export type ТRootState = ReturnType<typeof rootReducer>;
