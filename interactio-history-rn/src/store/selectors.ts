<<<<<<< HEAD
import {createSelector} from '@reduxjs/toolkit';
import {
  TState,
  TStateType,
  TContactDetailsState,
  TContactDetailsType,
  TContactsListState,
  IContactsListType,
||||||| 94106ab
import { createSelector } from '@reduxjs/toolkit';
import { 
  TState, 
  TStateType, 
  TContactDetailsState, 
  TContactDetailsType, 
  TContactsListState, 
  IContactsListType 
=======
import { createSelector } from '@reduxjs/toolkit';
import { 
  TState, 
  TStateType, 
  TContactDetailsState, 
  TContactDetailsType, 
  TContactsListState, 
  IContactsListType, 
  TContactsRecentsType,
  TContactsRecentsState
>>>>>>> origin
} from './type';

const getInteractionState = (state: TStateType): TState => state.interactions;
<<<<<<< HEAD
const getContactsListState = (state: IContactsListType): TContactsListState =>
  state.contactsList;
const getContactDetails = (state: TContactDetailsType): TContactDetailsState =>
  state.contactDetails;
||||||| 94106ab
const getContactsListState = (state: IContactsListType): TContactsListState => state.contactsList;
const getContactDetails = (state: TContactDetailsType): TContactDetailsState => state.contactDetails;
=======
const getContactsListState = (state: IContactsListType): TContactsListState => state.contactsList;
const getContactsRecents = (state: TContactsRecentsType): TContactsRecentsState => state.contactsRecents;
const getContactDetails = (state: TContactDetailsType): TContactDetailsState => state.contactDetails;
>>>>>>> origin

export const getInteractionResponse = createSelector(
  getInteractionState,
  ({response, loading, error, currentContact}) => ({
    response,
    loading,
    error,
    currentContact,
  }),
);

export const getContactsListResponse = createSelector(
  getContactsListState,
  ({response, loading, error}) => ({response, loading, error}),
);

export const getContactsRecentsResponse = createSelector(
  getContactsRecents,
  ({ response, loading, error }) => ({response, loading, error })
);

export const getContactDetailsResponse = createSelector(
  getContactDetails,
  ({response, loading, error, methodCommunication}) => ({
    response,
    loading,
    error,
    methodCommunication,
  }),
);
