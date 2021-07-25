import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {Tresponse, TState, NetworkError} from './type';
import {CONFIG} from '../config';

//endpoint для запроса contact iteractions
export const getContactInteractions = createAsyncThunk(
  'interactions/getContactInteractions',
  async (id: number) => {
    const response = await fetch(`${CONFIG.BASE_URL}/contacts/${id}/records`)
      .then(res => res.json())
      .then(result => result);
    return response;
  },
);

const initialState: TState = {
  response: [],
  error: null,
  loading: true,
};

const interactionsSlice = createSlice({
  name: 'interactions',
  initialState,
  reducers: {},

  extraReducers: builder => {
    builder.addCase(getContactInteractions.pending, state => {
      state.loading = true;
    });

    builder.addCase(getContactInteractions.fulfilled, (state, {payload}) => {
      state.loading = false;
      state.response = payload as unknown as Tresponse[];
    });

    builder.addCase(getContactInteractions.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as NetworkError;
    });
  },
});

export default interactionsSlice.reducer;
