import {combineReducers, configureStore} from '@reduxjs/toolkit';
import reducer from './contactInteractionsSlice';
import contactsListReducer from './contactsListSlice';
import contactDetailsReducer from './contactDetailsSlice';

export const rootReducer = combineReducers({
  interactions: reducer,
  contactsList: contactsListReducer,
  contactDetails: contactDetailsReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type ТRootState = ReturnType<typeof rootReducer>;
