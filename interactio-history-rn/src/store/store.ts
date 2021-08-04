import {combineReducers, configureStore} from '@reduxjs/toolkit';
import contactInteractionsReducer from './slice/contactInteractionsSlice';
import contactsListReducer from './slice/contactsListSlice';
import contactDetailsReducer from './slice/contactDetailsSlice';
import contactsRecentsReducer from './slice/contactsRecentsSlice';

export const rootReducer = combineReducers({
  interactions: contactInteractionsReducer,
  contactsList: contactsListReducer,
  contactDetails: contactDetailsReducer,
  contactsRecents: contactsRecentsReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type ТRootState = ReturnType<typeof rootReducer>;
