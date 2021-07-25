import { createSelector } from '@reduxjs/toolkit';
import { TState, TStateType } from './type';

export const getInteractionState = (state: TStateType): TState =>
  state.interactions;

export const getInteractionResponse = createSelector(
  getInteractionState,
  ({ response }) => response,
);
