import { combineReducers, configureStore, createStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './slice';

export const rootReducer = combineReducers({
  reducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      // Ignore these action types
      ignoredActions: ['your/action/type'],
      // Ignore these field paths in all actions
      ignoredActionPaths: ['meta.arg', 'payload.timestamp'],
      // Ignore these paths in the state
      ignoredPaths: ['items.dates'],
    },
})
});

export type ТRootState = ReturnType<typeof rootReducer>;
