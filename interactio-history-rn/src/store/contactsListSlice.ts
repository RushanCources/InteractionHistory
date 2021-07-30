import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {NetworkError, TContactData, TContactsListState} from './type';
import {CONFIG} from '../config';

export const getContactsList = createAsyncThunk(
  'contactsList/getContactsList',
  async () => {
    const response = await fetch(`${CONFIG.BASE_URL}/contacts`)
      .then(res => res.json())
      .then(result => result);
    return response;
  },
);

const initialState: TContactsListState = {
  response: [],
  error: null,
  loading: true,
};

const contactsListSlice = createSlice({
  name: 'contactsList',
  initialState,
  reducers: {},

  extraReducers: builder => {
    builder.addCase(getContactsList.pending, state => {
      state.loading = true;
    });

    builder.addCase(getContactsList.fulfilled, (state, {payload}) => {
      state.loading = false;
      state.error = null;
      state.response = payload as unknown as TContactData[];
    });

    builder.addCase(getContactsList.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as NetworkError;
    });
  },
});

export default contactsListSlice.reducer;
