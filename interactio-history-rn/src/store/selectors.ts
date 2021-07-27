import { createSelector } from '@reduxjs/toolkit';
import { TState, TStateType } from './type';

const getInteractionState = (state: TStateType): TState => state.interactions;

export const getInteractionResponse = createSelector(
  getInteractionState,
  ({ response, loading, error }) => ({response, loading, error})
);

export const getCurrentContact = createSelector(
  getInteractionState,
  ({ currentContact }) => currentContact.toString()
);
