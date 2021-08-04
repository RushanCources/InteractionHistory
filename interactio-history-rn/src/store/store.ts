<<<<<<< HEAD
import {combineReducers, configureStore} from '@reduxjs/toolkit';
import reducer from './contactInteractionsSlice';
import contactsListReducer from './contactsListSlice';
import contactDetailsReducer from './contactDetailsSlice';
||||||| 94106ab
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import reducer from './contactInteractionsSlice';
import contactsListReducer from './contactsListSlice'
import contactDetailsReducer from './contactDetailsSlice'
=======
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import contactInteractionsReducer from './slice/contactInteractionsSlice';
import contactsListReducer from './slice/contactsListSlice'
import contactDetailsReducer from './slice/contactDetailsSlice'
import contactsRecentsReducer from './slice/contactsRecentsSlice'
>>>>>>> origin

export const rootReducer = combineReducers({
  interactions: contactInteractionsReducer,
  contactsList: contactsListReducer,
<<<<<<< HEAD
  contactDetails: contactDetailsReducer,
||||||| 94106ab
  contactDetails: contactDetailsReducer
=======
  contactDetails: contactDetailsReducer,
  contactsRecents: contactsRecentsReducer,
>>>>>>> origin
});

export const store = configureStore({
  reducer: rootReducer,
});

export type ТRootState = ReturnType<typeof rootReducer>;
