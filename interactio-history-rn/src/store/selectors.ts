import {createSelector} from '@reduxjs/toolkit';
import {
  TState,
  TStateType,
  TContactDetailsState,
  TContactDetailsType,
  TContactsListState,
  IContactsListType,
} from './type';

const getInteractionState = (state: TStateType): TState => state.interactions;
const getContactsListState = (state: IContactsListType): TContactsListState =>
  state.contactsList;
const getContactDetails = (state: TContactDetailsType): TContactDetailsState =>
  state.contactDetails;

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

export const getContactDetailsResponse = createSelector(
  getContactDetails,
  ({response, loading, error, methodCommunication}) => ({
    response,
    loading,
    error,
    methodCommunication,
  }),
);
